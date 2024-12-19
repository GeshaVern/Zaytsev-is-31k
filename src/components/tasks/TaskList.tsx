import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import TaskItem from './TaskItem';

interface Task {
  id: number;
  title: string;
  completed: boolean;
  timestamp: string;
}

export default function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([
    { 
      id: 1, 
      title: 'Secure connection established', 
      completed: true,
      timestamp: '2024-03-14T12:00:00Z'
    },
    { 
      id: 2, 
      title: 'Verify encryption protocols', 
      completed: false,
      timestamp: '2024-03-14T12:30:00Z'
    }
  ]);

  const [newTask, setNewTask] = useState('');

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    
    setTasks([...tasks, {
      id: Date.now(),
      title: newTask,
      completed: false,
      timestamp: new Date().toISOString()
    }]);
    setNewTask('');
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="mb-8">
        <h2 className="text-xl mb-4 border-b border-green-900 pb-2">ACTIVE_TASKS</h2>
        
        <form onSubmit={addTask} className="flex gap-2">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="New task..."
            className="flex-1 p-2"
          />
          <button 
            type="submit"
            className="px-4 py-2 border border-green-500 hover:bg-green-500/10 flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            ADD
          </button>
        </form>
      </div>

      <div className="space-y-2">
        {tasks.map(task => (
          <TaskItem
            key={task.id}
            {...task}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        ))}
      </div>
    </div>
  );
}