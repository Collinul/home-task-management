import { prisma } from '../../db';
import { User, Prisma } from '@prisma/client';
import bcrypt from 'bcryptjs';

export interface UserWithRelations extends User {
  households?: {
    id: string;
    role: string;
    household: {
      id: string;
      name: string;
      description: string | null;
    };
  }[];
}

export class UserService {
  static async createUser(data: {
    email: string;
    password: string;
    name?: string;
  }): Promise<User> {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    
    return await prisma.user.create({
      data: {
        email: data.email.toLowerCase(),
        password: hashedPassword,
        name: data.name
      }
    });
  }

  static async getUserById(id: string): Promise<UserWithRelations | null> {
    return await prisma.user.findUnique({
      where: { id },
      include: {
        households: {
          include: {
            household: true
          }
        }
      }
    });
  }

  static async getUserByEmail(email: string): Promise<User | null> {
    return await prisma.user.findUnique({
      where: { email: email.toLowerCase() }
    });
  }

  static async validatePassword(
    email: string,
    password: string
  ): Promise<User | null> {
    const user = await this.getUserByEmail(email);
    
    if (!user) {
      return null;
    }

    const isValid = await bcrypt.compare(password, user.password);
    
    if (!isValid) {
      return null;
    }

    return user;
  }

  static async updateUser(
    id: string,
    data: Partial<{
      email: string;
      name: string;
      password: string;
    }>
  ): Promise<User> {
    const updateData: Prisma.UserUpdateInput = {};
    
    if (data.email) {
      updateData.email = data.email.toLowerCase();
    }
    
    if (data.name !== undefined) {
      updateData.name = data.name;
    }
    
    if (data.password) {
      updateData.password = await bcrypt.hash(data.password, 10);
    }

    return await prisma.user.update({
      where: { id },
      data: updateData
    });
  }

  static async deleteUser(id: string): Promise<void> {
    await prisma.user.delete({
      where: { id }
    });
  }

  static async getUserStats(id: string) {
    const user = await prisma.user.findUnique({
      where: { id },
      include: {
        _count: {
          select: {
            tasks: true,
            categories: true,
            households: true
          }
        }
      }
    });

    if (!user) {
      throw new Error('User not found');
    }

    const completedTasks = await prisma.task.count({
      where: {
        userId: id,
        isCompleted: true
      }
    });

    const pendingTasks = await prisma.task.count({
      where: {
        userId: id,
        isCompleted: false
      }
    });

    const overdueTasks = await prisma.task.count({
      where: {
        userId: id,
        isCompleted: false,
        dueDate: {
          lt: new Date()
        }
      }
    });

    return {
      totalTasks: user._count.tasks,
      completedTasks,
      pendingTasks,
      overdueTasks,
      totalCategories: user._count.categories,
      totalHouseholds: user._count.households,
      completionRate: user._count.tasks > 0 
        ? (completedTasks / user._count.tasks) * 100 
        : 0
    };
  }

  static async changePassword(
    userId: string,
    currentPassword: string,
    newPassword: string
  ): Promise<boolean> {
    const user = await prisma.user.findUnique({
      where: { id: userId }
    });

    if (!user) {
      throw new Error('User not found');
    }

    const isValid = await bcrypt.compare(currentPassword, user.password);

    if (!isValid) {
      throw new Error('Current password is incorrect');
    }

    await this.updateUser(userId, { password: newPassword });
    return true;
  }
}