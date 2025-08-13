import { TaskService, TaskWithRelations } from '../services/taskService';
import { TaskFormData } from '../types';

export class TaskAPI {
  static async fetchTasks(
    userId?: string,
    householdId?: string
  ): Promise<TaskWithRelations[]> {
    try {
      return await TaskService.getAllTasks(userId, householdId);
    } catch (error) {
      console.error('Error fetching tasks:', error);
      throw new Error('Failed to fetch tasks');
    }
  }

  static async fetchTasksByWeek(
    weekStart: Date,
    weekEnd: Date,
    userId?: string,
    householdId?: string
  ): Promise<TaskWithRelations[]> {
    try {
      return await TaskService.getTasksByDateRange(
        weekStart,
        weekEnd,
        userId,
        householdId
      );
    } catch (error) {
      console.error('Error fetching weekly tasks:', error);
      throw new Error('Failed to fetch weekly tasks');
    }
  }

  static async createTask(
    taskData: TaskFormData & { userId?: string; householdId?: string }
  ): Promise<TaskWithRelations> {
    try {
      const { recurrenceRule, ...data } = taskData;
      
      if (recurrenceRule) {
        return await TaskService.createRecurringTask(data, recurrenceRule);
      }
      
      return await TaskService.createTask(data);
    } catch (error) {
      console.error('Error creating task:', error);
      throw new Error('Failed to create task');
    }
  }

  static async updateTask(
    id: string,
    updates: Partial<TaskFormData>
  ): Promise<TaskWithRelations> {
    try {
      return await TaskService.updateTask(id, updates);
    } catch (error) {
      console.error('Error updating task:', error);
      throw new Error('Failed to update task');
    }
  }

  static async deleteTask(id: string): Promise<void> {
    try {
      await TaskService.deleteTask(id);
    } catch (error) {
      console.error('Error deleting task:', error);
      throw new Error('Failed to delete task');
    }
  }

  static async toggleTask(id: string): Promise<TaskWithRelations> {
    try {
      return await TaskService.toggleTaskCompletion(id);
    } catch (error) {
      console.error('Error toggling task:', error);
      throw new Error('Failed to toggle task');
    }
  }

  static async moveTask(id: string, newDate: Date): Promise<TaskWithRelations> {
    try {
      return await TaskService.moveTask(id, newDate);
    } catch (error) {
      console.error('Error moving task:', error);
      throw new Error('Failed to move task');
    }
  }

  static async fetchOverdueTasks(
    userId?: string,
    householdId?: string
  ): Promise<TaskWithRelations[]> {
    try {
      return await TaskService.getOverdueTasks(userId, householdId);
    } catch (error) {
      console.error('Error fetching overdue tasks:', error);
      throw new Error('Failed to fetch overdue tasks');
    }
  }

  static async fetchTaskStats(
    userId?: string,
    householdId?: string,
    startDate?: Date,
    endDate?: Date
  ) {
    try {
      return await TaskService.getTaskStats(
        userId,
        householdId,
        startDate,
        endDate
      );
    } catch (error) {
      console.error('Error fetching task stats:', error);
      throw new Error('Failed to fetch task statistics');
    }
  }
}