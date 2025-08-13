import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DndContext, DragEndEvent, DragOverlay, DragStartEvent } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { useTaskContext } from '../../contexts/TaskContext';
import { TaskCard } from '../ui/TaskCard';
import { DayColumn } from './DayColumn';
import { TaskForm } from './TaskForm';
import { Task, DayOfWeek, TaskFormData } from '../../types';
import { formatDayName, formatShortDayName, getWeekDays } from '../../utils/dateUtils';
import { format } from 'date-fns';

export const WeeklyView: React.FC = () => {
  const { state, addTask, toggleTask, moveTask, deleteTask, nextWeek, previousWeek, goToToday } = useTaskContext();
  const [activeTask, setActiveTask] = useState<Task | null>(null);
  const [isCompact, setIsCompact] = useState(false);
  const [isCalendarCollapsed, setIsCalendarCollapsed] = useState(false);
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  const weekDays = getWeekDays(state.selectedDate);

  const handleDragStart = (event: DragStartEvent) => {
    const task = state.tasks.find(t => t.id === event.active.id);
    setActiveTask(task || null);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveTask(null);

    if (!over) return;

    const taskId = active.id as string;
    const overId = over.id as string;

    // Check if dropped on a day column
    if (overId.startsWith('day-')) {
      const dayIndex = parseInt(overId.replace('day-', ''));
      const newDate = weekDays[dayIndex];
      moveTask(taskId, newDate);
    }
  };

  const handleAddTask = (taskData: TaskFormData) => {
    addTask(taskData);
    setShowTaskForm(false);
  };

  const handleEditTask = (task: Task) => {
    setEditingTask(task);
    setShowTaskForm(true);
  };

  const handleCloseForm = () => {
    setShowTaskForm(false);
    setEditingTask(null);
  };

  return (
    <div className="h-full flex flex-col bg-gradient-to-br from-orange-50 to-pink-50">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white shadow-sm border-b">
        <div className="px-4 py-3">
          {/* Week Navigation */}
          <div className="flex items-center justify-between mb-3">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={previousWeek}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={goToToday}
              className="px-4 py-2 bg-orange-500 text-white rounded-full font-medium hover:bg-orange-600 transition-colors"
            >
              {format(state.currentWeek.startDate, 'MMM dd')} - {format(state.currentWeek.endDate, 'MMM dd')}
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={nextWeek}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </motion.button>
          </div>

          {/* View Toggle */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <h1 className="text-lg font-semibold text-gray-900">This Week</h1>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsCalendarCollapsed(!isCalendarCollapsed)}
                className="p-1 text-gray-500 hover:text-gray-700 transition-colors"
                title={isCalendarCollapsed ? 'Expand Calendar' : 'Collapse Calendar'}
              >
                <svg 
                  className={`w-5 h-5 transition-transform duration-200 ${isCalendarCollapsed ? 'rotate-180' : ''}`} 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </motion.button>
            </div>
            
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsCompact(!isCompact)}
              className="px-3 py-1 text-sm bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
            >
              {isCompact ? '📋 Detailed' : '📱 Compact'}
            </motion.button>
          </div>
        </div>

        {/* Day Headers */}
        <AnimatePresence>
          {!isCalendarCollapsed && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className={`grid ${isCompact ? 'grid-cols-7' : 'grid-cols-1 gap-1'} px-4 pb-3`}>
                {weekDays.map((day, index) => (
                  <div
                    key={day.toISOString()}
                    className={`
                      text-center py-2 rounded-lg
                      ${new Date().toDateString() === day.toDateString() 
                        ? 'bg-orange-100 text-orange-800' 
                        : 'text-gray-600'
                      }
                      ${isCompact ? 'text-xs' : 'text-sm font-medium'}
                    `}
                  >
                    <div className={isCompact ? '' : 'flex items-center justify-between'}>
                      <span>{isCompact ? formatShortDayName(day) : formatDayName(day)}</span>
                      {!isCompact && (
                        <span className="text-xs text-gray-400">{format(day, 'MMM dd')}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Tasks Grid */}
      <AnimatePresence>
        {!isCalendarCollapsed && (
          <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`
                flex-1 overflow-auto px-4 py-4
                ${isCompact ? 'grid grid-cols-7 gap-2' : 'space-y-4'}
              `}
            >
              {weekDays.map((day, index) => {
                const dayOfWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'][index] as DayOfWeek;
                const dayTasks = state.currentWeek.tasks[dayOfWeek] || [];

                return (
                  <motion.div
                    key={day.toISOString()}
                    layout
                    className={isCompact ? '' : 'mb-4'}
                  >
                    {!isCompact && (
                      <div className="flex items-center justify-between mb-3">
                        <h2 className="text-base font-medium text-gray-800">
                          {formatDayName(day)}
                        </h2>
                        <span className="text-sm text-gray-500">
                          {dayTasks.filter(t => !t.isCompleted).length} pending
                        </span>
                      </div>
                    )}

                    <SortableContext items={dayTasks.map(t => t.id)} strategy={verticalListSortingStrategy}>
                      <div
                        id={`day-${index}`}
                        className={`
                          min-h-[200px] rounded-lg border-2 border-dashed border-gray-200 p-4
                          ${isCompact ? 'h-full min-h-[150px]' : ''}
                          ${dayTasks.length === 0 ? 'flex items-center justify-center' : ''}
                        `}
                      >
                        {dayTasks.length === 0 ? (
                          <div className="text-center text-gray-400">
                            <div className="text-2xl mb-1">🌱</div>
                            <p className={`text-xs ${isCompact ? 'hidden' : ''}`}>
                              No tasks yet
                            </p>
                          </div>
                        ) : (
                          <div className={isCompact ? 'space-y-1' : 'space-y-2'}>
                            <AnimatePresence>
                              {dayTasks
                                .filter(task => state.showCompletedTasks || !task.isCompleted)
                                .map((task) => (
                                  <motion.div key={task.id}>
                                    {isCompact ? (
                                      <div
                                        className={`
                                          w-full p-2 rounded text-xs bg-white shadow-sm border
                                          ${task.isCompleted ? 'opacity-60 line-through' : ''}
                                          cursor-pointer hover:shadow-md transition-all
                                        `}
                                        onClick={() => toggleTask(task.id)}
                                      >
                                        <div className="truncate font-medium">{task.title}</div>
                                        {task.estimatedMinutes && (
                                          <div className="text-gray-500 text-xs mt-1">
                                            ⏱️ {task.estimatedMinutes}m
                                          </div>
                                        )}
                                      </div>
                                    ) : (
                                      <DayColumn
                                        task={task}
                                        onToggle={toggleTask}
                                        onDelete={deleteTask}
                                        onEdit={handleEditTask}
                                      />
                                    )}
                                  </motion.div>
                              ))}
                            </AnimatePresence>
                          </div>
                        )}
                      </div>
                    </SortableContext>
                  </motion.div>
                );
          })}
            </motion.div>

            <DragOverlay>
              {activeTask ? <TaskCard task={activeTask} onToggle={() => {}} isDragging /> : null}
            </DragOverlay>
          </DndContext>
        )}
      </AnimatePresence>

      {/* Collapsed State Message */}
      {isCalendarCollapsed && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex-1 flex items-center justify-center"
        >
          <div className="text-center p-8">
            <div className="text-4xl mb-4">📅</div>
            <h3 className="text-lg font-medium text-gray-600 mb-2">Calendar Collapsed</h3>
            <p className="text-sm text-gray-500">Click the arrow above to expand the calendar view</p>
          </div>
        </motion.div>
      )}

      {/* Floating Action Button */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => setShowTaskForm(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-lg flex items-center justify-center z-20"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
        </svg>
      </motion.button>

      {/* Task Form Modal */}
      <AnimatePresence>
        {showTaskForm && (
          <TaskForm
            initialData={editingTask ? {
              title: editingTask.title,
              description: editingTask.description || '',
              categoryId: editingTask.categoryId,
              estimatedMinutes: editingTask.estimatedMinutes || 20,
              priority: editingTask.priority,
              dueDate: editingTask.dueDate
            } : undefined}
            onSubmit={handleAddTask}
            onCancel={handleCloseForm}
          />
        )}
      </AnimatePresence>
    </div>
  );
};