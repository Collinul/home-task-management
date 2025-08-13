import { prisma } from '../../db';
import { Category, Prisma } from '@prisma/client';

export class CategoryService {
  static async getAllCategories(
    userId?: string,
    householdId?: string
  ): Promise<Category[]> {
    const where: Prisma.CategoryWhereInput = {};
    
    if (userId) {
      where.userId = userId;
    }
    
    if (householdId) {
      where.householdId = householdId;
    }

    return await prisma.category.findMany({
      where,
      orderBy: { name: 'asc' }
    });
  }

  static async getCategoryById(id: string): Promise<Category | null> {
    return await prisma.category.findUnique({
      where: { id }
    });
  }

  static async createCategory(data: {
    name: string;
    emoji?: string;
    color?: string;
    userId?: string;
    householdId?: string;
  }): Promise<Category> {
    return await prisma.category.create({
      data
    });
  }

  static async updateCategory(
    id: string,
    data: Partial<{
      name: string;
      emoji: string;
      color: string;
    }>
  ): Promise<Category> {
    return await prisma.category.update({
      where: { id },
      data
    });
  }

  static async deleteCategory(id: string): Promise<void> {
    const tasksWithCategory = await prisma.task.count({
      where: { categoryId: id }
    });

    if (tasksWithCategory > 0) {
      throw new Error('Cannot delete category with existing tasks. Please reassign or delete the tasks first.');
    }

    await prisma.category.delete({
      where: { id }
    });
  }

  static async getOrCreateDefaultCategories(
    userId?: string,
    householdId?: string
  ): Promise<Category[]> {
    const existingCategories = await this.getAllCategories(userId, householdId);
    
    if (existingCategories.length > 0) {
      return existingCategories;
    }

    const defaultCategories = [
      { name: 'Cleaning', emoji: '🧹', color: '#60A5FA' },
      { name: 'Kitchen', emoji: '🍳', color: '#34D399' },
      { name: 'Laundry', emoji: '👔', color: '#A78BFA' },
      { name: 'Maintenance', emoji: '🔧', color: '#FBBF24' },
      { name: 'Organizing', emoji: '📦', color: '#F87171' },
      { name: 'Outdoor', emoji: '🌿', color: '#10B981' },
      { name: 'Shopping', emoji: '🛒', color: '#F59E0B' },
      { name: 'Other', emoji: '📝', color: '#6B7280' }
    ];

    const createdCategories = await Promise.all(
      defaultCategories.map(category =>
        this.createCategory({
          ...category,
          userId,
          householdId
        })
      )
    );

    return createdCategories;
  }

  static async getCategoryWithTaskCount(
    id: string
  ): Promise<Category & { taskCount: number }> {
    const category = await prisma.category.findUnique({
      where: { id },
      include: {
        _count: {
          select: { tasks: true }
        }
      }
    });

    if (!category) {
      throw new Error('Category not found');
    }

    return {
      ...category,
      taskCount: category._count.tasks
    };
  }
}