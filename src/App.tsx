import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard';
import { LoginCredentials } from './types/admin';
import './App.css';

const queryClient = new QueryClient();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (credentials: LoginCredentials) => {
    if (credentials.username === 'radu' && credentials.password === 'radu') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      {isLoggedIn ? <AdminDashboard /> : <Login onLogin={handleLogin} />}
    </QueryClientProvider>
  );
}

export default App;
