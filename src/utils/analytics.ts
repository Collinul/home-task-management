import { Task, TaskCategory } from '../types';
import { isToday, isThisWeek, subDays, startOfDay } from 'date-fns';

export interface CleanlinessMetrics {
  overallScore: number;
  weeklyScore: number;
  streak: number;
  completedToday: number;
  completedThisWeek: number;
  totalTasks: number;
  categoryBreakdown: Record<TaskCategory, { completed: number; total: number }>;
  dailyProgress: ChartData[];
}

export interface ChartData {
  name: string;
  completed: number;
  total: number;
  score: number;
}

export function calculateCleanlinessScore(tasks: Task[]): CleanlinessMetrics {
  const now = new Date();
  const sevenDaysAgo = subDays(now, 7);
  
  // Get tasks from the last 7 days
  const recentTasks = tasks.filter(task => 
    task.dueDate >= sevenDaysAgo && task.dueDate <= now
  );

  // Today's tasks
  const todaysTasks = tasks.filter(task => isToday(task.dueDate));
  const completedToday = todaysTasks.filter(task => task.isCompleted).length;

  // This week's tasks
  const weekTasks = tasks.filter(task => isThisWeek(task.dueDate));
  const completedThisWeek = weekTasks.filter(task => task.isCompleted).length;

  // Calculate category breakdown
  const categoryBreakdown: Record<TaskCategory, { completed: number; total: number }> = {
    cleaning: { completed: 0, total: 0 },
    cooking: { completed: 0, total: 0 },
    shopping: { completed: 0, total: 0 },
    laundry: { completed: 0, total: 0 },
    maintenance: { completed: 0, total: 0 },
    organization: { completed: 0, total: 0 },
    outdoor: { completed: 0, total: 0 },
    personal: { completed: 0, total: 0 },
    other: { completed: 0, total: 0 }
  };

  recentTasks.forEach(task => {
    categoryBreakdown[task.category].total++;
    if (task.isCompleted) {
      categoryBreakdown[task.category].completed++;
    }
  });

  // Calculate daily progress for the last 7 days
  const dailyProgress: ChartData[] = [];
  for (let i = 6; i >= 0; i--) {
    const date = subDays(now, i);
    const dayTasks = tasks.filter(task => 
      startOfDay(task.dueDate).getTime() === startOfDay(date).getTime()
    );
    const dayCompleted = dayTasks.filter(task => task.isCompleted).length;
    const dayScore = dayTasks.length > 0 ? (dayCompleted / dayTasks.length) * 100 : 100;

    dailyProgress.push({
      name: date.toLocaleDateString('en-US', { weekday: 'short' }),
      completed: dayCompleted,
      total: dayTasks.length,
      score: Math.round(dayScore)
    });
  }

  // Calculate current streak
  let streak = 0;
  let checkDate = now;
  
  for (let i = 0; i < 30; i++) { // Max 30 days to prevent infinite loop
    const dayTasks = tasks.filter(task => 
      startOfDay(task.dueDate).getTime() === startOfDay(checkDate).getTime()
    );
    
    if (dayTasks.length === 0) {
      checkDate = subDays(checkDate, 1);
      continue;
    }
    
    const dayCompletionRate = dayTasks.filter(t => t.isCompleted).length / dayTasks.length;
    if (dayCompletionRate >= 0.8) { // 80% completion rate counts as a good day
      streak++;
      checkDate = subDays(checkDate, 1);
    } else {
      break;
    }
  }

  // Calculate scores
  const weeklyCompletionRate = weekTasks.length > 0 ? (completedThisWeek / weekTasks.length) : 1;
  const recentCompletionRate = recentTasks.length > 0 ? 
    (recentTasks.filter(t => t.isCompleted).length / recentTasks.length) : 1;

  // Weight cleaning tasks more heavily for cleanliness score
  const cleaningTasks = recentTasks.filter(task => 
    ['cleaning', 'laundry', 'maintenance'].includes(task.category)
  );
  const cleaningCompletionRate = cleaningTasks.length > 0 ? 
    (cleaningTasks.filter(t => t.isCompleted).length / cleaningTasks.length) : 1;

  const overallScore = Math.round(
    (recentCompletionRate * 0.4 + cleaningCompletionRate * 0.6) * 100
  );
  
  const weeklyScore = Math.round(weeklyCompletionRate * 100);

  return {
    overallScore,
    weeklyScore,
    streak,
    completedToday,
    completedThisWeek,
    totalTasks: tasks.length,
    categoryBreakdown,
    dailyProgress
  };
}

export function getCleanlinessLabel(score: number): { label: string; emoji: string; color: string } {
  if (score >= 90) return { label: 'Sparkling Clean!', emoji: '✨', color: 'text-green-600' };
  if (score >= 80) return { label: 'Very Clean', emoji: '🌟', color: 'text-green-500' };
  if (score >= 70) return { label: 'Pretty Clean', emoji: '😊', color: 'text-blue-500' };
  if (score >= 60) return { label: 'Getting There', emoji: '🔄', color: 'text-yellow-500' };
  if (score >= 40) return { label: 'Needs Work', emoji: '💪', color: 'text-orange-500' };
  return { label: 'Time to Clean!', emoji: '🧹', color: 'text-red-500' };
}

export function getMotivationalMessage(score: number, streak: number): string {
  if (score >= 90 && streak >= 7) {
    return "You're absolutely crushing it! Your home is a sanctuary! 🏠✨";
  }
  if (score >= 80) {
    return "Fantastic work! You're maintaining such a clean and organized space! 🌟";
  }
  if (score >= 70) {
    return "Great job keeping up with your tasks! Your effort is paying off! 💪";
  }
  if (score >= 60) {
    return "You're on the right track! Keep building those healthy habits! 🚀";
  }
  if (streak >= 3) {
    return `Amazing ${streak}-day streak! You're building something great! 🔥`;
  }
  return "Every small step counts! You've got this! 💕";
}