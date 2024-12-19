import React, { useState } from 'react';
import { UserCircle2, Lock } from 'lucide-react';

export default function LoginForm() {
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', credentials);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-black">
      <div className="w-full max-w-md p-6 border border-green-900">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold tracking-wider mb-2">DARKNET_TASKS</h1>
          <p className="text-green-600">Secure Access Required</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm mb-2">USERNAME:</label>
            <input
              type="text"
              className="w-full p-2"
              value={credentials.username}
              onChange={e => setCredentials({ ...credentials, username: e.target.value })}
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-2">PASSWORD:</label>
            <input
              type="password"
              className="w-full p-2"
              value={credentials.password}
              onChange={e => setCredentials({ ...credentials, password: e.target.value })}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full p-2 border border-green-500 hover:bg-green-500/10"
          >
            AUTHENTICATE
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-green-600">
          <p>Connection encrypted with TOR</p>
          <p className="mt-2">System time: {new Date().toISOString()}</p>
        </div>
      </div>
    </div>
  );
}