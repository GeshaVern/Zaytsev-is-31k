import React from 'react';
import { Menu, Search, Home, ListTodo, UserCircle2 } from 'lucide-react';

export default function Sidebar() {
  return (
    <div className="w-64 bg-[#f8f9fa] border-r border-gray-300 h-screen p-4 fixed left-0 top-0">
      <div className="flex items-center gap-2 mb-6">
        <Menu className="w-5 h-5 text-gray-500" />
        <span className="font-serif text-xl">WikiTasks</span>
      </div>
      
      <div className="relative mb-6">
        <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
        <input 
          type="search"
          placeholder="Search tasks..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded bg-white focus:outline-none focus:border-blue-500"
        />
      </div>

      <nav>
        <ul className="space-y-2">
          <li>
            <a href="/" className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-200 rounded">
              <Home className="w-4 h-4" />
              Home
            </a>
          </li>
          <li>
            <a href="/tasks" className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-200 rounded">
              <ListTodo className="w-4 h-4" />
              Tasks
            </a>
          </li>
          <li>
            <a href="/profile" className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-200 rounded">
              <UserCircle2 className="w-4 h-4" />
              Profile
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}