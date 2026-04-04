import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useEmployees } from '../context/EmployeeContext';
import { Plus, Edit, Trash2, Save, X } from 'lucide-react';

const Dashboard = () => {
  const { user } = useAuth();
  const { employees, addEmployee, updateEmployee, deleteEmployee } = useEmployees();

  // Task 3: Edit State
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', role: '', dept: '' });

  // Task 4: Filter data (Admin sees all, Employee sees self)
  const filteredData = user.role === 'Admin' 
    ? employees 
    : employees.filter(e => e.email === user.email);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      updateEmployee(editId, formData);
      setEditId(null);
    } else {
      addEmployee(formData);
    }
    setFormData({ name: '', email: '', role: '', dept: '' });
  };

  const startEdit = (emp) => {
    setEditId(emp.id);
    setFormData(emp);
  };

  return (
    <div className="container">
      <header style={{ marginBottom: '2rem' }}>
        <h1>Welcome, {user.role === 'Admin' ? 'Administrator' : 'Employee'}</h1>
        <p style={{ color: 'var(--text-muted)' }}>Manage and view internal employee records.</p>
      </header>

      {/* Task 1 & 2: Admin CRUD Form */}
      {user.role === 'Admin' && (
        <div className="card">
          <h3 style={{ marginTop: 0 }}>{editId ? 'Edit Employee' : 'Create New Record'}</h3>
          <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '1rem', alignItems: 'flex-end' }}>
            <input placeholder="Name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} required />
            <input placeholder="Email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} required />
            <input placeholder="Role" value={formData.role} onChange={e => setFormData({...formData, role: e.target.value})} required />
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button type="submit" className="btn btn-primary">
                {editId ? <Save size={18}/> : <Plus size={18}/>} {editId ? 'Update' : 'Add'}
              </button>
              {editId && <button type="button" onClick={() => setEditId(null)} className="btn btn-icon"><X/></button>}
            </div>
          </form>
        </div>
      )}

      {/* Task 4: Data Table */}
      <div className="card" style={{ padding: 0 }}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Position</th>
              {user.role === 'Admin' && <th style={{ textAlign: 'right' }}>Actions</th>}
            </tr>
          </thead>
          <tbody>
            {filteredData.map(emp => (
              <tr key={emp.id}>
                <td style={{ fontWeight: 600 }}>{emp.name}</td>
                <td>{emp.email}</td>
                <td>{emp.role}</td>
                {user.role === 'Admin' && (
                  <td style={{ textAlign: 'right' }}>
                    <button onClick={() => startEdit(emp)} className="btn-icon"><Edit size={18}/></button>
                    <button onClick={() => deleteEmployee(emp.id)} className="btn-icon" style={{ color: 'var(--danger)' }}><Trash2 size={18}/></button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;