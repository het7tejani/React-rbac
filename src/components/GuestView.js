
import React from 'react';
import { useAuth } from '../context/AuthContext';

const GuestView = () => {
  const { login } = useAuth();

  return (
    <div className="guest-view">
      <section style={{ 
        display: 'grid', 
        gridTemplateColumns: '1.2fr 1fr', 
        gap: '4rem', 
        alignItems: 'center', 
        padding: '4rem 0',
        minHeight: '400px'
      }}>
        <div>
          <span style={{ 
            color: 'var(--primary)', 
            fontWeight: 'bold', 
            textTransform: 'uppercase', 
            letterSpacing: '2px', 
            fontSize: '0.875rem' 
          }}>
            New Season Arrivals
          </span>
          <h1 style={{ fontSize: '3.5rem', lineHeight: '1.1', margin: '1rem 0 1.5rem' }}>
            Beauty tailored <br/>to <span style={{ color: 'var(--primary)' }}>your vibe.</span>
          </h1>
          <p style={{ fontSize: '1.125rem', marginBottom: '2.5rem', maxWidth: '450px' }}>
            Explore thousands of top-rated products from the brands you love. 
            Join our community for exclusive access.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button className="btn btn-primary" style={{ padding: '0.875rem 2rem' }} onClick={() => login('customer')}>
              Start Shopping
            </button>
            <button className="btn btn-outline" style={{ padding: '0.875rem 2rem' }} onClick={() => login('seller')}>
              Partner With Us
            </button>
          </div>
        </div>
        
        <div style={{ 
          position: 'relative', 
          height: '400px', 
          background: 'linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%)', 
          borderRadius: '2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: 'var(--shadow-lg)'
        }}>
           <div style={{ fontSize: '150px', filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.1))' }}>✨</div>
           
           <div className="card" style={{ 
             position: 'absolute', 
             bottom: '-20px', 
             left: '-20px', 
             padding: '1rem 2rem',
             display: 'flex',
             alignItems: 'center',
             gap: '1rem'
           }}>
             <div style={{ background: '#def7ec', padding: '10px', borderRadius: '50%', color: '#03543f' }}>🛡️</div>
             <div>
               <div style={{ fontWeight: 'bold' }}>100% Authentic</div>
               <div style={{ fontSize: '0.8rem', color: '#718096' }}>Sourced directly from brands</div>
             </div>
           </div>
        </div>
      </section>

      <section style={{ margin: '4rem 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '2rem' }}>
          <h2>Shop by Category</h2>
          <a href="#" style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: '600' }}>View all →</a>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
          {[
            { name: 'Makeup', icon: '💄', color: '#fff5f5' }, 
            { name: 'Skincare', icon: '🧴', color: '#f0fff4' }, 
            { name: 'Haircare', icon: '💇‍♀️', color: '#ebf8ff' }, 
            { name: 'Fragrance', icon: '🌸', color: '#faf5ff' }
          ].map((cat) => (
            <div key={cat.name} className="card" style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              textAlign: 'center', 
              cursor: 'pointer',
              border: '1px solid transparent',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--primary)'; e.currentTarget.style.transform = 'translateY(-5px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'transparent'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <div style={{ 
                width: '80px', 
                height: '80px', 
                borderRadius: '50%', 
                background: cat.color, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                fontSize: '2rem',
                marginBottom: '1rem'
              }}>
                {cat.icon}
              </div>
              <h3 style={{ fontSize: '1rem' }}>{cat.name}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default GuestView;
