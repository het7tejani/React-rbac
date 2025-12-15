
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const storedUser = localStorage.getItem('nykaa_clone_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const notify = (message, type = 'info') => {
    const id = Date.now();
    setNotifications((prev) => [...prev, { id, message, type }]);
    
    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== id));
    }, 3000);
  };

  const login = (role) => {
    let mockUser;
    
    switch(role) {
      case 'seller':
        mockUser = { id: 's1', name: 'Glow World Pvt Ltd', role: 'seller', email: 'store@glowworld.com' };
        break;
      case 'admin':
        mockUser = { id: 'a1', name: 'System Admin', role: 'admin', email: 'admin@nykaa.clone' };
        break;
      case 'customer':
      default:
        mockUser = { id: 'c1', name: 'Het Tejani', role: 'customer', email: 'het@example.com' };
        break;
    }

    setUser(mockUser);
    localStorage.setItem('nykaa_clone_user', JSON.stringify(mockUser));
    notify(`Welcome back, ${mockUser.name}!`, 'success');
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('nykaa_clone_user');
    notify('Logged out successfully', 'info');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading, notifications }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
