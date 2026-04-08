import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../features/auth/authSlice";
import { toggleTheme } from "../features/ui/uiSlice";

function Navbar() {
  const dispatch = useDispatch();
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  const { darkMode } = useSelector((state) => state.ui);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h2>Employee Management Dashboard</h2>
        {isLoggedIn && <span className="navbar-user">Welcome, {user?.name || "User"}</span>}
      </div>

      <div className="navbar-controls">
        <button
          onClick={() => dispatch(toggleTheme())}
          className="theme-toggle-btn"
          title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>

        {!isLoggedIn ? (
          <button
            onClick={() => dispatch(login({ name: "Admin" }))}
            className="auth-btn login-btn"
          >
            Sign In
          </button>
        ) : (
          <button
            onClick={() => dispatch(logout())}
            className="auth-btn logout-btn"
          >
            Sign Out
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;