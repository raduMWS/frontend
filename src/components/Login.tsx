/*
import React, { useState } from 'react';
import { LoginCredentials } from '../types/admin';

interface LoginProps {
  onLogin: (credentials: LoginCredentials) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [credentials, setCredentials] = useState<LoginCredentials>({ username: '', password: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(credentials);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl mb-4">Admin Login</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium">Username</label>
          <input
            type="text"
            value={credentials.username}
            onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Password</label>
          <input
            type="password"
            value={credentials.password}
            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Login</button>
      </form>
    </div>
  );
};

export default Login;
*/