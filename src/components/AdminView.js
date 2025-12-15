
import React from 'react';

const AdminView = () => {
  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <h2>System Overview</h2>
        <p>Monitor platform performance and user activities.</p>
      </div>

      <div className="stats-grid">
        <div className="card stat-card">
          <div className="stat-label">Total Users</div>
          <div className="stat-value">24,592</div>
          <div className="stat-trend trend-up">↑ 120 this week</div>
        </div>
        <div className="card stat-card">
          <div className="stat-label">Active Sellers</div>
          <div className="stat-value">1,204</div>
          <div className="stat-trend trend-up">↑ 5 pending approval</div>
        </div>
        <div className="card stat-card">
          <div className="stat-label">Platform GMV</div>
          <div className="stat-value">₹4.2 Cr</div>
          <div className="stat-trend trend-up">↑ 15% YTD</div>
        </div>
        <div className="card stat-card">
          <div className="stat-label">System Health</div>
          <div className="stat-value" style={{ color: 'var(--success)' }}>99.98%</div>
          <div className="stat-trend">All systems operational</div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
        
        <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
          <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3>User Management</h3>
            <div style={{ display: 'flex', gap: '10px' }}>
              <input type="text" placeholder="Search users..." style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #e2e8f0' }} />
            </div>
          </div>
          <div className="table-container" style={{ border: 'none', borderRadius: 0 }}>
            <table className="pro-table">
              <thead>
                <tr>
                  <th>User / Email</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div style={{ fontWeight: 600 }}>System Admin</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>admin@nykaa.clone</div>
                  </td>
                  <td><span className="status-pill" style={{ background: '#e2e8f0' }}>Admin</span></td>
                  <td><span className="status-pill status-success">Active</span></td>
                  <td><button className="btn btn-outline btn-sm">Edit</button></td>
                </tr>
                <tr>
                  <td>
                    <div style={{ fontWeight: 600 }}>Glow World Store</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>store@glowworld.com</div>
                  </td>
                  <td><span className="status-pill" style={{ background: '#e2e8f0' }}>Seller</span></td>
                  <td><span className="status-pill status-success">Active</span></td>
                  <td><button className="btn btn-outline btn-sm">Manage</button></td>
                </tr>
                <tr>
                  <td>
                    <div style={{ fontWeight: 600 }}>Fake User</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>bot@test.com</div>
                  </td>
                  <td><span className="status-pill" style={{ background: '#e2e8f0' }}>Customer</span></td>
                  <td><span className="status-pill status-danger">Banned</span></td>
                  <td><button className="btn btn-outline btn-sm">Unban</button></td>
                </tr>
                <tr>
                  <td>
                    <div style={{ fontWeight: 600 }}>Beauty Boutique</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>shop@beauty.com</div>
                  </td>
                  <td><span className="status-pill" style={{ background: '#e2e8f0' }}>Seller</span></td>
                  <td><span className="status-pill status-warning">Pending</span></td>
                  <td><button className="btn btn-primary btn-sm">Approve</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="card">
            <h3>Pending Tasks</h3>
            <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <input type="checkbox" />
                <span style={{ fontSize: '0.9rem' }}>Review new seller documents (3)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <input type="checkbox" />
                <span style={{ fontSize: '0.9rem' }}>Approve marketing banner for Diwali</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <input type="checkbox" defaultChecked />
                <span style={{ fontSize: '0.9rem', textDecoration: 'line-through', color: '#a0aec0' }}>Database backup maintenance</span>
              </div>
            </div>
          </div>

          <div className="card">
            <h3>Server Load</h3>
            <div style={{ marginTop: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.8rem' }}>
                <span>CPU Usage</span>
                <span>24%</span>
              </div>
              <div style={{ width: '100%', height: '8px', background: '#e2e8f0', borderRadius: '4px' }}>
                <div style={{ width: '24%', height: '100%', background: 'var(--success)', borderRadius: '4px' }}></div>
              </div>
            </div>
            <div style={{ marginTop: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.8rem' }}>
                <span>Memory</span>
                <span>58%</span>
              </div>
              <div style={{ width: '100%', height: '8px', background: '#e2e8f0', borderRadius: '4px' }}>
                <div style={{ width: '58%', height: '100%', background: 'var(--info)', borderRadius: '4px' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminView;
