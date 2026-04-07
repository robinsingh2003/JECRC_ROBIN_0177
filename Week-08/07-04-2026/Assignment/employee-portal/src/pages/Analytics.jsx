import React, { useContext } from 'react';
import { EmployeeContext } from '../context/EmployeeContext';
import { TrendingUp, Users, PieChart as PieIcon } from 'lucide-react';

const Analytics = () => {
  const { state } = useContext(EmployeeContext);

  // Advanced Logic: Calculate role distribution dynamically
  const roleCounts = state.reduce((acc, emp) => {
    acc[emp.role] = (acc[emp.role] || 0) + 1;
    return acc;
  }, {});

  const total = state.length;

  return (
    <div className="analytics-container">
      <header className="page-header">
        <h1>Data Insights</h1>
        <p className="subtitle">Real-time workforce distribution</p>
      </header>

      <div className="analytics-grid">
        {/* KPI Cards */}
        <div className="stat-card accent-border">
          <TrendingUp size={24} color="var(--accent)" />
          <h3>Growth Rate</h3>
          <p className="value">+12.5%</p>
          <span className="trend positive">↑ vs last month</span>
        </div>

        {/* CSS Chart: Role Distribution */}
        <div className="chart-card">
          <div className="card-header">
            <PieIcon size={20} />
            <h3>Role Distribution</h3>
          </div>
          <div className="bar-chart-container">
            {Object.entries(roleCounts).map(([role, count]) => {
              const percentage = (count / total) * 100;
              return (
                <div key={role} className="bar-group">
                  <div className="bar-label">
                    <span>{role}</span>
                    <span>{count} ({Math.round(percentage)}%)</span>
                  </div>
                  <div className="bar-bg">
                    <div 
                      className="bar-fill" 
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Activity Feed */}
        <div className="activity-card">
          <h3>Recent System Logs</h3>
          <ul className="activity-list">
            <li><span className="dot"></span> New Engineer added: Alice</li>
            <li><span className="dot"></span> Role updated: Bob (PM → Senior PM)</li>
            <li><span className="dot"></span> Theme toggled to Dark Mode</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Analytics; // Crucial for your App.jsx import to work!