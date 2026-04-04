import { useAuth } from '../../context/AuthContext';
import { useEmployees } from '../../context/EmployeeContext';
import { User, Mail, Briefcase, Building } from 'lucide-react';

const Profile = () => {
  const { user } = useAuth();
  const { employees } = useEmployees();

  // Find the detailed record for the logged-in user
  const myData = employees.find(emp => emp.email === user.email);

  if (!myData) {
    return <div className="card">No profile data found for this account.</div>;
  }

  return (
    <div className="profile-container">
      <div className="card">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
          <div style={{ 
            width: '80px', height: '80px', borderRadius: '50%', 
            background: 'var(--primary)', color: 'white', 
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '2rem', fontWeight: 'bold' 
          }}>
            {myData.name.charAt(0)}
          </div>
          <div>
            <h2 style={{ margin: 0 }}>{myData.name}</h2>
            <p style={{ color: 'var(--text-muted)', margin: 0 }}>{myData.role}</p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div className="info-item">
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase' }}>
              <Mail size={14}/> Email Address
            </label>
            <p style={{ marginTop: '0.5rem', fontWeight: 500 }}>{myData.email}</p>
          </div>
          
          <div className="info-item">
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase' }}>
              <Briefcase size={14}/> Designation
            </label>
            <p style={{ marginTop: '0.5rem', fontWeight: 500 }}>{myData.role}</p>
          </div>

          <div className="info-item">
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase' }}>
              <Building size={14}/> Department
            </label>
            <p style={{ marginTop: '0.5rem', fontWeight: 500 }}>{myData.dept || 'General Operations'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;