import { LocalStorageManager } from '../utils/localStorage';

// This file is now deprecated as we use Prisma for data management
// Sample data is created through the database seed script

export function loadSampleData() {
  // Check if we already have tasks in localStorage
  const existingTasks = LocalStorageManager.loadTasks();
  if (existingTasks.length === 0) {
    // No existing tasks, but we no longer create sample data here
    // Data should be loaded from the database via Prisma
    console.log('No sample data loaded - use database seeding instead');
  }
}