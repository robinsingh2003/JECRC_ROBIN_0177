import { useState } from 'react';
import { useCatalogs } from '../context/CatalogContext';
import { useBill } from '../context/BillContext';
import { 
  Ticket, HeartHandshake, ShoppingBag, 
  Plus, Minus, Trash2, ReceiptText, 
  CreditCard, Search 
} from 'lucide-react';

const BillingTerminal = () => {
  const [activeTab, setActiveTab] = useState('entrance');
  const [search, setSearch] = useState('');
  const [couponCode, setCouponCode] = useState('');
  const [promoMessage, setPromoMessage] = useState('');
  const [sortOrder, setSortOrder] = useState('newest');
  const { catalogs } = useCatalogs();
  const { 
    activeItems, addToBill, updateQty, removeItem, 
    calculateSubtotal, discount, setDiscount, taxRate, clearBill 
  } = useBill();

  const subtotal = calculateSubtotal();
  const tax = subtotal * taxRate;
  const total = Math.max(0, subtotal + tax - discount);
  const totalItems = activeItems.reduce((acc, item) => acc + item.qty, 0);

  const icons = {
    entrance: <Ticket size={20} />,
    donation: <HeartHandshake size={20} />,
    selling: <ShoppingBag size={20} />
  };

  const filteredItems = catalogs[activeTab].filter(i => 
    i.name.toLowerCase().includes(search.toLowerCase()) ||
    (i.description && i.description.toLowerCase().includes(search.toLowerCase()))
  );

  const sortedItems = [...filteredItems].sort((a, b) => {
    if (sortOrder === 'low') return a.price - b.price;
    if (sortOrder === 'high') return b.price - a.price;
    return a.name.localeCompare(b.name);
  });

  const handleApplyCoupon = () => {
    const code = couponCode.trim().toUpperCase();
    if (!code) {
      setPromoMessage('Enter a coupon code.');
      return;
    }

    if (code === 'SAVE10') {
      setDiscount(10);
      setPromoMessage('Coupon applied: $10 off');
    } else if (code === 'TENOFF') {
      setDiscount(subtotal * 0.1);
      setPromoMessage('Coupon applied: 10% off');
    } else {
      setDiscount(0);
      setPromoMessage('Code not recognized.');
    }
  };

  const handleClearBill = () => {
    clearBill();
    setCouponCode('');
    setPromoMessage('');
  };

  return (
    <div className="app-container">
      {/* LEFT: Catalog */}
      <div className="main-content">
        <header className="catalog-header">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h2 style={{ margin: 0, fontWeight: 800 }}>Digital Catalog</h2>
            <div style={{ position: 'relative' }}>
              <Search style={{ position: 'absolute', left: 12, top: 10, color: '#94a3b8' }} size={18} />
              <input 
                type="text" 
                placeholder="Find items..." 
                style={{ padding: '0.7rem 1rem 0.7rem 2.5rem', borderRadius: '12px', border: '1px solid #e2e8f0', width: '240px' }}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          <div className="catalog-top">
            <div>
              <p className="small-label">Featured</p>
              <h2>Pick items for an unforgettable visit</h2>
            </div>
            <div className="stats-card">
              <p>{filteredItems.length} items in {activeTab}</p>
              <strong>{totalItems} in cart</strong>
            </div>
          </div>

          <div className="tab-group">
            {Object.keys(catalogs).map(cat => (
              <button 
                key={cat} 
                className={`tab-btn ${activeTab === cat ? 'active' : ''}`}
                onClick={() => setActiveTab(cat)}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {icons[cat] ?? <ShoppingBag size={20} />} {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </span>
              </button>
            ))}
          </div>

          <div className="catalog-actions">
            <div className="search-box">
              <Search size={18} />
              <input 
                type="text" 
                placeholder="Search name or description..." 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="sort-box">
              <label>Sort by</label>
              <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
                <option value="newest">Name</option>
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </header>

        <div className="grid">
          {sortedItems.map(item => (
            <div key={item.id} className="item-card" onClick={() => addToBill(item)}>
              <div className="item-icon">
                {icons[activeTab] ?? <ShoppingBag size={20} />}
              </div>
              <div className="item-meta">
                <span className="item-name">{item.name}</span>
                <span className="item-description">{item.description || 'Add to order'}</span>
              </div>
              <span className="price">${item.price.toFixed(2)}</span>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT: Modern Sidebar */}
      <div className="billing-sidebar">
        <div className="receipt-header">
          <ReceiptText size={40} style={{ color: 'var(--primary)', marginBottom: '0.5rem' }} />
          <h3 style={{ margin: 0 }}>Current Order</h3>
          <p style={{ opacity: 0.5, fontSize: '0.8rem' }}>Table #01 • Admin</p>
        </div>

        <div className="bill-items">
          {activeItems.length === 0 ? (
            <div style={{ textAlign: 'center', marginTop: '4rem', opacity: 0.3 }}>
              <ShoppingBag size={60} style={{ marginBottom: '1rem' }} />
              <p>No items added yet</p>
            </div>
          ) : (
            activeItems.map(item => (
              <div key={item.id} className="bill-item-row">
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600 }}>{item.name}</div>
                  <div className="qty-controls" style={{ marginTop: '0.5rem', width: 'fit-content' }}>
                    <button onClick={() => updateQty(item.id, item.qty - 1)} style={{ color: 'white', background: 'none', border: 'none', cursor: 'pointer' }}><Minus size={14}/></button>
                    <span style={{ fontSize: '0.9rem' }}>{item.qty}</span>
                    <button onClick={() => updateQty(item.id, item.qty + 1)} style={{ color: 'white', background: 'none', border: 'none', cursor: 'pointer' }}><Plus size={14}/></button>
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontWeight: 800 }}>${(item.price * item.qty).toFixed(2)}</div>
                  <button onClick={() => removeItem(item.id)} style={{ color: 'var(--danger)', background: 'none', border: 'none', cursor: 'pointer', marginTop: '0.5rem' }}>
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="totals-section">
          <div className="summary-row">
            <span>Subtotal</span><strong>${subtotal.toFixed(2)}</strong>
          </div>
          <div className="summary-row">
            <span>VAT (12%)</span><strong>${tax.toFixed(2)}</strong>
          </div>
          <div className="summary-row">
            <span>Discount</span><strong>-${discount.toFixed(2)}</strong></div>

          <div className="coupon-group">
            <input
              type="text"
              placeholder="Coupon code: SAVE10 or TENOFF"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
            />
            <button type="button" className="btn-secondary" onClick={handleApplyCoupon}>Apply</button>
          </div>
          {promoMessage && <p className="promo-message">{promoMessage}</p>}

          <hr className="totals-divider" />

          <div className="amount-area">
            <span>Amount to Pay</span>
            <div className="total-amount">${total.toFixed(2)}</div>
          </div>

          <div className="receipt-actions">
            <button className="btn-pay" onClick={() => { window.print(); handleClearBill(); }}>
              <CreditCard size={20} /> Checkout & Print
            </button>
            <button className="btn-secondary" onClick={handleClearBill}>Clear Bill</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingTerminal;