
import React from 'react';
import { useAuth } from '../context/AuthContext';

const Sidebar = () => {
  const { user, logout } = useAuth();
  const role = user?.role;

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#fc2779' }}>
          Nykaa<span style={{ color: '#333' }}>Pro</span>
        </div>
        <div style={{ fontSize: '12px', color: '#888', marginTop: '5px' }}>
          {role === 'admin' ? 'System Administrator' : 'Seller Dashboard'}
        </div>
      </div>

      <div className="sidebar-menu">
        {role === 'seller' && (
          <>
            <div className="sidebar-link active">📊 Dashboard</div>
            <div className="sidebar-link">📦 Inventory</div>
            <div className="sidebar-link">🚚 Orders <span className="badge badge-warning" style={{marginLeft:'auto'}}>3</span></div>
            <div className="sidebar-link">💰 Payments</div>
            <div className="sidebar-link">💬 Customer Q&A</div>
          </>
        )}

        {role === 'admin' && (
          <>
            <div className="sidebar-link active">👥 User Management</div>
            <div className="sidebar-link">🛡️ Content Moderation</div>
            <div className="sidebar-link">💳 Financials</div>
            <div className="sidebar-link">⚙️ Platform Settings</div>
            <div className="sidebar-link">📑 Audit Logs</div>
          </>
        )}
      </div>

      <div className="sidebar-footer">
        <div style={{ marginBottom: '10px', fontSize: '13px', fontWeight: 'bold' }}>{user?.name}</div>
        <button onClick={logout} className="btn btn-outline" style={{ width: '100%', fontSize: '12px' }}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
