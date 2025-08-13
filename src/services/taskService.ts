import { prisma } from '../../db';
import { Task, User, Category, Prisma } from '@prisma/client';

export interface TaskWithRelations extends Task {
  category: Category;
  user?: User | null;
}

export class TaskService {
  static async getAllTasks(userId?: string, householdId?: string): Promise<TaskWithRelations[]> {
    const where: Prisma.TaskWhereInput = {};
    
    if (userId) {
      where.userId = userId;
    }
    
    if (householdId) {
      where.householdId = householdId;
    }

    return await prisma.task.findMany({
      where,
      include: {
        category: true,
        user: true,
        subTasks: true,
        recurrenceRule: true
      },
      orderBy: [
        { dueDate: 'asc' },
        { createdAt: 'desc' }
      ]
    });
  }

  static async getTaskById(id: string): Promise<TaskWithRelations | null> {
    return await prisma.task.findUnique({
      where: { id },
      include: {
        category: true,
        user: true,
        subTasks: true,
        recurrenceRule: true
      }
    });
  }

  static async getTasksByDateRange(
    startDate: Date,
    endDate: Date,
    userId?: string,
    householdId?: string
  ): Promise<TaskWithRelations[]> {
    const where: Prisma.TaskWhereInput = {
      dueDate: {
        gte: startDate,
        lte: endDate
      }
    };

    if (userId) {
      where.userId = userId;
    }

    if (householdId) {
      where.householdId = householdId;
    }

    return await prisma.task.findMany({
      where,
      include: {
        category: true,
        user: true,
        subTasks: true
      },
      orderBy: [
        { dueDate: 'asc' },
        { isCompleted: 'asc' },
        { priority: 'desc' }
      ]
    });
  }

  static async createTask(data: {
    title: string;
    description?: string;
    dueDate: Date;
    categoryId: string;
    userId?: string;
    householdId?: string;
    estimatedMinutes?: number;
    priority?: string;
    parentTaskId?: string;
  }): Promise<TaskWithRelations> {
    return await prisma.task.create({
      data: {
        ...data,
        isCompleted: false
      },
      include: {
        category: true,
        user: true,
        subTasks: true
      }
    });
  }

  static async updateTask(
    id: string,
    data: Partial<{
      title: string;
      description: string;
      isCompleted: boolean;
      completedAt: Date | null;
      dueDate: Date;
      estimatedMinutes: number;
      actualMinutes: number;
      priority: string;
      categoryId: string;
      assignedToId: string;
    }>
  ): Promise<TaskWithRelations> {
    if (data.isCompleted !== undefined) {
      data.completedAt = data.isCompleted ? new Date() : null;
      
      if (data.isCompleted && data.actualMinutes === undefined) {
        const task = await prisma.task.findUnique({ 
          where: { id },
          select: { estimatedMinutes: true }
        });
        if (task?.estimatedMinutes) {
          data.actualMinutes = task.estimatedMinutes;
        }
      }
    }

    const updatedTask = await prisma.task.update({
      where: { id },
      data,
      include: {
        category: true,
        user: true,
        subTasks: true
      }
    });

    if (data.isCompleted) {
      await prisma.taskHistory.create({
        data: {
          taskId: id,
          action: 'completed',
          completedBy: updatedTask.userId || undefined,
          completionTime: new Date()
        }
      });
    }

    return updatedTask;
  }

  static async deleteTask(id: string): Promise<void> {
    await prisma.task.delete({
      where: { id }
    });
  }

  static async toggleTaskCompletion(id: string): Promise<TaskWithRelations> {
    const task = await prisma.task.findUnique({
      where: { id },
      select: { isCompleted: true, estimatedMinutes: true }
    });

    if (!task) {
      throw new Error('Task not found');
    }

    return await this.updateTask(id, {
      isCompleted: !task.isCompleted,
      actualMinutes: !task.isCompleted ? task.estimatedMinutes || undefined : undefined
    });
  }

  static async moveTask(id: string, newDate: Date): Promise<TaskWithRelations> {
    return await this.updateTask(id, { dueDate: newDate });
  }

  static async createRecurringTask(
    taskData: Parameters<typeof TaskService.createTask>[0],
    recurrenceRule: {
      frequency: string;
      interval?: number;
      daysOfWeek?: string[];
      dayOfMonth?: number;
      endDate?: Date;
      occurrences?: number;
    }
  ): Promise<TaskWithRelations> {
    const task = await this.createTask(taskData);

    await prisma.recurrenceRule.create({
      data: {
        taskId: task.id,
        ...recurrenceRule,
        interval: recurrenceRule.interval || 1
      }
    });

    return await this.getTaskById(task.id) as TaskWithRelations;
  }

  static async getOverdueTasks(
    userId?: string,
    householdId?: string
  ): Promise<TaskWithRelations[]> {
    const where: Prisma.TaskWhereInput = {
      dueDate: {
        lt: new Date()
      },
      isCompleted: false
    };

    if (userId) {
      where.userId = userId;
    }

    if (householdId) {
      where.householdId = householdId;
    }

    return await prisma.task.findMany({
      where,
      include: {
        category: true,
        user: true
      },
      orderBy: { dueDate: 'asc' }
    });
  }

  static async getTaskStats(
    userId?: string,
    householdId?: string,
    startDate?: Date,
    endDate?: Date
  ) {
    const where: Prisma.TaskWhereInput = {};
    
    if (userId) {
      where.userId = userId;
    }
    
    if (householdId) {
      where.householdId = householdId;
    }

    if (startDate && endDate) {
      where.dueDate = {
        gte: startDate,
        lte: endDate
      };
    }

    const [total, completed, overdue] = await Promise.all([
      prisma.task.count({ where }),
      prisma.task.count({ 
        where: { ...where, isCompleted: true } 
      }),
      prisma.task.count({
        where: {
          ...where,
          dueDate: { lt: new Date() },
          isCompleted: false
        }
      })
    ]);

    const categoryStats = await prisma.task.groupBy({
      by: ['categoryId'],
      where,
      _count: {
        id: true
      }
    });

    const categories = await prisma.category.findMany({
      where: {
        id: {
          in: categoryStats.map(stat => stat.categoryId)
        }
      }
    });

    const categoryBreakdown = categoryStats.map(stat => {
      const category = categories.find(c => c.id === stat.categoryId);
      return {
        categoryId: stat.categoryId,
        categoryName: category?.name || 'Unknown',
        emoji: category?.emoji,
        color: category?.color,
        count: stat._count.id
      };
    });

    return {
      total,
      completed,
      pending: total - completed,
      overdue,
      completionRate: total > 0 ? (completed / total) * 100 : 0,
      categoryBreakdown
    };
  }
}