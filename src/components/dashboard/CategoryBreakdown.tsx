import React from 'react';
import { motion } from 'framer-motion';
import { TaskCategory } from '../../types';

interface CategoryBreakdownProps {
  breakdown: Record<TaskCategory, { completed: number; total: number }>;
}

const categoryInfo: Record<TaskCategory, { label: string; emoji: string; color: string }> = {
  cleaning: { label: 'Cleaning', emoji: '🧹', color: 'bg-blue-500' },
  cooking: { label: 'Cooking', emoji: '👩‍🍳', color: 'bg-orange-500' },
  shopping: { label: 'Shopping', emoji: '🛒', color: 'bg-green-500' },
  laundry: { label: 'Laundry', emoji: '👔', color: 'bg-purple-500' },
  maintenance: { label: 'Maintenance', emoji: '🔧', color: 'bg-gray-500' },
  organization: { label: 'Organization', emoji: '📋', color: 'bg-pink-500' },
  outdoor: { label: 'Outdoor', emoji: '🌱', color: 'bg-emerald-500' },
  personal: { label: 'Personal', emoji: '💫', color: 'bg-indigo-500' },
  other: { label: 'Other', emoji: '📝', color: 'bg-yellow-500' }
};

export const CategoryBreakdown: React.FC<CategoryBreakdownProps> = ({ breakdown }) => {
  const categoriesWithTasks = Object.entries(breakdown)
    .filter(([_, data]) => data.total > 0)
    .sort(([_, a], [__, b]) => b.total - a.total);

  if (categoriesWithTasks.length === 0) {
    return (
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <span className="mr-2">📊</span>
          Category Breakdown
        </h3>
        <div className="text-center text-gray-500 py-8">
          <div className="text-4xl mb-2">📋</div>
          <p>No tasks completed yet!</p>
          <p className="text-sm mt-1">Start adding tasks to see your progress here.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
        <span className="mr-2">📊</span>
        Category Breakdown
      </h3>
      
      <div className="space-y-4">
        {categoriesWithTasks.map(([category, data], index) => {
          const info = categoryInfo[category as TaskCategory];
          const completionRate = data.total > 0 ? (data.completed / data.total) * 100 : 0;
          
          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center space-x-3"
            >
              <div className="flex items-center space-x-2 flex-1">
                <span className="text-xl">{info.emoji}</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">
                      {info.label}
                    </span>
                    <span className="text-sm text-gray-500">
                      {data.completed}/{data.total}
                    </span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${completionRate}%` }}
                      transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
                      className={`h-full ${info.color} rounded-full`}
                    />
                  </div>
                </div>
                <div className="text-right">
                  <div className={`text-sm font-semibold ${
                    completionRate >= 80 ? 'text-green-600' :
                    completionRate >= 60 ? 'text-yellow-600' :
                    completionRate >= 40 ? 'text-orange-600' : 'text-red-600'
                  }`}>
                    {Math.round(completionRate)}%
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
      
      {/* Summary */}
      <div className="mt-6 pt-4 border-t border-gray-100">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Total Progress</span>
          <span className="font-semibold text-gray-900">
            {categoriesWithTasks.reduce((sum, [_, data]) => sum + data.completed, 0)} / {' '}
            {categoriesWithTasks.reduce((sum, [_, data]) => sum + data.total, 0)} tasks
          </span>
        </div>
      </div>
    </div>
  );
};