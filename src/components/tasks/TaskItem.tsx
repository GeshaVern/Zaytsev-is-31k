import React from 'react';
import { Check, Trash2 } from 'lucide-react';

interface TaskItemProps {
  id: number;
  title: string;
  completed: boolean;
  timestamp: string;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function TaskItem({ id, title, completed, timestamp, onToggle, onDelete }: TaskItemProps) {
  return (
    <div className="border border-green-900 p-4 hover:border-green-500 transition-colors">
      <div className="flex items-start gap-4">
        <button
          onClick={() => onToggle(id)}
          className={`mt-1 w-5 h-5 border flex items-center justify-center
            ${completed ? 'border-green-500 text-green-500' : 'border-green-900'}`}
        >
          {completed && <Check className="w-3 h-3" />}
        </button>
        
        <div className="flex-1">
          <p className={`${completed ? 'line-through text-green-800' : ''}`}>
            {title}
          </p>
          <p className="text-xs text-green-700 mt-1">ID: {id} | TS: {timestamp}</p>
        </div>

        <button
          onClick={() => onDelete(id)}
          className="text-green-800 hover:text-red-500"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}