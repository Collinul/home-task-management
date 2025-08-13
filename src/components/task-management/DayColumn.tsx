import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { TaskCard } from '../ui/TaskCard';
import { Task } from '../../types';

interface DayColumnProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete?: (id: string) => void;
  onEdit?: (task: Task) => void;
}

export const DayColumn: React.FC<DayColumnProps> = ({
  task,
  onToggle,
  onDelete,
  onEdit
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={isDragging ? 'z-10' : ''}
    >
      <TaskCard
        task={task}
        onToggle={onToggle}
        onDelete={onDelete}
        onEdit={onEdit}
        isDragging={isDragging}
      />
    </div>
  );
};