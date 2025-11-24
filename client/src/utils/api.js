const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export const getWelcome = async () => {
  const res = await fetch(`${API_URL}/api`);
  if (!res.ok) throw new Error('API request failed');
  return res.json();
};

export const getHealth = async () => {
  const res = await fetch(`${API_URL}/health`);
  if (!res.ok) throw new Error('Health check failed');
  return res.json();
};
