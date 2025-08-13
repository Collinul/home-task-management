import React from 'react';
import { motion } from 'framer-motion';
import { useTaskContext } from '../../contexts/TaskContext';
import { calculateCleanlinessScore, getCleanlinessLabel, getMotivationalMessage } from '../../utils/analytics';
import { StatsCard } from './StatsCard';
import { CleanlinessChart } from './CleanlinessChart';
import { CategoryBreakdown } from './CategoryBreakdown';
import { format } from 'date-fns';

export const Dashboard: React.FC = () => {
  const { state } = useTaskContext();
  const metrics = calculateCleanlinessScore(state.tasks);
  const cleanlinessInfo = getCleanlinessLabel(metrics.overallScore);
  const motivationalMessage = getMotivationalMessage(metrics.overallScore, metrics.streak);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50 pb-20">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="px-4 py-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Dashboard 📊
          </h1>
          <p className="text-gray-600">
            Your cleanliness journey • {format(new Date(), 'EEEE, MMM dd')}
          </p>
        </div>
      </div>

      <div className="px-4 py-6 space-y-6">
        {/* Cleanliness Score Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
        >
          <div className="text-center">
            <div className="text-6xl mb-4">{cleanlinessInfo.emoji}</div>
            <div className="flex items-center justify-center mb-2">
              <div className="text-4xl font-bold text-orange-600 mr-2">
                {metrics.overallScore}
              </div>
              <div className="text-2xl text-gray-500">/ 100</div>
            </div>
            <div className={`text-lg font-semibold mb-2 ${cleanlinessInfo.color}`}>
              {cleanlinessInfo.label}
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              {motivationalMessage}
            </p>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-6">
            <div className="bg-gray-200 rounded-full h-3 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${metrics.overallScore}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-orange-400 to-pink-400 rounded-full"
              />
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          <StatsCard
            title="Current Streak"
            value={`${metrics.streak} days`}
            icon="🔥"
            color="text-red-500"
            delay={0.1}
          />
          <StatsCard
            title="This Week"
            value={`${metrics.weeklyScore}%`}
            icon="📅"
            color="text-blue-500"
            delay={0.2}
          />
          <StatsCard
            title="Today's Tasks"
            value={`${metrics.completedToday}`}
            icon="✅"
            color="text-green-500"
            delay={0.3}
          />
          <StatsCard
            title="Weekly Tasks"
            value={`${metrics.completedThisWeek}`}
            icon="📋"
            color="text-purple-500"
            delay={0.4}
          />
        </div>

        {/* Daily Progress Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <CleanlinessChart data={metrics.dailyProgress} />
        </motion.div>

        {/* Category Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <CategoryBreakdown breakdown={metrics.categoryBreakdown} />
        </motion.div>

        {/* Insights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <span className="mr-2">💡</span>
            Quick Insights
          </h3>
          
          <div className="space-y-3">
            {metrics.streak >= 7 && (
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <p className="text-green-800 text-sm">
                  🎉 Amazing! You've maintained a {metrics.streak}-day streak! You're building incredible habits!
                </p>
              </div>
            )}
            
            {metrics.overallScore >= 90 && (
              <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-blue-800 text-sm">
                  ✨ Your cleanliness score is outstanding! You're truly mastering household management!
                </p>
              </div>
            )}
            
            {metrics.completedToday === 0 && (
              <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
                <p className="text-orange-800 text-sm">
                  🌅 Ready to tackle today's tasks? Even small wins add up to big victories!
                </p>
              </div>
            )}
            
            {metrics.categoryBreakdown.cleaning.total > 0 && 
             metrics.categoryBreakdown.cleaning.completed / metrics.categoryBreakdown.cleaning.total >= 0.8 && (
              <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                <p className="text-purple-800 text-sm">
                  🧹 You're excelling at cleaning tasks! Your space must feel so fresh and organized!
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};