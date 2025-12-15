
import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

export const StorefrontLayout = ({ children }) => {
  return (
    <div className="storefront-layout">
      <Navbar />
      <div className="view-container">
        {children}
      </div>
    </div>
  );
};

export const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="dashboard-content">
        {children}
      </div>
    </div>
  );
};
