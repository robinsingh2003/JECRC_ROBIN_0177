import { Outlet, NavLink } from "react-router-dom";
import { useState } from "react";

export default function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="dashboard-layout">

      {/* SIDEBAR */}
      <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
        <h2>{collapsed ? "⚡" : "Admin Panel"}</h2>

        <NavLink to="/dashboard">🏠 {collapsed ? "" : "Dashboard"}</NavLink>
        <NavLink to="/dashboard/analytics">📊 {collapsed ? "" : "Analytics"}</NavLink>
        <NavLink to="/dashboard/settings">⚙️ {collapsed ? "" : "Settings"}</NavLink>
        <NavLink to="/">🏪 {collapsed ? "" : "Store"}</NavLink>
      </div>

      {/* MAIN */}
      <div className="dashboard-main">

        {/* TOPBAR */}
        <div className="topbar">
          <span
            className="toggle-btn"
            onClick={() => setCollapsed(!collapsed)}
          >
            ☰
          </span>

          <div>👤 User</div>
        </div>

        <Outlet />
      </div>

    </div>
  );
}