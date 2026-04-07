import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { AuthContext } from '../context/AuthContext';
import { Moon, Sun, UserCircle } from 'lucide-react';

const Settings = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const { user } = useContext(AuthContext);

  return (
    <div className="settings-page">
      <h1>Account Settings</h1>
      <div className="settings-section">
        <div className="settings-card">
          <UserCircle size={40} color="var(--accent)" />
          <div className="info">
            <h3>Profile Information</h3>
            <p><strong>Name:</strong> {user?.name}</p>
            <p><strong>Email:</strong> {user?.email}</p>
          </div>
        </div>

        <div className="settings-card">
          <h3>Display Preference</h3>
          <div className="theme-switch-row">
            <span>Toggle Dark Mode</span>
            <button className="btn-secondary" onClick={toggleTheme}>
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;