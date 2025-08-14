"use client"

import { useState, useEffect } from "react"
import * as Dialog from "@radix-ui/react-dialog"
import { X, Calendar, Clock, Flag, FolderOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import * as Label from "@radix-ui/react-label"
import { useTaskStore } from "@/store/useTaskStore"

interface CreateTaskModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onTaskCreated?: () => void
}

export function CreateTaskModal({ open, onOpenChange, onTaskCreated }: CreateTaskModalProps) {
  const { categories, fetchCategories } = useTaskStore()
  
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    dueDate: "",
    dueTime: "",
    categoryId: "",
    priority: "medium",
    estimatedMinutes: "",
    isRecurring: false,
    recurrenceFrequency: "daily",
    recurrenceInterval: 1
  })
  
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    if (open && categories.length === 0) {
      fetchCategories()
    }
  }, [open, categories.length, fetchCategories])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    if (!formData.title.trim()) {
      setError("Task title is required")
      setLoading(false)
      return
    }

    if (!formData.categoryId) {
      setError("Please select a category")
      setLoading(false)
      return
    }

    if (!formData.dueDate) {
      setError("Due date is required")
      setLoading(false)
      return
    }

    try {
      // Combine date and time
      const dueDateTime = formData.dueTime 
        ? `${formData.dueDate}T${formData.dueTime}:00`
        : `${formData.dueDate}T23:59:00`

      const taskData = {
        title: formData.title,
        description: formData.description || null,
        dueDate: new Date(dueDateTime).toISOString(),
        categoryId: formData.categoryId,
        priority: formData.priority,
        estimatedMinutes: formData.estimatedMinutes ? parseInt(formData.estimatedMinutes) : null,
        isCompleted: false
      }

      const response = await fetch("/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(taskData),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || "Failed to create task")
      }

      // Reset form and close modal
      setFormData({
        title: "",
        description: "",
        dueDate: "",
        dueTime: "",
        categoryId: "",
        priority: "medium",
        estimatedMinutes: "",
        isRecurring: false,
        recurrenceFrequency: "daily",
        recurrenceInterval: 1
      })
      
      onOpenChange(false)
      
      // Call the callback to refresh dashboard data
      if (onTaskCreated) {
        onTaskCreated()
      }
      
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  // Get today's date in YYYY-MM-DD format for min date
  const today = new Date().toISOString().split('T')[0]

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 animate-in fade-in" />
        <Dialog.Content className="fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-lg bg-background p-6 shadow-lg animate-in fade-in-0 zoom-in-95 overflow-y-auto">
          <Dialog.Title className="text-lg font-semibold">
            Create New Task
          </Dialog.Title>
          <Dialog.Description className="text-sm text-muted-foreground mt-2">
            Add a new task to your household task list
          </Dialog.Description>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            {/* Task Title */}
            <div className="space-y-2">
              <Label.Root htmlFor="title" className="text-sm font-medium">
                Task Title *
              </Label.Root>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="e.g., Take out the trash"
                required
              />
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Label.Root htmlFor="description" className="text-sm font-medium">
                Description
              </Label.Root>
              <textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Add any additional details..."
                className="w-full min-h-[80px] px-3 py-2 text-sm rounded-md border border-input bg-background"
              />
            </div>

            {/* Due Date and Time */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label.Root htmlFor="dueDate" className="text-sm font-medium flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Due Date *
                </Label.Root>
                <Input
                  id="dueDate"
                  type="date"
                  value={formData.dueDate}
                  onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
                  min={today}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label.Root htmlFor="dueTime" className="text-sm font-medium flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Time (optional)
                </Label.Root>
                <Input
                  id="dueTime"
                  type="time"
                  value={formData.dueTime}
                  onChange={(e) => setFormData({ ...formData, dueTime: e.target.value })}
                />
              </div>
            </div>

            {/* Category and Priority */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label.Root htmlFor="category" className="text-sm font-medium flex items-center gap-2">
                  <FolderOpen className="h-4 w-4" />
                  Category *
                </Label.Root>
                <select
                  id="category"
                  value={formData.categoryId}
                  onChange={(e) => setFormData({ ...formData, categoryId: e.target.value })}
                  className="w-full px-3 py-2 text-sm rounded-md border border-input bg-background"
                  required
                >
                  <option value="">Select category</option>
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.emoji && `${category.emoji} `}{category.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <Label.Root htmlFor="priority" className="text-sm font-medium flex items-center gap-2">
                  <Flag className="h-4 w-4" />
                  Priority
                </Label.Root>
                <select
                  id="priority"
                  value={formData.priority}
                  onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                  className="w-full px-3 py-2 text-sm rounded-md border border-input bg-background"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
            </div>

            {/* Estimated Time */}
            <div className="space-y-2">
              <Label.Root htmlFor="estimatedMinutes" className="text-sm font-medium">
                Estimated Time (minutes)
              </Label.Root>
              <Input
                id="estimatedMinutes"
                type="number"
                min="1"
                value={formData.estimatedMinutes}
                onChange={(e) => setFormData({ ...formData, estimatedMinutes: e.target.value })}
                placeholder="e.g., 30"
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-3 text-sm text-destructive bg-destructive/10 rounded-md">
                {error}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex justify-end gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
                disabled={loading}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={loading}>
                {loading ? "Creating..." : "Create Task"}
              </Button>
            </div>
          </form>

          <Dialog.Close asChild>
            <button
              className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}