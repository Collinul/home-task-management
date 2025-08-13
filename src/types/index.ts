import { Category } from '@prisma/client';

export type TaskCategory = string;

export type DayOfWeek = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';

export type RecurrencePattern = {
  frequency: string;
  interval?: number;
  daysOfWeek?: string[];
  dayOfMonth?: number;
  endDate?: Date;
  occurrences?: number;
};

export interface Task {
  id: string;
  title: string;
  description?: string;
  category: string;
  categoryId: string;
  estimatedMinutes?: number;
  actualMinutes?: number;
  priority: 'low' | 'medium' | 'high';
  isCompleted: boolean;
  completedAt?: Date;
  dueDate: Date;
  createdAt: Date;
  updatedAt: Date;
  recurrence?: RecurrencePattern;
  parentTaskId?: string;
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
  categoryStats: Record<string, number>;
}

export interface User {
  id: string;
  name?: string;
  email: string;
  preferences?: {
    theme: 'light' | 'dark' | 'auto';
    notifications: boolean;
    startDayOfWeek: DayOfWeek;
    defaultTaskDuration: number;
  };
}

export interface TaskFormData {
  title: string;
  description?: string;
  categoryId: string;
  estimatedMinutes?: number;
  priority?: 'low' | 'medium' | 'high';
  dueDate: Date;
  recurrenceRule?: RecurrencePattern;
}

export interface AppState {
  user: User | null;
  tasks: Task[];
  categories: Category[];
  currentWeek: WeeklyView;
  isLoading: boolean;
  error: string | null;
  selectedDate: Date;
  showCompletedTasks: boolean;
}