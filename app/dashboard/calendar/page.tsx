"use client"

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { Calendar, ChevronLeft, ChevronRight, AlertCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface CalendarTask {
  id: string
  title: string
  dueDate: string
  priority: string
  categoryEmoji?: string
  category: string
  isOverdue: boolean
}

export default function CalendarPage() {
  const { data: session } = useSession()
  const [currentDate, setCurrentDate] = useState(new Date())
  const [tasks, setTasks] = useState<CalendarTask[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (session?.user?.id) {
      fetchCalendarTasks()
    }
  }, [session?.user?.id, currentDate]) // fetchCalendarTasks changes on each render, so we don't include it

  const fetchCalendarTasks = async () => {
    try {
      setLoading(true)
      setError(null)
      
      const response = await fetch('/api/tasks?status=pending&limit=100')
      if (!response.ok) {
        throw new Error('Failed to fetch tasks')
      }
      
      const data = await response.json()
      setTasks(data.tasks.map((task: {
        id: string;
        title: string;
        dueDate: string;
        priority: string;
        category?: { emoji?: string; name: string };
      }) => ({
        id: task.id,
        title: task.title,
        dueDate: new Date(task.dueDate).toLocaleDateString(),
        priority: task.priority,
        categoryEmoji: task.category?.emoji,
        category: task.category?.name || 'Uncategorized',
        isOverdue: new Date(task.dueDate) < new Date()
      })))
    } catch (err) {
      console.error('Error fetching calendar tasks:', err)
      setError(err instanceof Error ? err.message : 'Failed to load tasks')
    } finally {
      setLoading(false)
    }
  }

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ]

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate()
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay()
  
  const calendarDays = []
  
  // Add empty cells for days before the first day of the month
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push(null)
  }
  
  // Add days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day)
  }

  const getTasksForDay = (day: number) => {
    if (!day) return []
    const dateString = new Date(currentDate.getFullYear(), currentDate.getMonth(), day).toLocaleDateString()
    return tasks.filter(task => task.dueDate === dateString)
  }

  const navigateMonth = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate)
    if (direction === 'prev') {
      newDate.setMonth(currentDate.getMonth() - 1)
    } else {
      newDate.setMonth(currentDate.getMonth() + 1)
    }
    setCurrentDate(newDate)
  }

  const isToday = (day: number) => {
    if (!day) return false
    const today = new Date()
    return (
      day === today.getDate() &&
      currentDate.getMonth() === today.getMonth() &&
      currentDate.getFullYear() === today.getFullYear()
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Calendar className="h-6 w-6" />
          <h1 className="text-3xl font-bold tracking-tight">Calendar</h1>
        </div>
        <div className="text-sm text-muted-foreground">
          Welcome back, {session?.user?.name?.split(' ')[0] || 'User'}!
        </div>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigateMonth('prev')}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <CardTitle className="text-xl">
              {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
            </CardTitle>
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigateMonth('next')}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          <CardDescription>
            {loading ? "Loading your tasks..." : 
             tasks.length === 0 ? "No tasks scheduled" : 
             `${tasks.length} task${tasks.length !== 1 ? 's' : ''} scheduled this month`}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {error ? (
            <div className="text-center py-8 text-muted-foreground">
              <AlertCircle className="h-12 w-12 mx-auto mb-4 text-destructive" />
              <p className="text-lg font-medium mb-2">Error loading calendar</p>
              <p className="text-sm">{error}</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={fetchCalendarTasks}
              >
                Try again
              </Button>
            </div>
          ) : (
            <>
              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-1 mb-4">
                {/* Day headers */}
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                  <div key={day} className="p-2 text-center text-sm font-medium text-muted-foreground">
                    {day}
                  </div>
                ))}
                
                {/* Calendar days */}
                {calendarDays.map((day, index) => {
                  const dayTasks = getTasksForDay(day || 0)
                  
                  return (
                    <div
                      key={index}
                      className={`
                        min-h-[100px] p-2 border rounded-md transition-colors
                        ${day ? 'bg-background hover:bg-muted cursor-pointer' : 'bg-muted/30'}
                        ${isToday(day || 0) ? 'border-primary bg-primary/5' : 'border-border'}
                      `}
                    >
                      {day && (
                        <>
                          <div className={`text-sm font-medium mb-1 ${isToday(day) ? 'text-primary' : ''}`}>
                            {day}
                          </div>
                          <div className="space-y-1">
                            {dayTasks.slice(0, 3).map((task) => (
                              <div
                                key={task.id}
                                className={`text-xs p-1 rounded truncate ${
                                  task.isOverdue 
                                    ? 'bg-red-100 text-red-800 border border-red-200' 
                                    : task.priority === 'high'
                                    ? 'bg-red-50 text-red-700'
                                    : task.priority === 'medium'
                                    ? 'bg-yellow-50 text-yellow-700'
                                    : 'bg-green-50 text-green-700'
                                }`}
                                title={task.title}
                              >
                                {task.categoryEmoji && <span className="mr-1">{task.categoryEmoji}</span>}
                                {task.title}
                              </div>
                            ))}
                            {dayTasks.length > 3 && (
                              <div className="text-xs text-muted-foreground">
                                +{dayTasks.length - 3} more
                              </div>
                            )}
                          </div>
                        </>
                      )}
                    </div>
                  )
                })}
              </div>
              
              {/* Legend */}
              <div className="flex items-center gap-4 text-xs text-muted-foreground pt-4 border-t">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-green-100 border border-green-200"></div>
                  <span>Low Priority</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-yellow-100 border border-yellow-200"></div>
                  <span>Medium Priority</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-red-100 border border-red-200"></div>
                  <span>High Priority / Overdue</span>
                </div>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  )
}