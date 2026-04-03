import { useAuth } from "../../context/AuthContext";

export default function DashboardHome() {
  const { user } = useAuth();

  return (
    <div className="dashboard-content">
      <div className="dashboard-header">
        <h1>Welcome back, {user?.name || 'Admin'}! 👋</h1>
        <p>Here's what's happening with your store today.</p>
      </div>

      {/* STATS CARDS */}
      <div className="grid">
        <div className="card blue">
          <div className="card-icon">💰</div>
          <div className="card-content">
            <h2>₹2,45,000</h2>
            <p>Total Revenue</p>
            <span className="card-trend positive">+12.5% from last month</span>
          </div>
        </div>

        <div className="card green">
          <div className="card-icon">🛒</div>
          <div className="card-content">
            <h2>1,247</h2>
            <p>Total Orders</p>
            <span className="card-trend positive">+8.2% from last month</span>
          </div>
        </div>

        <div className="card orange">
          <div className="card-icon">👥</div>
          <div className="card-content">
            <h2>3,492</h2>
            <p>Active Users</p>
            <span className="card-trend positive">+15.3% from last month</span>
          </div>
        </div>

        <div className="card purple">
          <div className="card-icon">📦</div>
          <div className="card-content">
            <h2>89</h2>
            <p>Products in Stock</p>
            <span className="card-trend neutral">12 low stock items</span>
          </div>
        </div>
      </div>

      {/* RECENT ACTIVITY */}
      <div className="activity-section">
        <h2>Recent Activity</h2>
        <div className="activity-list">
          <div className="activity-item">
            <div className="activity-icon">🛒</div>
            <div className="activity-content">
              <p><strong>John Doe</strong> placed an order for MacBook Pro</p>
              <span className="activity-time">2 minutes ago</span>
            </div>
          </div>
          <div className="activity-item">
            <div className="activity-icon">⭐</div>
            <div className="activity-content">
              <p><strong>Sarah Wilson</strong> left a 5-star review</p>
              <span className="activity-time">15 minutes ago</span>
            </div>
          </div>
          <div className="activity-item">
            <div className="activity-icon">📦</div>
            <div className="activity-content">
              <p>Order #1234 has been shipped</p>
              <span className="activity-time">1 hour ago</span>
            </div>
          </div>
          <div className="activity-item">
            <div className="activity-icon">💳</div>
            <div className="activity-content">
              <p>Payment received for ₹12,500</p>
              <span className="activity-time">2 hours ago</span>
            </div>
          </div>
        </div>
      </div>

      {/* QUICK ACTIONS */}
      <div className="quick-actions">
        <h2>Quick Actions</h2>
        <div className="action-buttons">
          <button className="action-btn primary">
            <span className="action-icon">➕</span>
            Add New Product
          </button>
          <button className="action-btn secondary">
            <span className="action-icon">📊</span>
            View Reports
          </button>
          <button className="action-btn secondary">
            <span className="action-icon">⚙️</span>
            Manage Settings
          </button>
          <button className="action-btn secondary">
            <span className="action-icon">📧</span>
            Send Newsletter
          </button>
        </div>
      </div>
    </div>
  );
}