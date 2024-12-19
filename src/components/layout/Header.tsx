import React from 'react';
import { Terminal } from 'lucide-react';

export default function Header() {
  return (
    <header className="border-b border-green-900 p-4">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <div className="flex items-center gap-2">
          <Terminal className="w-5 h-5" />
          <span className="text-xl font-bold tracking-wider">DARKNET_TASKS</span>
        </div>
        <nav className="space-x-6">
          <a href="/tasks" className="hover:text-green-400">/tasks</a>
          <a href="/profile" className="hover:text-green-400">/profile</a>
          <a href="/logout" className="hover:text-green-400">/logout</a>
        </nav>
      </div>
    </header>
  );
}