import { CategoryService } from '../services/categoryService';
import { Category } from '@prisma/client';

export class CategoryAPI {
  static async fetchCategories(
    userId?: string,
    householdId?: string
  ): Promise<Category[]> {
    try {
      return await CategoryService.getAllCategories(userId, householdId);
    } catch (error) {
      console.error('Error fetching categories:', error);
      throw new Error('Failed to fetch categories');
    }
  }

  static async fetchOrCreateDefaultCategories(
    userId?: string,
    householdId?: string
  ): Promise<Category[]> {
    try {
      return await CategoryService.getOrCreateDefaultCategories(
        userId,
        householdId
      );
    } catch (error) {
      console.error('Error fetching/creating default categories:', error);
      throw new Error('Failed to fetch or create default categories');
    }
  }

  static async createCategory(data: {
    name: string;
    emoji?: string;
    color?: string;
    userId?: string;
    householdId?: string;
  }): Promise<Category> {
    try {
      return await CategoryService.createCategory(data);
    } catch (error) {
      console.error('Error creating category:', error);
      throw new Error('Failed to create category');
    }
  }

  static async updateCategory(
    id: string,
    updates: Partial<{
      name: string;
      emoji: string;
      color: string;
    }>
  ): Promise<Category> {
    try {
      return await CategoryService.updateCategory(id, updates);
    } catch (error) {
      console.error('Error updating category:', error);
      throw new Error('Failed to update category');
    }
  }

  static async deleteCategory(id: string): Promise<void> {
    try {
      await CategoryService.deleteCategory(id);
    } catch (error: any) {
      console.error('Error deleting category:', error);
      if (error.message.includes('Cannot delete category with existing tasks')) {
        throw error;
      }
      throw new Error('Failed to delete category');
    }
  }

  static async fetchCategoryWithTaskCount(id: string) {
    try {
      return await CategoryService.getCategoryWithTaskCount(id);
    } catch (error) {
      console.error('Error fetching category with task count:', error);
      throw new Error('Failed to fetch category details');
    }
  }
}