"use client"

import React, { useState, useEffect, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { format, isAfter, isBefore, startOfDay, endOfDay, differenceInDays } from "date-fns"
import { 
  Plus, 
  Search, 
  Grid2X2, 
  List, 
  Calendar,
  Clock,
  Flag,
  CheckCircle2,
  Circle,
  MoreVertical,
  Trash2,
  Edit,
  ChevronDown,
  AlertCircle,
  SortAsc,
  SortDesc,
  X,
  CheckSquare,
  FolderOpen
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { CreateTaskModal } from "@/components/modals/CreateTaskModal"
import { useTaskStore, TaskWithCategory } from "@/store/useTaskStore"
import { cn } from "@/lib/utils"
import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import * as Checkbox from "@radix-ui/react-checkbox"
import * as Select from "@radix-ui/react-select"
import * as Tabs from "@radix-ui/react-tabs"

type ViewMode = "grid" | "list"
type SortBy = "dueDate" | "priority" | "createdAt"
type SortOrder = "asc" | "desc"
type FilterStatus = "all" | "pending" | "completed" | "overdue"
type FilterPriority = "all" | "high" | "medium" | "low"

interface DateRange {
  start: Date | null
  end: Date | null
}

export default function TasksPage() {
  const { 
    tasks, 
    categories, 
    loading, 
    error,
    fetchTasks, 
    fetchCategories,
    toggleTaskComplete,
    deleteTask,
  } = useTaskStore()

  // View and display states
  const [viewMode, setViewMode] = useState<ViewMode>("grid")
  const [searchQuery, setSearchQuery] = useState("")
  const [createModalOpen, setCreateModalOpen] = useState(false)
  const [selectedTasks, setSelectedTasks] = useState<Set<string>>(new Set())
  const [selectAll, setSelectAll] = useState(false)
  
  // Filtering states
  const [statusFilter, setStatusFilter] = useState<FilterStatus>("all")
  const [priorityFilter, setFilterPriority] = useState<FilterPriority>("all")
  const [categoryFilter, setCategoryFilter] = useState<string>("all")
  const [dateRange, setDateRange] = useState<DateRange>({ start: null, end: null })
  
  // Sorting states
  const [sortBy, setSortBy] = useState<SortBy>("dueDate")
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc")
  
  // Pagination
  const [page, setPage] = useState(1)
  const itemsPerPage = 12

  // Initialize data
  useEffect(() => {
    fetchTasks()
    fetchCategories()
  }, [fetchTasks, fetchCategories])

  // Filter and sort tasks
  const filteredAndSortedTasks = useMemo(() => {
    let filtered = [...tasks]

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(task => 
        task.title.toLowerCase().includes(query) ||
        (task.description && task.description.toLowerCase().includes(query))
      )
    }

    // Apply status filter
    if (statusFilter === "completed") {
      filtered = filtered.filter(task => task.isCompleted)
    } else if (statusFilter === "pending") {
      filtered = filtered.filter(task => !task.isCompleted)
    } else if (statusFilter === "overdue") {
      filtered = filtered.filter(task => 
        !task.isCompleted && isBefore(typeof task.dueDate === 'string' ? new Date(task.dueDate) : task.dueDate, new Date())
      )
    }

    // Apply priority filter
    if (priorityFilter !== "all") {
      filtered = filtered.filter(task => task.priority === priorityFilter)
    }

    // Apply category filter
    if (categoryFilter !== "all") {
      filtered = filtered.filter(task => task.categoryId === categoryFilter)
    }

    // Apply date range filter
    if (dateRange.start || dateRange.end) {
      filtered = filtered.filter(task => {
        const taskDate = typeof task.dueDate === 'string' ? new Date(task.dueDate) : task.dueDate
        if (dateRange.start && isBefore(taskDate, startOfDay(dateRange.start))) return false
        if (dateRange.end && isAfter(taskDate, endOfDay(dateRange.end))) return false
        return true
      })
    }

    // Sort tasks
    filtered.sort((a, b) => {
      let comparison = 0
      
      switch (sortBy) {
        case "dueDate":
          comparison = new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
          break
        case "priority":
          const priorityOrder: Record<string, number> = { high: 3, medium: 2, low: 1 }
          comparison = priorityOrder[b.priority] - priorityOrder[a.priority]
          break
        case "createdAt":
          comparison = new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
          break
      }
      
      return sortOrder === "asc" ? comparison : -comparison
    })

    return filtered
  }, [tasks, searchQuery, statusFilter, priorityFilter, categoryFilter, dateRange, sortBy, sortOrder])

  // Paginated tasks
  const paginatedTasks = useMemo(() => {
    const startIndex = (page - 1) * itemsPerPage
    return filteredAndSortedTasks.slice(startIndex, startIndex + itemsPerPage)
  }, [filteredAndSortedTasks, page, itemsPerPage])

  const totalPages = Math.ceil(filteredAndSortedTasks.length / itemsPerPage)

  // Handle select all
  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedTasks(new Set())
    } else {
      setSelectedTasks(new Set(paginatedTasks.map(task => task.id)))
    }
    setSelectAll(!selectAll)
  }

  // Handle individual task selection
  const handleTaskSelect = (taskId: string) => {
    const newSelected = new Set(selectedTasks)
    if (newSelected.has(taskId)) {
      newSelected.delete(taskId)
    } else {
      newSelected.add(taskId)
    }
    setSelectedTasks(newSelected)
    setSelectAll(newSelected.size === paginatedTasks.length)
  }

  // Bulk actions
  const handleBulkComplete = async () => {
    for (const taskId of selectedTasks) {
      const task = tasks.find(t => t.id === taskId)
      if (task && !task.isCompleted) {
        await handleToggleComplete(taskId)
      }
    }
    setSelectedTasks(new Set())
    setSelectAll(false)
  }

  const handleBulkDelete = async () => {
    if (confirm(`Are you sure you want to delete ${selectedTasks.size} task(s)?`)) {
      for (const taskId of selectedTasks) {
        await handleDeleteTask(taskId)
      }
      setSelectedTasks(new Set())
      setSelectAll(false)
    }
  }

  // Task actions
  const handleToggleComplete = async (taskId: string) => {
    try {
      const task = tasks.find(t => t.id === taskId)
      if (!task) return

      const response = await fetch(`/api/tasks/${taskId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isCompleted: !task.isCompleted })
      })

      if (response.ok) {
        toggleTaskComplete(taskId)
      }
    } catch (error) {
      console.error("Error toggling task:", error)
    }
  }

  const handleDeleteTask = async (taskId: string) => {
    try {
      const response = await fetch(`/api/tasks/${taskId}`, {
        method: "DELETE"
      })

      if (response.ok) {
        deleteTask(taskId)
      }
    } catch (error) {
      console.error("Error deleting task:", error)
    }
  }

  const handleTaskCreated = () => {
    fetchTasks()
  }

  // Priority badge component
  const PriorityBadge = ({ priority }: { priority: string }) => {
    const colors: Record<string, string> = {
      high: "bg-red-100 text-red-700 border-red-200",
      medium: "bg-yellow-100 text-yellow-700 border-yellow-200",
      low: "bg-green-100 text-green-700 border-green-200"
    }
    
    return (
      <span className={cn(
        "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium border",
        colors[priority]
      )}>
        <Flag className="h-3 w-3" />
        {priority.charAt(0).toUpperCase() + priority.slice(1)}
      </span>
    )
  }

  // Overdue indicator
  const isOverdue = (dueDate: Date | string, isCompleted: boolean) => {
    const date = typeof dueDate === 'string' ? new Date(dueDate) : dueDate
    return !isCompleted && isBefore(date, new Date())
  }

  // Task card component
  const TaskCard = ({ task }: { task: TaskWithCategory }) => {
    const overdue = isOverdue(task.dueDate, task.isCompleted)
    const daysUntilDue = differenceInDays(typeof task.dueDate === 'string' ? new Date(task.dueDate) : task.dueDate, new Date())
    
    return (
      <motion.div
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9 }}
        whileHover={{ y: -2 }}
        className="relative group"
      >
        <Card className={cn(
          "p-4 transition-all duration-200",
          task.isCompleted && "opacity-60",
          overdue && !task.isCompleted && "border-red-500 bg-red-50/50",
          selectedTasks.has(task.id) && "ring-2 ring-primary"
        )}>
          {/* Selection checkbox */}
          <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <Checkbox.Root
              className="h-5 w-5 rounded border border-input data-[state=checked]:bg-primary data-[state=checked]:border-primary"
              checked={selectedTasks.has(task.id)}
              onCheckedChange={() => handleTaskSelect(task.id)}
            >
              <Checkbox.Indicator className="flex items-center justify-center text-primary-foreground">
                <CheckSquare className="h-3 w-3" />
              </Checkbox.Indicator>
            </Checkbox.Root>
          </div>

          {/* Task content */}
          <div className="space-y-3">
            {/* Header */}
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1 min-w-0">
                <h3 className={cn(
                  "font-medium text-sm truncate",
                  task.isCompleted && "line-through text-muted-foreground"
                )}>
                  {task.title}
                </h3>
                {task.description && (
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                    {task.description}
                  </p>
                )}
              </div>
              
              {/* Actions dropdown */}
              <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Portal>
                  <DropdownMenu.Content className="z-50 min-w-[8rem] rounded-md border bg-popover p-1 text-popover-foreground shadow-md">
                    <DropdownMenu.Item
                      className="flex items-center gap-2 px-2 py-1.5 text-sm outline-none cursor-pointer hover:bg-accent hover:text-accent-foreground rounded-sm"
                      onClick={() => handleToggleComplete(task.id)}
                    >
                      {task.isCompleted ? <Circle className="h-4 w-4" /> : <CheckCircle2 className="h-4 w-4" />}
                      {task.isCompleted ? "Mark incomplete" : "Mark complete"}
                    </DropdownMenu.Item>
                    <DropdownMenu.Item
                      className="flex items-center gap-2 px-2 py-1.5 text-sm outline-none cursor-pointer hover:bg-accent hover:text-accent-foreground rounded-sm"
                    >
                      <Edit className="h-4 w-4" />
                      Edit
                    </DropdownMenu.Item>
                    <DropdownMenu.Separator className="h-px my-1 bg-border" />
                    <DropdownMenu.Item
                      className="flex items-center gap-2 px-2 py-1.5 text-sm outline-none cursor-pointer hover:bg-accent hover:text-accent-foreground rounded-sm text-destructive"
                      onClick={() => handleDeleteTask(task.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                      Delete
                    </DropdownMenu.Item>
                  </DropdownMenu.Content>
                </DropdownMenu.Portal>
              </DropdownMenu.Root>
            </div>

            {/* Metadata */}
            <div className="flex flex-wrap items-center gap-3 text-xs">
              {/* Due date */}
              <div className={cn(
                "flex items-center gap-1",
                overdue && !task.isCompleted && "text-red-600 font-medium"
              )}>
                <Calendar className="h-3 w-3" />
                <span>{format(typeof task.dueDate === 'string' ? new Date(task.dueDate) : task.dueDate, "MMM d, yyyy")}</span>
                {overdue && !task.isCompleted && (
                  <span className="text-red-600">(Overdue)</span>
                )}
                {!task.isCompleted && daysUntilDue === 0 && (
                  <span className="text-orange-600">(Today)</span>
                )}
                {!task.isCompleted && daysUntilDue === 1 && (
                  <span className="text-yellow-600">(Tomorrow)</span>
                )}
              </div>

              {/* Time estimate */}
              {task.estimatedMinutes && (
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  <span>{task.estimatedMinutes} min</span>
                </div>
              )}

              {/* Category */}
              {task.category && (
                <div className="flex items-center gap-1">
                  <FolderOpen className="h-3 w-3" />
                  <span className="truncate">
                    {task.category.emoji} {task.category.name}
                  </span>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between">
              <PriorityBadge priority={task.priority} />
              
              {/* Completion status */}
              <button
                onClick={() => handleToggleComplete(task.id)}
                className={cn(
                  "flex items-center gap-1 text-xs transition-colors",
                  task.isCompleted 
                    ? "text-green-600 hover:text-green-700" 
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {task.isCompleted ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Completed</span>
                  </>
                ) : (
                  <>
                    <Circle className="h-4 w-4" />
                    <span>Pending</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </Card>
      </motion.div>
    )
  }

  // List view row component
  const TaskRow = ({ task }: { task: TaskWithCategory }) => {
    const overdue = isOverdue(task.dueDate, task.isCompleted)
    
    return (
      <motion.div
        layout
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        className={cn(
          "group flex items-center gap-4 px-4 py-3 bg-background border rounded-lg transition-all",
          task.isCompleted && "opacity-60",
          overdue && !task.isCompleted && "border-red-500 bg-red-50/50",
          selectedTasks.has(task.id) && "ring-2 ring-primary"
        )}
      >
        {/* Selection checkbox */}
        <Checkbox.Root
          className="h-5 w-5 rounded border border-input data-[state=checked]:bg-primary data-[state=checked]:border-primary"
          checked={selectedTasks.has(task.id)}
          onCheckedChange={() => handleTaskSelect(task.id)}
        >
          <Checkbox.Indicator className="flex items-center justify-center text-primary-foreground">
            <CheckSquare className="h-3 w-3" />
          </Checkbox.Indicator>
        </Checkbox.Root>

        {/* Completion toggle */}
        <button
          onClick={() => handleToggleComplete(task.id)}
          className="flex-shrink-0"
        >
          {task.isCompleted ? (
            <CheckCircle2 className="h-5 w-5 text-green-600" />
          ) : (
            <Circle className="h-5 w-5 text-muted-foreground hover:text-foreground" />
          )}
        </button>

        {/* Task details */}
        <div className="flex-1 min-w-0 grid grid-cols-12 gap-4 items-center">
          <div className="col-span-4">
            <p className={cn(
              "font-medium text-sm truncate",
              task.isCompleted && "line-through text-muted-foreground"
            )}>
              {task.title}
            </p>
            {task.description && (
              <p className="text-xs text-muted-foreground truncate">
                {task.description}
              </p>
            )}
          </div>
          
          <div className="col-span-2 flex items-center gap-1 text-xs">
            {task.category && (
              <>
                {task.category.emoji}
                <span className="truncate">{task.category.name}</span>
              </>
            )}
          </div>
          
          <div className={cn(
            "col-span-2 text-xs",
            overdue && !task.isCompleted && "text-red-600 font-medium"
          )}>
            {format(typeof task.dueDate === 'string' ? new Date(task.dueDate) : task.dueDate, "MMM d, yyyy")}
            {overdue && !task.isCompleted && (
              <span className="block text-xs">Overdue</span>
            )}
          </div>
          
          <div className="col-span-2">
            <PriorityBadge priority={task.priority} />
          </div>
          
          <div className="col-span-1 text-xs text-muted-foreground">
            {task.estimatedMinutes && `${task.estimatedMinutes} min`}
          </div>
          
          <div className="col-span-1 flex justify-end">
            <DropdownMenu.Root>
              <DropdownMenu.Trigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Portal>
                <DropdownMenu.Content className="z-50 min-w-[8rem] rounded-md border bg-popover p-1 text-popover-foreground shadow-md">
                  <DropdownMenu.Item
                    className="flex items-center gap-2 px-2 py-1.5 text-sm outline-none cursor-pointer hover:bg-accent hover:text-accent-foreground rounded-sm"
                  >
                    <Edit className="h-4 w-4" />
                    Edit
                  </DropdownMenu.Item>
                  <DropdownMenu.Separator className="h-px my-1 bg-border" />
                  <DropdownMenu.Item
                    className="flex items-center gap-2 px-2 py-1.5 text-sm outline-none cursor-pointer hover:bg-accent hover:text-accent-foreground rounded-sm text-destructive"
                    onClick={() => handleDeleteTask(task.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                    Delete
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Tasks</h1>
          <p className="text-muted-foreground">
            Manage and track all your household tasks
          </p>
        </div>
        
        <Button onClick={() => setCreateModalOpen(true)} className="sm:w-auto w-full">
          <Plus className="h-4 w-4 mr-2" />
          New Task
        </Button>
      </div>

      {/* Filters and controls */}
      <div className="space-y-4 bg-background p-4 rounded-lg border">
        {/* Search and view toggle */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search tasks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex gap-2">
            {/* View mode toggle */}
            <div className="flex rounded-lg border p-1">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className="h-8"
              >
                <Grid2X2 className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}
                className="h-8"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
            
            {/* Sort controls */}
            <Select.Root value={sortBy} onValueChange={(value: SortBy) => setSortBy(value)}>
              <Select.Trigger className="inline-flex items-center justify-between rounded-md px-3 py-2 text-sm gap-2 bg-background border min-w-[140px]">
                <Select.Value />
                <ChevronDown className="h-4 w-4" />
              </Select.Trigger>
              <Select.Portal>
                <Select.Content className="z-50 rounded-md border bg-popover p-1 text-popover-foreground shadow-md">
                  <Select.Item value="dueDate" className="px-2 py-1.5 text-sm outline-none cursor-pointer hover:bg-accent hover:text-accent-foreground rounded-sm">
                    Due Date
                  </Select.Item>
                  <Select.Item value="priority" className="px-2 py-1.5 text-sm outline-none cursor-pointer hover:bg-accent hover:text-accent-foreground rounded-sm">
                    Priority
                  </Select.Item>
                  <Select.Item value="createdAt" className="px-2 py-1.5 text-sm outline-none cursor-pointer hover:bg-accent hover:text-accent-foreground rounded-sm">
                    Created Date
                  </Select.Item>
                </Select.Content>
              </Select.Portal>
            </Select.Root>
            
            <Button
              variant="outline"
              size="icon"
              onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
            >
              {sortOrder === "asc" ? <SortAsc className="h-4 w-4" /> : <SortDesc className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Filter tabs */}
        <Tabs.Root value={statusFilter} onValueChange={(value: string) => setStatusFilter(value as FilterStatus)}>
          <Tabs.List className="flex gap-1 p-1 bg-muted rounded-lg">
            <Tabs.Trigger 
              value="all" 
              className="flex-1 px-3 py-1.5 text-sm font-medium rounded-md transition-colors data-[state=active]:bg-background data-[state=active]:shadow-sm"
            >
              All Tasks
              <span className="ml-2 text-xs text-muted-foreground">({tasks.length})</span>
            </Tabs.Trigger>
            <Tabs.Trigger 
              value="pending" 
              className="flex-1 px-3 py-1.5 text-sm font-medium rounded-md transition-colors data-[state=active]:bg-background data-[state=active]:shadow-sm"
            >
              Pending
              <span className="ml-2 text-xs text-muted-foreground">
                ({tasks.filter(t => !t.isCompleted).length})
              </span>
            </Tabs.Trigger>
            <Tabs.Trigger 
              value="completed" 
              className="flex-1 px-3 py-1.5 text-sm font-medium rounded-md transition-colors data-[state=active]:bg-background data-[state=active]:shadow-sm"
            >
              Completed
              <span className="ml-2 text-xs text-muted-foreground">
                ({tasks.filter(t => t.isCompleted).length})
              </span>
            </Tabs.Trigger>
            <Tabs.Trigger 
              value="overdue" 
              className="flex-1 px-3 py-1.5 text-sm font-medium rounded-md transition-colors data-[state=active]:bg-background data-[state=active]:shadow-sm"
            >
              Overdue
              <span className="ml-2 text-xs text-muted-foreground">
                ({tasks.filter(t => !t.isCompleted && isBefore(typeof t.dueDate === 'string' ? new Date(t.dueDate) : t.dueDate, new Date())).length})
              </span>
            </Tabs.Trigger>
          </Tabs.List>
        </Tabs.Root>

        {/* Additional filters */}
        <div className="flex flex-wrap gap-3">
          {/* Priority filter */}
          <Select.Root value={priorityFilter} onValueChange={(value: FilterPriority) => setFilterPriority(value)}>
            <Select.Trigger className="inline-flex items-center justify-between rounded-md px-3 py-2 text-sm gap-2 bg-background border min-w-[120px]">
              <span className="flex items-center gap-2">
                <Flag className="h-4 w-4" />
                <Select.Value placeholder="Priority" />
              </span>
              <ChevronDown className="h-4 w-4" />
            </Select.Trigger>
            <Select.Portal>
              <Select.Content className="z-50 rounded-md border bg-popover p-1 text-popover-foreground shadow-md">
                <Select.Item value="all" className="px-2 py-1.5 text-sm outline-none cursor-pointer hover:bg-accent hover:text-accent-foreground rounded-sm">
                  All Priorities
                </Select.Item>
                <Select.Item value="high" className="px-2 py-1.5 text-sm outline-none cursor-pointer hover:bg-accent hover:text-accent-foreground rounded-sm">
                  High
                </Select.Item>
                <Select.Item value="medium" className="px-2 py-1.5 text-sm outline-none cursor-pointer hover:bg-accent hover:text-accent-foreground rounded-sm">
                  Medium
                </Select.Item>
                <Select.Item value="low" className="px-2 py-1.5 text-sm outline-none cursor-pointer hover:bg-accent hover:text-accent-foreground rounded-sm">
                  Low
                </Select.Item>
              </Select.Content>
            </Select.Portal>
          </Select.Root>

          {/* Category filter */}
          <Select.Root value={categoryFilter} onValueChange={setCategoryFilter}>
            <Select.Trigger className="inline-flex items-center justify-between rounded-md px-3 py-2 text-sm gap-2 bg-background border min-w-[140px]">
              <span className="flex items-center gap-2">
                <FolderOpen className="h-4 w-4" />
                <Select.Value placeholder="Category" />
              </span>
              <ChevronDown className="h-4 w-4" />
            </Select.Trigger>
            <Select.Portal>
              <Select.Content className="z-50 rounded-md border bg-popover p-1 text-popover-foreground shadow-md max-h-[300px] overflow-y-auto">
                <Select.Item value="all" className="px-2 py-1.5 text-sm outline-none cursor-pointer hover:bg-accent hover:text-accent-foreground rounded-sm">
                  All Categories
                </Select.Item>
                {categories.map(category => (
                  <Select.Item 
                    key={category.id} 
                    value={category.id}
                    className="px-2 py-1.5 text-sm outline-none cursor-pointer hover:bg-accent hover:text-accent-foreground rounded-sm"
                  >
                    {category.emoji} {category.name}
                  </Select.Item>
                ))}
              </Select.Content>
            </Select.Portal>
          </Select.Root>

          {/* Date range filter */}
          <div className="flex items-center gap-2">
            <Input
              type="date"
              value={dateRange.start ? format(dateRange.start, "yyyy-MM-dd") : ""}
              onChange={(e) => setDateRange(prev => ({ 
                ...prev, 
                start: e.target.value ? new Date(e.target.value) : null 
              }))}
              className="h-9"
              placeholder="Start date"
            />
            <span className="text-muted-foreground">to</span>
            <Input
              type="date"
              value={dateRange.end ? format(dateRange.end, "yyyy-MM-dd") : ""}
              onChange={(e) => setDateRange(prev => ({ 
                ...prev, 
                end: e.target.value ? new Date(e.target.value) : null 
              }))}
              className="h-9"
              placeholder="End date"
            />
            {(dateRange.start || dateRange.end) && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setDateRange({ start: null, end: null })}
                className="h-9 w-9"
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>

        {/* Bulk actions */}
        {selectedTasks.size > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between p-3 bg-primary/10 rounded-lg"
          >
            <span className="text-sm font-medium">
              {selectedTasks.size} task{selectedTasks.size > 1 ? "s" : ""} selected
            </span>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleBulkComplete}
              >
                <CheckCircle2 className="h-4 w-4 mr-2" />
                Mark Complete
              </Button>
              <Button
                variant="destructive"
                size="sm"
                onClick={handleBulkDelete}
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Delete
              </Button>
            </div>
          </motion.div>
        )}
      </div>

      {/* Loading state */}
      {loading.tasks && (
        <div className="flex items-center justify-center py-12">
          <div className="text-center space-y-3">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto" />
            <p className="text-muted-foreground">Loading tasks...</p>
          </div>
        </div>
      )}

      {/* Error state */}
      {error && (
        <div className="flex items-center justify-center py-12">
          <div className="text-center space-y-3">
            <AlertCircle className="h-12 w-12 text-destructive mx-auto" />
            <p className="text-destructive">{error}</p>
            <Button onClick={() => fetchTasks()}>Try Again</Button>
          </div>
        </div>
      )}

      {/* Empty state */}
      {!loading.tasks && !error && filteredAndSortedTasks.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center justify-center py-12 px-4"
        >
          <div className="text-center space-y-3 max-w-md">
            {searchQuery || statusFilter !== "all" || priorityFilter !== "all" || categoryFilter !== "all" ? (
              <>
                <Search className="h-12 w-12 text-muted-foreground mx-auto" />
                <h3 className="text-lg font-semibold">No tasks found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search or filters to find what you&apos;re looking for.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchQuery("")
                    setStatusFilter("all")
                    setFilterPriority("all")
                    setCategoryFilter("all")
                    setDateRange({ start: null, end: null })
                  }}
                >
                  Clear Filters
                </Button>
              </>
            ) : (
              <>
                <CheckCircle2 className="h-12 w-12 text-muted-foreground mx-auto" />
                <h3 className="text-lg font-semibold">No tasks yet</h3>
                <p className="text-muted-foreground">
                  Create your first task to get started with managing your household responsibilities.
                </p>
                <Button onClick={() => setCreateModalOpen(true)}>
                  <Plus className="h-4 w-4 mr-2" />
                  Create Your First Task
                </Button>
              </>
            )}
          </div>
        </motion.div>
      )}

      {/* Tasks grid/list */}
      {!loading.tasks && !error && filteredAndSortedTasks.length > 0 && (
        <>
          {/* Select all checkbox for list view */}
          {viewMode === "list" && paginatedTasks.length > 0 && (
            <div className="flex items-center gap-3 px-4 py-2 bg-muted/50 rounded-lg">
              <Checkbox.Root
                className="h-5 w-5 rounded border border-input data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                checked={selectAll}
                onCheckedChange={handleSelectAll}
              >
                <Checkbox.Indicator className="flex items-center justify-center text-primary-foreground">
                  <CheckSquare className="h-3 w-3" />
                </Checkbox.Indicator>
              </Checkbox.Root>
              <span className="text-sm text-muted-foreground">Select all</span>
            </div>
          )}

          {/* Tasks display */}
          <AnimatePresence mode="popLayout">
            {viewMode === "grid" ? (
              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
              >
                {paginatedTasks.map(task => (
                  <TaskCard key={task.id} task={task} />
                ))}
              </motion.div>
            ) : (
              <motion.div layout className="space-y-2">
                {paginatedTasks.map(task => (
                  <TaskRow key={task.id} task={task} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-6">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setPage(Math.max(1, page - 1))}
                disabled={page === 1}
              >
                Previous
              </Button>
              
              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1)
                  .filter(p => p === 1 || p === totalPages || Math.abs(p - page) <= 1)
                  .map((p, index, array) => (
                    <React.Fragment key={p}>
                      {index > 0 && array[index - 1] !== p - 1 && (
                        <span className="text-muted-foreground">...</span>
                      )}
                      <Button
                        variant={p === page ? "default" : "outline"}
                        size="sm"
                        onClick={() => setPage(p)}
                        className="h-8 w-8 p-0"
                      >
                        {p}
                      </Button>
                    </React.Fragment>
                  ))
                }
              </div>
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => setPage(Math.min(totalPages, page + 1))}
                disabled={page === totalPages}
              >
                Next
              </Button>
            </div>
          )}
        </>
      )}

      {/* Create Task Modal */}
      <CreateTaskModal
        open={createModalOpen}
        onOpenChange={setCreateModalOpen}
        onTaskCreated={handleTaskCreated}
      />
    </div>
  )
}