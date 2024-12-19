import React, { useState } from 'react';
import { Plus, Check, Clock, Tag } from 'lucide-react';

interface Task {
  id: number;
  title: string;
  completed: boolean;
  category: string;
  dueDate?: string;
}

export default function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: 'Complete project documentation', completed: false, category: 'Work', dueDate: '2024-03-20' },
    { id: 2, title: 'Buy groceries', completed: true, category: 'Personal' },
    { id: 3, title: 'Schedule team meeting', completed: false, category: 'Work', dueDate: '2024-03-15' },
  ]);

  const [newTask, setNewTask] = useState('');

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    
    setTasks([...tasks, {
      id: Date.now(),
      title: newTask,
      completed: false,
      category: 'Personal'
    }]);
    setNewTask('');
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-serif text-3xl mb-6 pb-2 border-b border-gray-300">Tasks</h1>
        
        <form onSubmit={addTask} className="mb-8">
          <div className="flex gap-2">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Add a new task..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
            <button 
              type="submit"
              className="px-4 py-2 bg-[#3366cc] text-white rounded hover:bg-[#2a4fa8] flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Add Task
            </button>
          </div>
        </form>

        <div className="space-y-4">
          {tasks.map(task => (
            <div 
              key={task.id}
              className="p-4 bg-white border border-gray-200 rounded-lg hover:border-gray-300 transition-colors"
            >
              <div className="flex items-start gap-4">
                <button
                  onClick={() => toggleTask(task.id)}
                  className={`mt-1 w-5 h-5 rounded-full border flex items-center justify-center
                    ${task.completed 
                      ? 'bg-green-500 border-green-500 text-white' 
                      : 'border-gray-300 hover:border-gray-400'
                    }`}
                >
                  {task.completed && <Check className="w-3 h-3" />}
                </button>
                <div className="flex-1">
                  <p className={`text-lg ${task.completed ? 'line-through text-gray-500' : ''}`}>
                    {task.title}
                  </p>
                  <div className="mt-2 flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Tag className="w-4 h-4" />
                      {task.category}
                    </span>
                    {task.dueDate && (
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        Due: {task.dueDate}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}