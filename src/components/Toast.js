
import React from 'react';
import { useAuth } from '../context/AuthContext';

const Toast = () => {
  const { notifications } = useAuth();

  if (notifications.length === 0) return null;

  return (
    <div className="toast-container">
      {notifications.map((note) => (
        <div key={note.id} className={`toast ${note.type}`}>
          {note.type === 'success' ? '✅' : 'ℹ️'} {note.message}
        </div>
      ))}
    </div>
  );
};

export default Toast;
