import { useState } from 'react';
import { useEmployees } from '../../context/EmployeeContext';
import { Trash2, Edit } from 'lucide-react';

const EmployeeList = () => {
  const { employees, deleteEmployee, addEmployee, updateEmployee } = useEmployees();
  const [form, setForm] = useState({ name: '', email: '', role: '', department: '' });
  const [isEditing, setIsEditing] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      updateEmployee(isEditing, form);
      setIsEditing(null);
    } else {
      addEmployee(form);
    }
    setForm({ name: '', email: '', role: '', department: '' });
  };

  return (
    <div>
      <h3>Manage Employees</h3>
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <input placeholder="Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} required />
        <input placeholder="Email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} required />
        <button type="submit">{isEditing ? 'Update' : 'Add'} Employee</button>
      </form>

      <table border="1" width="100%">
        <thead>
          <tr><th>Name</th><th>Email</th><th>Actions</th></tr>
        </thead>
        <tbody>
          {employees.map(emp => (
            <tr key={emp.id}>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>
                <button onClick={() => { setForm(emp); setIsEditing(emp.id); }}><Edit size={14}/></button>
                <button onClick={() => deleteEmployee(emp.id)}><Trash2 size={14}/></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;