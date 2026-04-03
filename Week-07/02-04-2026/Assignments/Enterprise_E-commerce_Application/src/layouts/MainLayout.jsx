import { Outlet, Link } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <div className="navbar">
        <h2>MyStore</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/dashboard">Dashboard</Link>
        </div>
      </div>

      <div style={{ padding: "20px" }}>
        <Outlet />
      </div>
    </>
  );
}