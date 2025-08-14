import { create } from 'zustand'
import { Task, Category, Household } from '../prisma/generated/client'

export type TaskWithCategory = Task & {
  category: Category
}

interface TaskStore {
  tasks: TaskWithCategory[]
  categories: Category[]
  selectedHousehold: Household | null
  loading: {
    tasks: boolean
    categories: boolean
  }
  error: string | null
  filter: {
    status: 'all' | 'pending' | 'completed'
    priority: 'all' | 'high' | 'medium' | 'low'
    category: string | null
    assignedTo: string | null
  }
  
  // Actions
  setTasks: (tasks: TaskWithCategory[]) => void
  addTask: (task: TaskWithCategory) => void
  updateTask: (taskId: string, updates: Partial<Task>) => void
  deleteTask: (taskId: string) => void
  toggleTaskComplete: (taskId: string) => void
  
  setCategories: (categories: Category[]) => void
  addCategory: (category: Category) => void
  updateCategory: (categoryId: string, updates: Partial<Category>) => void
  deleteCategory: (categoryId: string) => void
  
  setSelectedHousehold: (household: Household | null) => void
  setFilter: (filter: Partial<TaskStore['filter']>) => void
  
  // Loading states
  setLoading: (type: 'tasks' | 'categories', loading: boolean) => void
  setError: (error: string | null) => void
  
  // API helpers
  fetchTasks: () => Promise<void>
  fetchCategories: () => Promise<void>
  
  // Computed
  filteredTasks: () => TaskWithCategory[]
}

export const useTaskStore = create<TaskStore>((set, get) => ({
  tasks: [],
  categories: [],
  selectedHousehold: null,
  loading: {
    tasks: false,
    categories: false,
  },
  error: null,
  filter: {
    status: 'all',
    priority: 'all',
    category: null,
    assignedTo: null,
  },
  
  setTasks: (tasks) => set({ tasks }),
  
  addTask: (task) => set((state) => ({
    tasks: [...state.tasks, task]
  })),
  
  updateTask: (taskId, updates) => set((state) => ({
    tasks: state.tasks.map((task) =>
      task.id === taskId ? { ...task, ...updates } : task
    )
  })),
  
  deleteTask: (taskId) => set((state) => ({
    tasks: state.tasks.filter((task) => task.id !== taskId)
  })),
  
  toggleTaskComplete: (taskId) => set((state) => ({
    tasks: state.tasks.map((task) =>
      task.id === taskId 
        ? { 
            ...task, 
            isCompleted: !task.isCompleted,
            completedAt: !task.isCompleted ? new Date() : null
          } 
        : task
    )
  })),
  
  setCategories: (categories) => set({ categories }),
  
  addCategory: (category) => set((state) => ({
    categories: [...state.categories, category]
  })),
  
  updateCategory: (categoryId, updates) => set((state) => ({
    categories: state.categories.map((category) =>
      category.id === categoryId ? { ...category, ...updates } : category
    )
  })),
  
  deleteCategory: (categoryId) => set((state) => ({
    categories: state.categories.filter((category) => category.id !== categoryId)
  })),
  
  setSelectedHousehold: (household) => set({ selectedHousehold: household }),
  
  setFilter: (filter) => set((state) => ({
    filter: { ...state.filter, ...filter }
  })),
  
  // Loading states
  setLoading: (type, loading) => set((state) => ({
    loading: { ...state.loading, [type]: loading }
  })),
  
  setError: (error) => set({ error }),
  
  // API helpers
  fetchTasks: async () => {
    try {
      set((state) => ({ 
        loading: { ...state.loading, tasks: true },
        error: null 
      }))
      
      const response = await fetch('/api/tasks')
      if (!response.ok) {
        throw new Error('Failed to fetch tasks')
      }
      
      const tasks = await response.json()
      set({ tasks })
    } catch (error) {
      console.error('Error fetching tasks:', error)
      set({ 
        error: error instanceof Error ? error.message : 'Failed to fetch tasks' 
      })
    } finally {
      set((state) => ({ 
        loading: { ...state.loading, tasks: false }
      }))
    }
  },
  
  fetchCategories: async () => {
    try {
      set((state) => ({ 
        loading: { ...state.loading, categories: true },
        error: null 
      }))
      
      const response = await fetch('/api/categories')
      if (!response.ok) {
        throw new Error('Failed to fetch categories')
      }
      
      const categories = await response.json()
      set({ categories })
    } catch (error) {
      console.error('Error fetching categories:', error)
      set({ 
        error: error instanceof Error ? error.message : 'Failed to fetch categories' 
      })
    } finally {
      set((state) => ({ 
        loading: { ...state.loading, categories: false }
      }))
    }
  },
  
  filteredTasks: () => {
    const { tasks, filter } = get()
    
    return tasks.filter((task) => {
      if (filter.status === 'completed' && !task.isCompleted) return false
      if (filter.status === 'pending' && task.isCompleted) return false
      
      if (filter.priority !== 'all' && task.priority !== filter.priority) return false
      
      if (filter.category && task.categoryId !== filter.category) return false
      
      if (filter.assignedTo && task.assignedToId !== filter.assignedTo) return false
      
      return true
    })
  }
}))