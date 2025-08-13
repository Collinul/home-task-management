import React from 'react';
import { motion } from 'framer-motion';
import { Task, TaskCategory } from '../../types';
import { format } from 'date-fns';

interface TaskCardProps {
  task: Task;
  onToggle: (id: string) => void;
  onEdit?: (task: Task) => void;
  onDelete?: (id: string) => void;
  isDragging?: boolean;
}

const categoryColors: Record<TaskCategory, string> = {
  cleaning: 'bg-blue-100 text-blue-800 border-blue-200',
  cooking: 'bg-orange-100 text-orange-800 border-orange-200',
  shopping: 'bg-green-100 text-green-800 border-green-200',
  laundry: 'bg-purple-100 text-purple-800 border-purple-200',
  maintenance: 'bg-gray-100 text-gray-800 border-gray-200',
  organization: 'bg-pink-100 text-pink-800 border-pink-200',
  outdoor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
  personal: 'bg-indigo-100 text-indigo-800 border-indigo-200',
  other: 'bg-yellow-100 text-yellow-800 border-yellow-200'
};

const categoryEmojis: Record<TaskCategory, string> = {
  cleaning: '🧹',
  cooking: '👩‍🍳',
  shopping: '🛒',
  laundry: '👔',
  maintenance: '🔧',
  organization: '📋',
  outdoor: '🌱',
  personal: '💫',
  other: '📝'
};

export const TaskCard: React.FC<TaskCardProps> = ({
  task,
  onToggle,
  onEdit,
  onDelete,
  isDragging = false
}) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      whileTap={{ scale: 0.98 }}
      className={`
        bg-white rounded-lg shadow-sm border-2 p-4 mb-3 touch-manipulation
        ${task.isCompleted ? 'opacity-70 border-gray-200' : 'border-white hover:border-orange-200'}
        ${isDragging ? 'shadow-lg transform rotate-3' : ''}
        transition-all duration-200
      `}
    >
      <div className="flex items-start space-x-3">
        {/* Checkbox */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => onToggle(task.id)}
          className={`
            flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center
            ${task.isCompleted 
              ? 'bg-green-500 border-green-500 text-white' 
              : 'border-gray-300 hover:border-orange-400'
            }
            transition-colors duration-200
          `}
        >
          {task.isCompleted && (
            <motion.svg
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-3 h-3"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </motion.svg>
          )}
        </motion.button>

        {/* Task Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-2">
            <h3 className={`
              font-medium text-gray-900 leading-tight
              ${task.isCompleted ? 'line-through text-gray-500' : ''}
            `}>
              {task.title}
            </h3>
            
            {/* Category Badge */}
            <span className={`
              inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border
              ${categoryColors[task.category]}
            `}>
              <span className="mr-1">{categoryEmojis[task.category]}</span>
              {task.category}
            </span>
          </div>

          {task.description && (
            <p className={`
              text-sm text-gray-600 mb-2 leading-relaxed
              ${task.isCompleted ? 'text-gray-400' : ''}
            `}>
              {task.description}
            </p>
          )}

          <div className="flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center space-x-3">
              {task.estimatedMinutes && (
                <span className="flex items-center">
                  ⏱️ {task.estimatedMinutes}m
                </span>
              )}
              
              {task.isRecurring && (
                <span className="flex items-center">
                  🔄 Recurring
                </span>
              )}
            </div>

            {task.completedAt && (
              <span className="text-green-600">
                ✅ {format(task.completedAt, 'HH:mm')}
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        {!task.isCompleted && (onEdit || onDelete) && (
          <div className="flex flex-col space-y-1">
            {onEdit && (
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => onEdit(task)}
                className="p-1 text-gray-400 hover:text-orange-500 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
              </motion.button>
            )}
            
            {onDelete && (
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => onDelete(task.id)}
                className="p-1 text-gray-400 hover:text-red-500 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.button>
            )}
          </div>
        )}
      </div>

      {/* Completion Animation */}
      {task.isCompleted && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="absolute -top-1 -right-1"
        >
          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-white text-xs">🎉</span>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};