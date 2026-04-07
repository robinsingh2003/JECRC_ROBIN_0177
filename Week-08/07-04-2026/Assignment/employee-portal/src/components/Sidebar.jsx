import React, { useContext } from 'react';
// We must import BarChart2 from lucide-react here
import { 
  LayoutDashboard, 
  BarChart2, 
  Settings as SettingsIcon, 
  LogOut, 
  Moon, 
  Sun, 
  ShieldCheck 
} from 'lucide-react';

import { AuthContext } from '../context/AuthContext';
import { ThemeContext } from '../context/ThemeContext';

const Sidebar = ({ activeView, setActiveView }) => {
  const { logout, user } = useContext(AuthContext);
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <ShieldCheck size={32} color="var(--accent)" />
        <span className="brand-text">Portal.io</span>
      </div>

      <nav className="sidebar-nav">
        {/* Dashboard Link */}
        <div 
          className={`nav-item ${activeView === 'dashboard' ? 'active' : ''}`}
          onClick={() => setActiveView('dashboard')}
        >
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </div>

        {/* Analytics Link - This was causing the error */}
        <div 
          className={`nav-item ${activeView === 'analytics' ? 'active' : ''}`}
          onClick={() => setActiveView('analytics')}
        >
          <BarChart2 size={20} />
          <span>Analytics</span>
        </div>

        {/* Settings Link */}
        <div 
          className={`nav-item ${activeView === 'settings' ? 'active' : ''}`}
          onClick={() => setActiveView('settings')}
        >
          <SettingsIcon size={20} />
          <span>Settings</span>
        </div>
      </nav>

      <div className="sidebar-footer">
        <button className="theme-toggle-btn" onClick={toggleTheme} title="Toggle Theme">
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
          <span>{isDark ? 'Light' : 'Dark'} Mode</span>
        </button>

        <div className="user-profile">
          <div className="avatar">{user?.name?.charAt(0) || 'A'}</div>
          <div className="user-info">
            <p className="user-name">{user?.name || 'Admin'}</p>
            <p className="user-role">{user?.role || 'Manager'}</p>
          </div>
        </div>

        <button className="logout-btn" onClick={logout}>
          <LogOut size={18} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;