import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TaskFormData, TaskCategory } from '../../types';
import { getTaskEstimate, getTaskSuggestion } from '../../data/taskEstimates';
import { format } from 'date-fns';

interface TaskFormProps {
  initialData?: Partial<TaskFormData>;
  onSubmit: (data: TaskFormData) => void;
  onCancel: () => void;
}

const categories: { value: TaskCategory; label: string; emoji: string }[] = [
  { value: 'cleaning', label: 'Cleaning', emoji: '🧹' },
  { value: 'cooking', label: 'Cooking', emoji: '👩‍🍳' },
  { value: 'shopping', label: 'Shopping', emoji: '🛒' },
  { value: 'laundry', label: 'Laundry', emoji: '👔' },
  { value: 'maintenance', label: 'Maintenance', emoji: '🔧' },
  { value: 'organization', label: 'Organization', emoji: '📋' },
  { value: 'outdoor', label: 'Outdoor', emoji: '🌱' },
  { value: 'personal', label: 'Personal', emoji: '💫' },
  { value: 'other', label: 'Other', emoji: '📝' },
];

export const TaskForm: React.FC<TaskFormProps> = ({
  initialData,
  onSubmit,
  onCancel
}) => {
  const [formData, setFormData] = useState<TaskFormData>({
    title: '',
    description: '',
    category: 'cleaning',
    estimatedMinutes: 20,
    dueDate: new Date(),
    isRecurring: false,
    ...initialData
  });

  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showEstimateHelp, setShowEstimateHelp] = useState(false);

  useEffect(() => {
    setSuggestions(getTaskSuggestion(formData.category));
  }, [formData.category]);

  useEffect(() => {
    if (formData.title) {
      const estimate = getTaskEstimate(formData.title, formData.category);
      setFormData(prev => ({ ...prev, estimatedMinutes: estimate.minutes }));
    }
  }, [formData.title, formData.category]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleSuggestionClick = (suggestion: string) => {
    const estimate = getTaskEstimate(suggestion, formData.category);
    setFormData(prev => ({
      ...prev,
      title: suggestion,
      estimatedMinutes: estimate.minutes
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="w-full max-w-md bg-white rounded-2xl shadow-xl max-h-[90vh] overflow-y-auto"
      >
        <form onSubmit={handleSubmit} className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {initialData ? 'Edit Task' : 'New Task'}
            </h2>
            <motion.button
              type="button"
              whileTap={{ scale: 0.9 }}
              onClick={onCancel}
              className="p-2 text-gray-400 hover:text-gray-600 rounded-full"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </motion.button>
          </div>

          {/* Task Title */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Task Name
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="What needs to be done?"
              required
            />
          </div>

          {/* Category */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            <div className="grid grid-cols-3 gap-2">
              {categories.map((category) => (
                <motion.button
                  key={category.value}
                  type="button"
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setFormData(prev => ({ ...prev, category: category.value }))}
                  className={`
                    p-3 rounded-lg border-2 text-center transition-colors
                    ${formData.category === category.value
                      ? 'border-orange-500 bg-orange-50 text-orange-700'
                      : 'border-gray-200 hover:border-orange-200'
                    }
                  `}
                >
                  <div className="text-lg">{category.emoji}</div>
                  <div className="text-xs font-medium">{category.label}</div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Task Suggestions */}
          {suggestions.length > 0 && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Quick Suggestions
              </label>
              <div className="flex flex-wrap gap-2">
                {suggestions.slice(0, 3).map((suggestion) => (
                  <motion.button
                    key={suggestion}
                    type="button"
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm hover:bg-orange-200 transition-colors"
                  >
                    {suggestion}
                  </motion.button>
                ))}
              </div>
            </div>
          )}

          {/* Description */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Notes (optional)
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
              rows={3}
              placeholder="Any additional details..."
            />
          </div>

          {/* Due Date */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Due Date
            </label>
            <input
              type="date"
              value={format(formData.dueDate, 'yyyy-MM-dd')}
              onChange={(e) => setFormData(prev => ({ ...prev, dueDate: new Date(e.target.value) }))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              required
            />
          </div>

          {/* Estimated Time */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-medium text-gray-700">
                Estimated Time (minutes)
              </label>
              <motion.button
                type="button"
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowEstimateHelp(!showEstimateHelp)}
                className="text-orange-500 text-sm"
              >
                💡 Tips
              </motion.button>
            </div>
            
            <div className="flex items-center space-x-4">
              <input
                type="range"
                min="5"
                max="120"
                step="5"
                value={formData.estimatedMinutes}
                onChange={(e) => setFormData(prev => ({ ...prev, estimatedMinutes: parseInt(e.target.value) }))}
                className="flex-1"
              />
              <span className="text-lg font-semibold text-orange-600 min-w-[60px]">
                {formData.estimatedMinutes}m
              </span>
            </div>

            {showEstimateHelp && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mt-2 p-3 bg-orange-50 rounded-lg text-sm text-orange-700"
              >
                💡 Tip: Most cleaning tasks take 15-30 minutes, cooking 30-60 minutes, and quick errands about 10-20 minutes.
              </motion.div>
            )}
          </div>

          {/* Recurring Task */}
          <div className="mb-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={formData.isRecurring}
                onChange={(e) => setFormData(prev => ({ ...prev, isRecurring: e.target.checked }))}
                className="mr-3 w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
              />
              <span className="text-sm font-medium text-gray-700">
                🔄 Make this a recurring task
              </span>
            </label>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3">
            <motion.button
              type="button"
              whileTap={{ scale: 0.95 }}
              onClick={onCancel}
              className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              Cancel
            </motion.button>
            <motion.button
              type="submit"
              whileTap={{ scale: 0.95 }}
              className="flex-1 px-4 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium"
            >
              {initialData ? 'Update Task' : 'Add Task'}
            </motion.button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};