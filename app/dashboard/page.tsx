"use client"

import { useSession } from "next-auth/react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckSquare, Clock, AlertCircle, Users, TrendingUp, Calendar } from "lucide-react"

export default function DashboardPage() {
  const { data: session } = useSession()

  const stats = [
    {
      title: "Total Tasks",
      value: "24",
      description: "+2 from yesterday",
      icon: CheckSquare,
      color: "text-blue-600",
    },
    {
      title: "Overdue",
      value: "3",
      description: "Need attention",
      icon: AlertCircle,
      color: "text-red-600",
    },
    {
      title: "Due Today",
      value: "5",
      description: "Don't forget!",
      icon: Clock,
      color: "text-yellow-600",
    },
    {
      title: "Completed This Week",
      value: "12",
      description: "+20% from last week",
      icon: TrendingUp,
      color: "text-green-600",
    },
  ]

  const upcomingTasks = [
    { id: 1, title: "Take out trash", dueDate: "Today, 6:00 PM", priority: "high", category: "Chores" },
    { id: 2, title: "Grocery shopping", dueDate: "Tomorrow, 10:00 AM", priority: "medium", category: "Shopping" },
    { id: 3, title: "Clean bathroom", dueDate: "Tomorrow, 2:00 PM", priority: "high", category: "Cleaning" },
    { id: 4, title: "Call dentist", dueDate: "Friday, 9:00 AM", priority: "low", category: "Personal" },
  ]

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
        {stats.map((stat, index) => (
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
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Upcoming Tasks</CardTitle>
            <CardDescription>Your tasks for the next few days</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingTasks.map((task) => (
                <div key={task.id} className="flex items-center gap-4 p-3 rounded-lg bg-muted/50">
                  <div className="flex-1">
                    <p className="font-medium">{task.title}</p>
                    <p className="text-sm text-muted-foreground">{task.dueDate} • {task.category}</p>
                  </div>
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                    task.priority === 'high' ? 'bg-red-100 text-red-800' :
                    task.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {task.priority}
                  </div>
                </div>
              ))}
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