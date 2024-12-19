import React from 'react';
import Header from './components/layout/Header';
import TaskList from './components/tasks/TaskList';
import LoginForm from './components/auth/LoginForm';

function App() {
  const isAuthenticated = false;

  if (!isAuthenticated) {
    return <LoginForm />;
  }

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <TaskList />
      </main>
    </div>
  );
}

export default App;