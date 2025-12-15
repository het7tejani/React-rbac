
import React from 'react';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, login, logout } = useAuth();
  
  return (
    <nav className="navbar">
      <a href="/" className="navbar-brand">
        Nykaa<span className="brand-suffix">Clone</span>
      </a>

      <div className="navbar-links">
        {(!user || user.role === 'customer') && (
          <>
            <a href="#" className="nav-link">Categories</a>
            <a href="#" className="nav-link">Brands</a>
            <a href="#" className="nav-link">Beauty Advice</a>
          </>
        )}

        {user?.role === 'customer' && (
          <>
            <a href="#" className="nav-link">My Orders</a>
            <a href="#" className="nav-link">Wishlist</a>
            <span className="nav-link active">Cart (3)</span>
          </>
        )}
      </div>

      <div className="auth-controls">
        {user ? (
          <>
            <span className="user-greeting">
              Hi, <strong>{user.name}</strong>
            </span>
            <button className="btn btn-outline btn-sm" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <div className="role-switcher">
            <span className="role-label">Simulate:</span>
            <select 
              className="role-select"
              onChange={(e) => e.target.value && login(e.target.value)} 
              defaultValue=""
            >
              <option value="" disabled>Select Role</option>
              <option value="customer">Customer</option>
              <option value="seller">Seller</option>
              <option value="admin">Admin</option>
            </select>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
