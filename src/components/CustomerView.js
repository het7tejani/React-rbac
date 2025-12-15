
import React from 'react';

const products = [
  { id: 1, name: "Matte Revolution Lipstick", brand: "Charlotte Tilbury", price: 2950, original: 3200, rating: 4.8, reviews: 210, img: "💄", tag: "Bestseller" },
  { id: 2, name: "Advanced Snail Mucin", brand: "COSRX", price: 1450, original: 1450, rating: 4.5, reviews: 850, img: "🐌", tag: null },
  { id: 3, name: "Hydro Boost Water Gel", brand: "Neutrogena", price: 950, original: 1100, rating: 4.6, reviews: 3400, img: "💧", tag: "Sale" },
  { id: 4, name: "Lash Sensational Mascara", brand: "Maybelline", price: 399, original: 549, rating: 4.2, reviews: 120, img: "👁️", tag: "Deal" },
  { id: 5, name: "Pure Rose Water", brand: "Kama Ayurveda", price: 1200, original: 1200, rating: 4.9, reviews: 560, img: "🌹", tag: "Luxury" },
  { id: 6, name: "Keratin Smooth Shampoo", brand: "Tresemme", price: 650, original: 800, rating: 4.3, reviews: 400, img: "🧴", tag: null },
];

const CustomerView = () => {
  return (
    <div>
      <div style={{ marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Top Picks for You</h1>
        
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
          <div style={{ 
            background: 'linear-gradient(to right, #fce7f3, #fff0f5)', 
            borderRadius: '0.75rem', 
            padding: '2.5rem', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            border: '1px solid #fbcfe8'
          }}>
            <div>
              <span className="status-pill status-danger" style={{ marginBottom: '1rem' }}>Limited Time</span>
              <h2 style={{ fontSize: '2rem', margin: '0.5rem 0' }}>The Big Pink Sale</h2>
              <p>Flat 40% off on international luxury brands.</p>
              <button className="btn btn-primary">Shop The Sale</button>
            </div>
            <div style={{ fontSize: '5rem' }}>🛍️</div>
          </div>

          <div className="card" style={{ 
            background: '#ebf8ff', 
            border: '1px solid #bee3f8', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center',
            alignItems: 'flex-start'
          }}>
            <h3 style={{ color: '#2c5282' }}>New Arrivals</h3>
            <p style={{ fontSize: '0.9rem' }}>Check out the latest drops from K-Beauty.</p>
            <button className="btn btn-outline" style={{ borderColor: '#2c5282', color: '#2c5282' }}>View Collection</button>
          </div>
        </div>
      </div>

      <div className="product-grid">
        {products.map((p) => (
          <div key={p.id} className="product-card">
            <div className="product-image-area">
              {p.img}
              {p.tag && <span className="product-badge">{p.tag}</span>}
              <button className="wishlist-btn">♥</button>
            </div>
            <div className="product-info">
              <div className="rating-row">
                <span>★★★★☆</span>
                <span className="rating-count">({p.reviews})</span>
              </div>
              <div className="product-brand">{p.brand}</div>
              <div className="product-title">{p.name}</div>
              <div className="price-row">
                <span className="current-price">₹{p.price}</span>
                {p.original > p.price && <span className="original-price">₹{p.original}</span>}
                {p.original > p.price && <span style={{ color: 'var(--success)', fontSize: '0.75rem', fontWeight: 'bold' }}>
                  {Math.round(((p.original - p.price) / p.original) * 100)}% OFF
                </span>}
              </div>
              <button className="btn btn-primary btn-sm" style={{ width: '100%' }}>Add to Bag</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerView;
