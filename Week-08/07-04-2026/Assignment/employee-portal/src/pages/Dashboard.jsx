import React, { useContext, useState } from 'react';
import { EmployeeContext } from '../context/EmployeeContext';
import { ThemeContext } from '../context/ThemeContext';
import { Users, UserPlus, Trash2, Edit3, Briefcase, Activity } from 'lucide-react';
import EmployeeModal from '../components/EmployeeModal';

const Dashboard = () => {
  const { state, dispatch } = useContext(EmployeeContext);
  const { isDark } = useContext(ThemeContext);
  
  // Local state for Modal handling
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleEdit = (emp) => {
    setSelectedEmployee(emp);
    setIsModalOpen(true);
  };

  const handleAdd = () => {
    setSelectedEmployee(null);
    setIsModalOpen(true);
  };

  return (
    <div className="dashboard-wrapper">
      <header className="page-header">
        <div>
          <h1>Portal Overview</h1>
          <p className="subtitle">Manage your organization's workforce</p>
        </div>
        <button className="btn-primary" onClick={handleAdd}>
          <UserPlus size={18} />
          <span>Add Employee</span>
        </button>
      </header>

      {/* Analytics Grid */}
      <div className="stats-container">
        <div className="stat-card">
          <div className="icon-box blue"><Users size={20} /></div>
          <div>
            <p className="label">Total Staff</p>
            <h2 className="value">{state.length}</h2>
          </div>
        </div>
        <div className="stat-card">
          <div className="icon-box purple"><Briefcase size={20} /></div>
          <div>
            <p className="label">Departments</p>
            <h2 className="value">4 Active</h2>
          </div>
        </div>
        <div className="stat-card">
          <div className="icon-box green"><Activity size={20} /></div>
          <div>
            <p className="label">System Status</p>
            <h2 className="value">Optimal</h2>
          </div>
        </div>
      </div>

      {/* Employee Table */}
      <section className="table-container">
        <table className="employee-table">
          <thead>
            <tr>
              <th>Employee Name</th>
              <th>Role</th>
              <th>Email Address</th>
              <th style={{ textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {state.map((emp) => (
              <tr key={emp.id}>
                <td className="emp-name">{emp.name}</td>
                <td><span className="badge">{emp.role}</span></td>
                <td>{emp.email}</td>
                <td className="actions">
                  <button className="btn-icon" onClick={() => handleEdit(emp)}>
                    <Edit3 size={16} />
                  </button>
                  <button 
                    className="btn-icon delete"
                    onClick={() => dispatch({ type: 'DELETE', payload: emp.id })}
                  >
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* The Modal Component */}
      <EmployeeModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        employeeToEdit={selectedEmployee} 
      />
    </div>
  );
};

// CRITICAL FIX: Add this line!
export default Dashboard;