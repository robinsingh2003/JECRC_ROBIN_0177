import { useAuth } from '../context/AuthContext';
import { LogOut, User } from 'lucide-react';

const Navbar = () => {
  const { user, logout } = useAuth();
  if (!user) return null;

  return (
    <nav className="navbar">
      <div style={{ fontWeight: 'bold', fontSize: '1.2rem', color: 'var(--primary)' }}>EmpPortal</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <User size={18} />
          <span>{user.email} <span className="badge">{user.role}</span></span>
        </div>
        <button onClick={logout} className="btn btn-danger" style={{ padding: '0.5rem 1rem' }}>
          <LogOut size={16} /> Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;