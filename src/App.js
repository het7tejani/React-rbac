
import React from 'react';
import './App.css';
import { AuthProvider, useAuth } from './context/AuthContext';
import GuestView from './components/GuestView';
import CustomerView from './components/CustomerView';
import SellerView from './components/SellerView';
import AdminView from './components/AdminView';
import { StorefrontLayout, DashboardLayout } from './components/Layouts';
import Toast from './components/Toast';

const RoleBasedApp = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div style={{ display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center' }}>Loading...</div>;
  }

  let Layout;
  let View;

  if (!user) {
    Layout = StorefrontLayout;
    View = GuestView;
  } else {
    switch (user.role) {
      case 'seller':
        Layout = DashboardLayout;
        View = SellerView;
        break;
      case 'admin':
        Layout = DashboardLayout;
        View = AdminView;
        break;
      case 'customer':
      default:
        Layout = StorefrontLayout;
        View = CustomerView;
        break;
    }
  }

  return (
    <Layout>
      <View />
    </Layout>
  );
};

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <RoleBasedApp />
        <Toast />
      </div>
    </AuthProvider>
  );
}

export default App;
