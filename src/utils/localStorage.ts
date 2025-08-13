import { Task, User } from '../types';

const STORAGE_KEYS = {
  TASKS: 'household-tasks',
  USER: 'household-user',
  THEME: 'household-theme',
  LAST_SYNC: 'household-last-sync'
} as const;

export class LocalStorageManager {
  static saveTasks(tasks: Task[]): void {
    try {
      const serializedTasks = tasks.map(task => ({
        ...task,
        dueDate: task.dueDate.toISOString(),
        createdAt: task.createdAt.toISOString(),
        updatedAt: task.updatedAt.toISOString(),
        completedAt: task.completedAt?.toISOString()
      }));
      localStorage.setItem(STORAGE_KEYS.TASKS, JSON.stringify(serializedTasks));
    } catch (error) {
      console.error('Failed to save tasks to localStorage:', error);
    }
  }

  static loadTasks(): Task[] {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.TASKS);
      if (!stored) return [];

      const parsed = JSON.parse(stored);
      return parsed.map((task: any) => ({
        ...task,
        dueDate: new Date(task.dueDate),
        createdAt: new Date(task.createdAt),
        updatedAt: new Date(task.updatedAt),
        completedAt: task.completedAt ? new Date(task.completedAt) : undefined
      }));
    } catch (error) {
      console.error('Failed to load tasks from localStorage:', error);
      return [];
    }
  }

  static saveUser(user: User): void {
    try {
      localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
    } catch (error) {
      console.error('Failed to save user to localStorage:', error);
    }
  }

  static loadUser(): User | null {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.USER);
      return stored ? JSON.parse(stored) : null;
    } catch (error) {
      console.error('Failed to load user from localStorage:', error);
      return null;
    }
  }

  static saveTheme(theme: 'light' | 'dark' | 'auto'): void {
    try {
      localStorage.setItem(STORAGE_KEYS.THEME, theme);
    } catch (error) {
      console.error('Failed to save theme to localStorage:', error);
    }
  }

  static loadTheme(): 'light' | 'dark' | 'auto' | null {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.THEME);
      return stored as 'light' | 'dark' | 'auto' | null;
    } catch (error) {
      console.error('Failed to load theme from localStorage:', error);
      return null;
    }
  }

  static clearAll(): void {
    try {
      Object.values(STORAGE_KEYS).forEach(key => {
        localStorage.removeItem(key);
      });
    } catch (error) {
      console.error('Failed to clear localStorage:', error);
    }
  }

  static updateLastSync(): void {
    try {
      localStorage.setItem(STORAGE_KEYS.LAST_SYNC, new Date().toISOString());
    } catch (error) {
      console.error('Failed to update last sync time:', error);
    }
  }

  static getLastSync(): Date | null {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.LAST_SYNC);
      return stored ? new Date(stored) : null;
    } catch (error) {
      console.error('Failed to get last sync time:', error);
      return null;
    }
  }
}