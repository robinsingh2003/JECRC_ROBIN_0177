import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const login = (email, role) => {
    setLoading(true);
    setTimeout(() => {
      const userData = { email, role, id: role === 'Admin' ? 0 : 101 };
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      setLoading(false);
      navigate('/dashboard');
    }, 1000);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);