export type TaskCategory = 
  | 'cleaning' 
  | 'cooking' 
  | 'shopping' 
  | 'laundry' 
  | 'maintenance' 
  | 'organization' 
  | 'outdoor'
  | 'personal'
  | 'other';

export type DayOfWeek = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';

export type RecurrencePattern = {
  type: 'weekly' | 'daily' | 'custom';
  days: DayOfWeek[];
};

export interface Task {
  id: string;
  title: string;
  description?: string;
  category: TaskCategory;
  estimatedMinutes?: number;
  isCompleted: boolean;
  completedAt?: Date;
  dueDate: Date;
  createdAt: Date;
  updatedAt: Date;
  recurrence?: RecurrencePattern;
  isRecurring: boolean;
  originalTaskId?: string;
}

export interface WeeklyView {
  startDate: Date;
  endDate: Date;
  tasks: Record<DayOfWeek, Task[]>;
}

export interface TaskStatistics {
  completedToday: number;
  completedThisWeek: number;
  currentStreak: number;
  longestStreak: number;
  totalTasksCompleted: number;
  averageCompletionTime: number;
  categoryStats: Record<TaskCategory, number>;
}

export interface User {
  id: string;
  name: string;
  email: string;
  preferences: {
    theme: 'light' | 'dark' | 'auto';
    notifications: boolean;
    startDayOfWeek: DayOfWeek;
    defaultTaskDuration: number;
  };
}

export interface TaskFormData {
  title: string;
  description: string;
  category: TaskCategory;
  estimatedMinutes: number;
  dueDate: Date;
  isRecurring: boolean;
  recurrence?: RecurrencePattern;
}

export interface AppState {
  user: User | null;
  tasks: Task[];
  currentWeek: WeeklyView;
  isLoading: boolean;
  error: string | null;
  selectedDate: Date;
  showCompletedTasks: boolean;
}