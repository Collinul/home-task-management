import { Task } from '../types';
import { v4 as uuidv4 } from 'uuid';
import { addDays, startOfDay } from 'date-fns';

export const sampleTasks: Task[] = [
  // Monday Tasks
  {
    id: uuidv4(),
    title: 'Vacuum living room',
    description: 'Don\'t forget to move the furniture for a thorough clean!',
    category: 'cleaning',
    estimatedMinutes: 15,
    isCompleted: false,
    dueDate: startOfDay(new Date()),
    createdAt: new Date(),
    updatedAt: new Date(),
    isRecurring: true,
    recurrence: {
      type: 'weekly',
      days: ['monday']
    }
  },
  {
    id: uuidv4(),
    title: 'Wash clothes',
    description: 'Sort by colors first',
    category: 'laundry',
    estimatedMinutes: 5,
    isCompleted: true,
    completedAt: new Date(),
    dueDate: startOfDay(new Date()),
    createdAt: new Date(),
    updatedAt: new Date(),
    isRecurring: false
  },
  
  // Tuesday Tasks
  {
    id: uuidv4(),
    title: 'Grocery shopping',
    description: 'Need milk, bread, eggs, and fresh vegetables',
    category: 'shopping',
    estimatedMinutes: 60,
    isCompleted: false,
    dueDate: startOfDay(addDays(new Date(), 1)),
    createdAt: new Date(),
    updatedAt: new Date(),
    isRecurring: true,
    recurrence: {
      type: 'weekly',
      days: ['tuesday']
    }
  },
  {
    id: uuidv4(),
    title: 'Meal prep for the week',
    description: 'Prepare lunch containers and snacks',
    category: 'cooking',
    estimatedMinutes: 90,
    isCompleted: false,
    dueDate: startOfDay(addDays(new Date(), 1)),
    createdAt: new Date(),
    updatedAt: new Date(),
    isRecurring: false
  },

  // Wednesday Tasks
  {
    id: uuidv4(),
    title: 'Clean bathroom',
    description: 'Deep clean - toilet, shower, and mirror',
    category: 'cleaning',
    estimatedMinutes: 25,
    isCompleted: false,
    dueDate: startOfDay(addDays(new Date(), 2)),
    createdAt: new Date(),
    updatedAt: new Date(),
    isRecurring: true,
    recurrence: {
      type: 'weekly',
      days: ['wednesday']
    }
  },
  {
    id: uuidv4(),
    title: 'Water plants',
    description: 'Check soil moisture first',
    category: 'maintenance',
    estimatedMinutes: 10,
    isCompleted: false,
    dueDate: startOfDay(addDays(new Date(), 2)),
    createdAt: new Date(),
    updatedAt: new Date(),
    isRecurring: true,
    recurrence: {
      type: 'weekly',
      days: ['wednesday', 'saturday']
    }
  },

  // Thursday Tasks
  {
    id: uuidv4(),
    title: 'Organize closet',
    description: 'Sort seasonal clothes and donate unused items',
    category: 'organization',
    estimatedMinutes: 45,
    isCompleted: false,
    dueDate: startOfDay(addDays(new Date(), 3)),
    createdAt: new Date(),
    updatedAt: new Date(),
    isRecurring: false
  },

  // Friday Tasks
  {
    id: uuidv4(),
    title: 'Clean kitchen counters',
    description: 'Wipe down all surfaces and appliances',
    category: 'cleaning',
    estimatedMinutes: 8,
    isCompleted: false,
    dueDate: startOfDay(addDays(new Date(), 4)),
    createdAt: new Date(),
    updatedAt: new Date(),
    isRecurring: true,
    recurrence: {
      type: 'weekly',
      days: ['friday']
    }
  },
  {
    id: uuidv4(),
    title: 'Take out trash',
    description: 'Don\'t forget recycling too!',
    category: 'maintenance',
    estimatedMinutes: 5,
    isCompleted: false,
    dueDate: startOfDay(addDays(new Date(), 4)),
    createdAt: new Date(),
    updatedAt: new Date(),
    isRecurring: true,
    recurrence: {
      type: 'weekly',
      days: ['friday']
    }
  },

  // Saturday Tasks
  {
    id: uuidv4(),
    title: 'Fold laundry',
    description: 'From Tuesday\'s wash',
    category: 'laundry',
    estimatedMinutes: 20,
    isCompleted: false,
    dueDate: startOfDay(addDays(new Date(), 5)),
    createdAt: new Date(),
    updatedAt: new Date(),
    isRecurring: false
  },
  {
    id: uuidv4(),
    title: 'Plan next week meals',
    description: 'Create shopping list too',
    category: 'cooking',
    estimatedMinutes: 30,
    isCompleted: false,
    dueDate: startOfDay(addDays(new Date(), 5)),
    createdAt: new Date(),
    updatedAt: new Date(),
    isRecurring: true,
    recurrence: {
      type: 'weekly',
      days: ['saturday']
    }
  },

  // Sunday Tasks
  {
    id: uuidv4(),
    title: 'Self-care time',
    description: 'Face mask, relaxing bath, or meditation',
    category: 'personal',
    estimatedMinutes: 60,
    isCompleted: false,
    dueDate: startOfDay(addDays(new Date(), 6)),
    createdAt: new Date(),
    updatedAt: new Date(),
    isRecurring: true,
    recurrence: {
      type: 'weekly',
      days: ['sunday']
    }
  },
  {
    id: uuidv4(),
    title: 'Review and plan week ahead',
    description: 'Check calendar and prepare for the coming week',
    category: 'organization',
    estimatedMinutes: 20,
    isCompleted: false,
    dueDate: startOfDay(addDays(new Date(), 6)),
    createdAt: new Date(),
    updatedAt: new Date(),
    isRecurring: true,
    recurrence: {
      type: 'weekly',
      days: ['sunday']
    }
  }
];

export function loadSampleData(): boolean {
  const hasExistingTasks = localStorage.getItem('checklist-tasks');
  if (!hasExistingTasks) {
    const serializedTasks = sampleTasks.map(task => ({
      ...task,
      dueDate: task.dueDate.toISOString(),
      createdAt: task.createdAt.toISOString(),
      updatedAt: task.updatedAt.toISOString(),
      completedAt: task.completedAt?.toISOString()
    }));
    localStorage.setItem('checklist-tasks', JSON.stringify(serializedTasks));
    return true;
  }
  return false;
}