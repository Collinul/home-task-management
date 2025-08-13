import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Task, TaskFormData, DayOfWeek, AppState, WeeklyView } from '../types';
import { LocalStorageManager } from '../utils/localStorage';
import { getDayOfWeekFromDate, getWeekDays, getWeekRange } from '../utils/dateUtils';
import { loadSampleData } from '../data/sampleData';

type TaskAction = 
  | { type: 'LOAD_TASKS'; payload: Task[] }
  | { type: 'ADD_TASK'; payload: TaskFormData }
  | { type: 'UPDATE_TASK'; payload: { id: string; updates: Partial<Task> } }
  | { type: 'DELETE_TASK'; payload: string }
  | { type: 'TOGGLE_TASK'; payload: string }
  | { type: 'MOVE_TASK'; payload: { id: string; newDate: Date } }
  | { type: 'SET_SELECTED_DATE'; payload: Date }
  | { type: 'TOGGLE_COMPLETED_VISIBILITY' }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'NEXT_WEEK' }
  | { type: 'PREVIOUS_WEEK' }
  | { type: 'GO_TO_TODAY' };

const initialState: AppState = {
  user: null,
  tasks: [],
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

  // Sort tasks within each day
  Object.keys(weeklyTasks).forEach(day => {
    weeklyTasks[day as DayOfWeek].sort((a, b) => {
      if (a.isCompleted !== b.isCompleted) {
        return a.isCompleted ? 1 : -1;
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
      const currentWeek = createWeeklyView(action.payload, state.selectedDate);
      return {
        ...state,
        tasks: action.payload,
        currentWeek,
        isLoading: false
      };
    }
    
    case 'ADD_TASK': {
      const newTask: Task = {
        id: uuidv4(),
        ...action.payload,
        isCompleted: false,
        createdAt: new Date(),
        updatedAt: new Date()
      };
      
      const updatedTasks = [...state.tasks, newTask];
      const currentWeek = createWeeklyView(updatedTasks, state.selectedDate);
      
      LocalStorageManager.saveTasks(updatedTasks);
      
      return {
        ...state,
        tasks: updatedTasks,
        currentWeek
      };
    }
    
    case 'UPDATE_TASK': {
      const updatedTasks = state.tasks.map(task =>
        task.id === action.payload.id
          ? { ...task, ...action.payload.updates, updatedAt: new Date() }
          : task
      );
      
      const currentWeek = createWeeklyView(updatedTasks, state.selectedDate);
      LocalStorageManager.saveTasks(updatedTasks);
      
      return {
        ...state,
        tasks: updatedTasks,
        currentWeek
      };
    }
    
    case 'DELETE_TASK': {
      const updatedTasks = state.tasks.filter(task => task.id !== action.payload);
      const currentWeek = createWeeklyView(updatedTasks, state.selectedDate);
      
      LocalStorageManager.saveTasks(updatedTasks);
      
      return {
        ...state,
        tasks: updatedTasks,
        currentWeek
      };
    }
    
    case 'TOGGLE_TASK': {
      const updatedTasks = state.tasks.map(task => {
        if (task.id === action.payload) {
          return {
            ...task,
            isCompleted: !task.isCompleted,
            completedAt: !task.isCompleted ? new Date() : undefined,
            updatedAt: new Date()
          };
        }
        return task;
      });
      
      const currentWeek = createWeeklyView(updatedTasks, state.selectedDate);
      LocalStorageManager.saveTasks(updatedTasks);
      
      return {
        ...state,
        tasks: updatedTasks,
        currentWeek
      };
    }
    
    case 'MOVE_TASK': {
      const updatedTasks = state.tasks.map(task =>
        task.id === action.payload.id
          ? { ...task, dueDate: action.payload.newDate, updatedAt: new Date() }
          : task
      );
      
      const currentWeek = createWeeklyView(updatedTasks, state.selectedDate);
      LocalStorageManager.saveTasks(updatedTasks);
      
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
  addTask: (task: TaskFormData) => void;
  updateTask: (id: string, updates: Partial<Task>) => void;
  deleteTask: (id: string) => void;
  toggleTask: (id: string) => void;
  moveTask: (id: string, newDate: Date) => void;
  setSelectedDate: (date: Date) => void;
  toggleCompletedVisibility: () => void;
  nextWeek: () => void;
  previousWeek: () => void;
  goToToday: () => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export function TaskProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  useEffect(() => {
    dispatch({ type: 'SET_LOADING', payload: true });
    
    // Load sample data if no existing tasks
    loadSampleData();
    
    const savedTasks = LocalStorageManager.loadTasks();
    dispatch({ type: 'LOAD_TASKS', payload: savedTasks });
  }, []);

  const addTask = (task: TaskFormData) => {
    dispatch({ type: 'ADD_TASK', payload: task });
  };

  const updateTask = (id: string, updates: Partial<Task>) => {
    dispatch({ type: 'UPDATE_TASK', payload: { id, updates } });
  };

  const deleteTask = (id: string) => {
    dispatch({ type: 'DELETE_TASK', payload: id });
  };

  const toggleTask = (id: string) => {
    dispatch({ type: 'TOGGLE_TASK', payload: id });
  };

  const moveTask = (id: string, newDate: Date) => {
    dispatch({ type: 'MOVE_TASK', payload: { id, newDate } });
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
      goToToday
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