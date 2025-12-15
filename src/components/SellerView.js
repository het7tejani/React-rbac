
import React from 'react';

const SellerView = () => {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h2>Dashboard</h2>
          <p style={{ margin: 0 }}>Welcome back, <strong>Glow World Pvt Ltd</strong></p>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button className="btn btn-outline">Export Reports</button>
          <button className="btn btn-primary">+ Add Product</button>
        </div>
      </div>

      <div className="stats-grid">
        <div className="card stat-card">
          <div className="stat-label">Total Revenue</div>
          <div className="stat-value">₹1,24,500</div>
          <div className="stat-trend trend-up">
            <span>↑ 12.5%</span> <span style={{ color: 'var(--text-secondary)', fontWeight: 400 }}>vs last month</span>
          </div>
        </div>
        
        <div className="card stat-card">
          <div className="stat-label">Total Orders</div>
          <div className="stat-value">482</div>
          <div className="stat-trend trend-up">
            <span>↑ 8.2%</span> <span style={{ color: 'var(--text-secondary)', fontWeight: 400 }}>vs last month</span>
          </div>
        </div>
        
        <div className="card stat-card">
          <div className="stat-label">Avg. Order Value</div>
          <div className="stat-value">₹258</div>
          <div className="stat-trend trend-down">
            <span>↓ 2.1%</span> <span style={{ color: 'var(--text-secondary)', fontWeight: 400 }}>vs last month</span>
          </div>
        </div>

        <div className="card stat-card">
          <div className="stat-label">Pending Shipments</div>
          <div className="stat-value" style={{ color: '#ed8936' }}>14</div>
          <div className="stat-trend" style={{ color: '#ed8936' }}>
             Needs Attention
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
        
        <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
          <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3>Recent Orders</h3>
            <a href="#" style={{ fontSize: '0.875rem', color: 'var(--primary)', textDecoration: 'none' }}>View All</a>
          </div>
          <div className="table-container" style={{ border: 'none', borderRadius: 0 }}>
            <table className="pro-table">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Product</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#ORD-7782</td>
                  <td>Matte Lipstick</td>
                  <td>Oct 24</td>
                  <td><span className="status-pill status-warning">Pending</span></td>
                  <td>₹599</td>
                </tr>
                <tr>
                  <td>#ORD-7781</td>
                  <td>Hydrating Serum</td>
                  <td>Oct 24</td>
                  <td><span className="status-pill status-success">Shipped</span></td>
                  <td>₹450</td>
                </tr>
                <tr>
                  <td>#ORD-7780</td>
                  <td>Rose Water Toner</td>
                  <td>Oct 23</td>
                  <td><span className="status-pill status-info">Delivered</span></td>
                  <td>₹1,200</td>
                </tr>
                <tr>
                  <td>#ORD-7779</td>
                  <td>Facial Kit</td>
                  <td>Oct 22</td>
                  <td><span className="status-pill status-info">Delivered</span></td>
                  <td>₹899</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
           <div className="card">
             <h3>Top Selling Products</h3>
             <ul style={{ listStyle: 'none', padding: 0, margin: '1rem 0 0' }}>
               {[
                 { name: 'Matte Lipstick', count: 124 },
                 { name: 'Rose Water', count: 98 },
                 { name: 'Eyeliner', count: 85 }
               ].map((item, idx) => (
                 <li key={idx} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 0', borderBottom: idx !== 2 ? '1px solid #eee' : 'none' }}>
                   <span style={{ fontSize: '0.9rem' }}>{item.name}</span>
                   <span style={{ fontWeight: 600 }}>{item.count}</span>
                 </li>
               ))}
             </ul>
           </div>

           <div className="card" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
             <h3>Pro Tip 💡</h3>
             <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
               Adding high-quality images can increase conversion by up to 20%.
             </p>
             <button className="btn" style={{ background: 'rgba(255,255,255,0.2)', color: 'white', width: '100%', border: 'none' }}>Read Guide</button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default SellerView;
