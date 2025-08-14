"use client"

import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckSquare, Clock, AlertCircle, TrendingUp, Calendar } from "lucide-react"
import { DashboardStats, UpcomingTask } from "@/lib/types/api"

export default function DashboardPage() {
  const { data: session } = useSession()
  const [stats, setStats] = useState<DashboardStats | null>(null)
  const [upcomingTasks, setUpcomingTasks] = useState<UpcomingTask[]>([])
  const [loading, setLoading] = useState({
    stats: true,
    tasks: true
  })
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (session?.user?.id) {
      fetchDashboardData()
    }
  }, [session?.user?.id])

  const fetchDashboardData = async () => {
    try {
      setError(null)
      
      // Fetch stats and tasks in parallel
      const [statsResponse, tasksResponse] = await Promise.all([
        fetch('/api/dashboard/stats'),
        fetch('/api/tasks/upcoming?limit=8')
      ])

      if (!statsResponse.ok) {
        throw new Error('Failed to fetch dashboard stats')
      }
      if (!tasksResponse.ok) {
        throw new Error('Failed to fetch upcoming tasks')
      }

      const statsData = await statsResponse.json()
      const tasksData = await tasksResponse.json()

      setStats(statsData)
      setUpcomingTasks(tasksData)
    } catch (err) {
      console.error('Error fetching dashboard data:', err)
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading({ stats: false, tasks: false })
    }
  }

  const formatStatsForDisplay = (stats: DashboardStats | null) => {
    if (!stats) return []
    
    return [
      {
        title: "Total Tasks",
        value: stats.totalTasks.toString(),
        description: "Active tasks",
        icon: CheckSquare,
        color: "text-blue-600",
      },
      {
        title: "Overdue",
        value: stats.overdueTasks.toString(),
        description: stats.overdueTasks > 0 ? "Need attention" : "All caught up!",
        icon: AlertCircle,
        color: stats.overdueTasks > 0 ? "text-red-600" : "text-green-600",
      },
      {
        title: "Due Today",
        value: stats.dueTodayTasks.toString(),
        description: stats.dueTodayTasks > 0 ? "Don&apos;t forget!" : "Nothing due today",
        icon: Clock,
        color: "text-yellow-600",
      },
      {
        title: "Completed This Week",
        value: stats.completedThisWeek.toString(),
        description: `${stats.completedThisWeekChange >= 0 ? '+' : ''}${stats.completedThisWeekChange}% from last week`,
        icon: TrendingUp,
        color: stats.completedThisWeekChange >= 0 ? "text-green-600" : "text-red-600",
      },
    ]
  }

  const displayStats = formatStatsForDisplay(stats)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">
          Welcome back, {session?.user?.name?.split(' ')[0] || 'User'}!
        </h1>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          {new Intl.DateTimeFormat('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          }).format(new Date())}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {loading.stats ? (
          Array.from({ length: 4 }).map((_, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div className="h-4 w-20 bg-muted animate-pulse rounded"></div>
                <div className="h-4 w-4 bg-muted animate-pulse rounded"></div>
              </CardHeader>
              <CardContent>
                <div className="h-8 w-12 bg-muted animate-pulse rounded mb-2"></div>
                <div className="h-3 w-24 bg-muted animate-pulse rounded"></div>
              </CardContent>
            </Card>
          ))
        ) : error ? (
          <div className="col-span-full p-6 text-center text-muted-foreground">
            <p>Failed to load dashboard stats: {error}</p>
            <button 
              onClick={fetchDashboardData} 
              className="mt-2 text-primary hover:underline"
            >
              Try again
            </button>
          </div>
        ) : (
          displayStats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Upcoming Tasks</CardTitle>
            <CardDescription>
              {loading.tasks ? "Loading your tasks..." : 
               upcomingTasks.length === 0 ? "No upcoming tasks" : 
               "Your tasks for the next few days"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {loading.tasks ? (
                Array.from({ length: 4 }).map((_, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 rounded-lg bg-muted/50">
                    <div className="flex-1 space-y-2">
                      <div className="h-4 w-32 bg-muted animate-pulse rounded"></div>
                      <div className="h-3 w-48 bg-muted animate-pulse rounded"></div>
                    </div>
                    <div className="h-6 w-16 bg-muted animate-pulse rounded-full"></div>
                  </div>
                ))
              ) : upcomingTasks.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <CheckSquare className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p className="text-lg font-medium mb-2">No upcoming tasks</p>
                  <p className="text-sm">You&apos;re all caught up! Consider creating a new task.</p>
                </div>
              ) : (
                upcomingTasks.map((task) => (
                  <div key={task.id} className={`flex items-center gap-4 p-3 rounded-lg ${
                    task.isOverdue ? 'bg-red-50 border-red-200 border' : 'bg-muted/50'
                  }`}>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        {task.categoryEmoji && (
                          <span className="text-sm">{task.categoryEmoji}</span>
                        )}
                        <p className={`font-medium ${
                          task.isOverdue ? 'text-red-900' : ''
                        }`}>{task.title}</p>
                      </div>
                      <p className={`text-sm ${
                        task.isOverdue ? 'text-red-700' : 'text-muted-foreground'
                      }`}>
                        {task.dueDate} • {task.category}
                        {task.estimatedMinutes && (
                          <span className="ml-2">• ~{task.estimatedMinutes}min</span>
                        )}
                      </p>
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                      task.priority === 'high' ? 'bg-red-100 text-red-800' :
                      task.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {task.priority}
                    </div>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <button className="w-full p-3 text-left rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
              <div className="font-medium">Create New Task</div>
              <div className="text-sm opacity-80">Add a task to your list</div>
            </button>
            <button className="w-full p-3 text-left rounded-lg bg-muted hover:bg-muted/80 transition-colors">
              <div className="font-medium">Invite Family Member</div>
              <div className="text-sm text-muted-foreground">Share household tasks</div>
            </button>
            <button className="w-full p-3 text-left rounded-lg bg-muted hover:bg-muted/80 transition-colors">
              <div className="font-medium">View Calendar</div>
              <div className="text-sm text-muted-foreground">See all your tasks</div>
            </button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}