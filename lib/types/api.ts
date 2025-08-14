// Dashboard API Types
export interface DashboardStats {
  totalTasks: number
  overdueTasks: number
  dueTodayTasks: number
  completedThisWeek: number
  completedThisWeekChange: number // percentage change from last week
}

// Task API Types
export interface UpcomingTask {
  id: string
  title: string
  description?: string
  dueDate: string // formatted display string
  priority: 'high' | 'medium' | 'low'
  category: string
  categoryColor?: string
  categoryEmoji?: string
  estimatedMinutes?: number
  isOverdue: boolean
}

// Category API Types
export interface CategoryWithStats {
  id: string
  name: string
  emoji?: string
  color?: string
  taskCount: number
  isPersonal: boolean
  household?: {
    id: string
    name: string
  }
  createdAt: Date
  updatedAt: Date
}

// Household API Types
export interface HouseholdMember {
  id: string
  role: string
  joinedAt: Date
  user: {
    id: string
    name: string | null
    email: string
  }
}

export interface HouseholdWithStats {
  id: string
  name: string
  description?: string
  createdAt: Date
  updatedAt: Date
  userRole: string
  userJoinedAt?: Date
  members: HouseholdMember[]
  stats: {
    activeTasks: number
    categories: number
    members: number
  }
}

// Generic API Response Types
export interface ApiResponse<T> {
  data?: T
  error?: string
}

export interface ApiError {
  error: string
  details?: unknown
}

// Loading States
export interface LoadingState {
  isLoading: boolean
  error: string | null
}

// Dashboard Data Interface
export interface DashboardData {
  stats: DashboardStats | null
  upcomingTasks: UpcomingTask[]
  categories: CategoryWithStats[]
  households: HouseholdWithStats[]
  loading: {
    stats: LoadingState
    tasks: LoadingState
    categories: LoadingState
    households: LoadingState
  }
}