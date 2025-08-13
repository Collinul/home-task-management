import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import { Task, TaskFormData, DayOfWeek, AppState, WeeklyView } from '../types';
import { TaskAPI } from '../api/taskApi';
import { CategoryAPI } from '../api/categoryApi';
import { getDayOfWeekFromDate, getWeekDays, getWeekRange } from '../utils/dateUtils';
import { TaskWithRelations } from '../services/taskService';
import { Category } from '@prisma/client';

type TaskAction = 
  | { type: 'LOAD_TASKS'; payload: TaskWithRelations[] }
  | { type: 'LOAD_CATEGORIES'; payload: Category[] }
  | { type: 'ADD_TASK'; payload: TaskWithRelations }
  | { type: 'UPDATE_TASK'; payload: TaskWithRelations }
  | { type: 'DELETE_TASK'; payload: string }
  | { type: 'TOGGLE_TASK'; payload: TaskWithRelations }
  | { type: 'MOVE_TASK'; payload: TaskWithRelations }
  | { type: 'SET_SELECTED_DATE'; payload: Date }
  | { type: 'TOGGLE_COMPLETED_VISIBILITY' }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'SET_USER'; payload: { id: string; email: string; name?: string } | null }
  | { type: 'NEXT_WEEK' }
  | { type: 'PREVIOUS_WEEK' }
  | { type: 'GO_TO_TODAY' };

const initialState: AppState = {
  user: null,
  tasks: [],
  categories: [],
  currentWeek: {
    startDate: new Date(),
    endDate: new Date(),
    tasks: {
      monday: [],
      tuesday: [],
      wednesday: [],
      thursday: [],
      friday: [],
      saturday: [],
      sunday: []
    }
  },
  isLoading: false,
  error: null,
  selectedDate: new Date(),
  showCompletedTasks: true
};

function convertPrismaTaskToAppTask(prismaTask: TaskWithRelations): Task {
  return {
    id: prismaTask.id,
    title: prismaTask.title,
    description: prismaTask.description || undefined,
    category: prismaTask.category.name,
    categoryId: prismaTask.categoryId,
    dueDate: new Date(prismaTask.dueDate),
    estimatedMinutes: prismaTask.estimatedMinutes || undefined,
    actualMinutes: prismaTask.actualMinutes || undefined,
    priority: (prismaTask.priority || 'medium') as 'low' | 'medium' | 'high',
    isCompleted: prismaTask.isCompleted,
    completedAt: prismaTask.completedAt ? new Date(prismaTask.completedAt) : undefined,
    createdAt: new Date(prismaTask.createdAt),
    updatedAt: new Date(prismaTask.updatedAt)
  };
}

function createWeeklyView(tasks: Task[], selectedDate: Date): WeeklyView {
  const { start, end } = getWeekRange(selectedDate);
  const weekDays = getWeekDays(selectedDate);
  
  const weeklyTasks: Record<DayOfWeek, Task[]> = {
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: [],
    sunday: []
  };

  tasks.forEach(task => {
    const taskDay = getDayOfWeekFromDate(task.dueDate);
    const isTaskInCurrentWeek = weekDays.some(day => 
      day.toDateString() === task.dueDate.toDateString()
    );
    
    if (isTaskInCurrentWeek) {
      weeklyTasks[taskDay].push(task);
    }
  });

  Object.keys(weeklyTasks).forEach(day => {
    weeklyTasks[day as DayOfWeek].sort((a, b) => {
      if (a.isCompleted !== b.isCompleted) {
        return a.isCompleted ? 1 : -1;
      }
      if (a.priority !== b.priority) {
        const priorityOrder = { high: 0, medium: 1, low: 2 };
        return priorityOrder[a.priority] - priorityOrder[b.priority];
      }
      return a.createdAt.getTime() - b.createdAt.getTime();
    });
  });

  return {
    startDate: start,
    endDate: end,
    tasks: weeklyTasks
  };
}

function taskReducer(state: AppState, action: TaskAction): AppState {
  switch (action.type) {
    case 'LOAD_TASKS': {
      const tasks = action.payload.map(convertPrismaTaskToAppTask);
      const currentWeek = createWeeklyView(tasks, state.selectedDate);
      return {
        ...state,
        tasks,
        currentWeek,
        isLoading: false
      };
    }

    case 'LOAD_CATEGORIES': {
      return {
        ...state,
        categories: action.payload
      };
    }
    
    case 'ADD_TASK': {
      const newTask = convertPrismaTaskToAppTask(action.payload);
      const updatedTasks = [...state.tasks, newTask];
      const currentWeek = createWeeklyView(updatedTasks, state.selectedDate);
      
      return {
        ...state,
        tasks: updatedTasks,
        currentWeek
      };
    }
    
    case 'UPDATE_TASK': {
      const updatedTask = convertPrismaTaskToAppTask(action.payload);
      const updatedTasks = state.tasks.map(task =>
        task.id === updatedTask.id ? updatedTask : task
      );
      
      const currentWeek = createWeeklyView(updatedTasks, state.selectedDate);
      
      return {
        ...state,
        tasks: updatedTasks,
        currentWeek
      };
    }
    
    case 'DELETE_TASK': {
      const updatedTasks = state.tasks.filter(task => task.id !== action.payload);
      const currentWeek = createWeeklyView(updatedTasks, state.selectedDate);
      
      return {
        ...state,
        tasks: updatedTasks,
        currentWeek
      };
    }
    
    case 'TOGGLE_TASK': {
      const toggledTask = convertPrismaTaskToAppTask(action.payload);
      const updatedTasks = state.tasks.map(task =>
        task.id === toggledTask.id ? toggledTask : task
      );
      
      const currentWeek = createWeeklyView(updatedTasks, state.selectedDate);
      
      return {
        ...state,
        tasks: updatedTasks,
        currentWeek
      };
    }
    
    case 'MOVE_TASK': {
      const movedTask = convertPrismaTaskToAppTask(action.payload);
      const updatedTasks = state.tasks.map(task =>
        task.id === movedTask.id ? movedTask : task
      );
      
      const currentWeek = createWeeklyView(updatedTasks, state.selectedDate);
      
      return {
        ...state,
        tasks: updatedTasks,
        currentWeek
      };
    }
    
    case 'SET_SELECTED_DATE': {
      const currentWeek = createWeeklyView(state.tasks, action.payload);
      return {
        ...state,
        selectedDate: action.payload,
        currentWeek
      };
    }
    
    case 'TOGGLE_COMPLETED_VISIBILITY':
      return {
        ...state,
        showCompletedTasks: !state.showCompletedTasks
      };
    
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload
      };
    
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };

    case 'SET_USER':
      return {
        ...state,
        user: action.payload
      };
    
    case 'NEXT_WEEK': {
      const nextWeek = new Date(state.selectedDate);
      nextWeek.setDate(nextWeek.getDate() + 7);
      const currentWeek = createWeeklyView(state.tasks, nextWeek);
      
      return {
        ...state,
        selectedDate: nextWeek,
        currentWeek
      };
    }
    
    case 'PREVIOUS_WEEK': {
      const previousWeek = new Date(state.selectedDate);
      previousWeek.setDate(previousWeek.getDate() - 7);
      const currentWeek = createWeeklyView(state.tasks, previousWeek);
      
      return {
        ...state,
        selectedDate: previousWeek,
        currentWeek
      };
    }
    
    case 'GO_TO_TODAY': {
      const today = new Date();
      const currentWeek = createWeeklyView(state.tasks, today);
      
      return {
        ...state,
        selectedDate: today,
        currentWeek
      };
    }
    
    default:
      return state;
  }
}

interface TaskContextType {
  state: AppState;
  addTask: (task: TaskFormData) => Promise<void>;
  updateTask: (id: string, updates: Partial<Task>) => Promise<void>;
  deleteTask: (id: string) => Promise<void>;
  toggleTask: (id: string) => Promise<void>;
  moveTask: (id: string, newDate: Date) => Promise<void>;
  setSelectedDate: (date: Date) => void;
  toggleCompletedVisibility: () => void;
  nextWeek: () => void;
  previousWeek: () => void;
  goToToday: () => void;
  refreshTasks: () => Promise<void>;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export function TaskProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  useEffect(() => {
    loadInitialData();
  }, []);

  const loadInitialData = async () => {
    dispatch({ type: 'SET_LOADING', payload: true });
    
    try {
      const userId = state.user?.id;
      
      const [categories, tasks] = await Promise.all([
        CategoryAPI.fetchOrCreateDefaultCategories(userId),
        TaskAPI.fetchTasks(userId)
      ]);
      
      dispatch({ type: 'LOAD_CATEGORIES', payload: categories });
      dispatch({ type: 'LOAD_TASKS', payload: tasks });
    } catch (error) {
      console.error('Failed to load initial data:', error);
      dispatch({ 
        type: 'SET_ERROR', 
        payload: 'Failed to load data. Please refresh the page.' 
      });
    }
  };

  const refreshTasks = async () => {
    try {
      const userId = state.user?.id;
      const tasks = await TaskAPI.fetchTasks(userId);
      dispatch({ type: 'LOAD_TASKS', payload: tasks });
    } catch (error) {
      console.error('Failed to refresh tasks:', error);
      dispatch({ 
        type: 'SET_ERROR', 
        payload: 'Failed to refresh tasks.' 
      });
    }
  };

  const addTask = async (taskData: TaskFormData) => {
    try {
      const userId = state.user?.id;
      const newTask = await TaskAPI.createTask({ ...taskData, userId });
      dispatch({ type: 'ADD_TASK', payload: newTask });
    } catch (error) {
      console.error('Failed to add task:', error);
      dispatch({ 
        type: 'SET_ERROR', 
        payload: 'Failed to add task. Please try again.' 
      });
    }
  };

  const updateTask = async (id: string, updates: Partial<Task>) => {
    try {
      const updatedTask = await TaskAPI.updateTask(id, updates);
      dispatch({ type: 'UPDATE_TASK', payload: updatedTask });
    } catch (error) {
      console.error('Failed to update task:', error);
      dispatch({ 
        type: 'SET_ERROR', 
        payload: 'Failed to update task. Please try again.' 
      });
    }
  };

  const deleteTask = async (id: string) => {
    try {
      await TaskAPI.deleteTask(id);
      dispatch({ type: 'DELETE_TASK', payload: id });
    } catch (error) {
      console.error('Failed to delete task:', error);
      dispatch({ 
        type: 'SET_ERROR', 
        payload: 'Failed to delete task. Please try again.' 
      });
    }
  };

  const toggleTask = async (id: string) => {
    try {
      const toggledTask = await TaskAPI.toggleTask(id);
      dispatch({ type: 'TOGGLE_TASK', payload: toggledTask });
    } catch (error) {
      console.error('Failed to toggle task:', error);
      dispatch({ 
        type: 'SET_ERROR', 
        payload: 'Failed to toggle task. Please try again.' 
      });
    }
  };

  const moveTask = async (id: string, newDate: Date) => {
    try {
      const movedTask = await TaskAPI.moveTask(id, newDate);
      dispatch({ type: 'MOVE_TASK', payload: movedTask });
    } catch (error) {
      console.error('Failed to move task:', error);
      dispatch({ 
        type: 'SET_ERROR', 
        payload: 'Failed to move task. Please try again.' 
      });
    }
  };

  const setSelectedDate = (date: Date) => {
    dispatch({ type: 'SET_SELECTED_DATE', payload: date });
  };

  const toggleCompletedVisibility = () => {
    dispatch({ type: 'TOGGLE_COMPLETED_VISIBILITY' });
  };

  const nextWeek = () => {
    dispatch({ type: 'NEXT_WEEK' });
  };

  const previousWeek = () => {
    dispatch({ type: 'PREVIOUS_WEEK' });
  };

  const goToToday = () => {
    dispatch({ type: 'GO_TO_TODAY' });
  };

  return (
    <TaskContext.Provider value={{
      state,
      addTask,
      updateTask,
      deleteTask,
      toggleTask,
      moveTask,
      setSelectedDate,
      toggleCompletedVisibility,
      nextWeek,
      previousWeek,
      goToToday,
      refreshTasks
    }}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTaskContext() {
  const context = useContext(TaskContext);
  if (context === undefined) {
    throw new Error('useTaskContext must be used within a TaskProvider');
  }
  return context;
}