import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/auth/authSlice";
import { setLoading } from "../features/ui/uiSlice";

function Login() {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleLogin = () => {
    const trimmedUsername = username.trim();
    if (!trimmedUsername) {
      setError("Please enter a valid name.");
      return;
    }
    if (trimmedUsername.length < 2) {
      setError("Name must be at least 2 characters long.");
      return;
    }

    setError("");
    dispatch(setLoading(true));
    setTimeout(() => {
      dispatch(login({ name: trimmedUsername }));
      dispatch(setLoading(false));
    }, 300);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div className="login-container">
      <div className="login-card card">
        <h3>Welcome to Employee Dashboard</h3>
        <p>Please enter your name to continue</p>
        <input
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            if (error) setError("");
          }}
          onKeyPress={handleKeyPress}
          placeholder="Enter your full name"
          className={error ? "input-error" : ""}
        />
        {error && <p className="error-message">{error}</p>}
        <button onClick={handleLogin} disabled={!username.trim()}>
          Sign In
        </button>
        <p className="login-hint">Enter any name to access the employee management system.</p>
      </div>
    </div>
  );
}

export default Login;
