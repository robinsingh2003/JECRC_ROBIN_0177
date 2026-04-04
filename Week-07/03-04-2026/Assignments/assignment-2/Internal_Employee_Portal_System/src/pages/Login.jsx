import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { ShieldCheck } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('Employee');
  const { login, loading } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email.includes('@')) return alert("Enter valid email");
    login(email, role);
  };

  return (
    <div className="login-screen">
      <div className="card login-card">
        <ShieldCheck size={48} color="var(--primary)" style={{ marginBottom: '1rem' }} />
        <h2>Internal Portal</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Please sign in to continue</p>
        
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <input type="email" placeholder="Email Address" value={email} onChange={e => setEmail(e.target.value)} required />
          </div>
          <div className="input-group">
            <select value={role} onChange={e => setRole(e.target.value)}>
              <option value="Admin">HR Admin</option>
              <option value="Employee">Employee</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} disabled={loading}>
            {loading ? "Authenticating..." : "Login to Dashboard"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;