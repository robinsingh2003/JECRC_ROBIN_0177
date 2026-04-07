import React, { useState, useEffect, useContext } from 'react';
import { X } from 'lucide-react';
import { EmployeeContext } from '../context/EmployeeContext';

const EmployeeModal = ({ isOpen, onClose, employeeToEdit }) => {
  const { dispatch } = useContext(EmployeeContext);
  const [formData, setFormData] = useState({ name: '', role: '', email: '' });

  // Populates form if we are editing an existing employee
  useEffect(() => {
    if (employeeToEdit) {
      setFormData(employeeToEdit);
    } else {
      setFormData({ name: '', role: '', email: '' });
    }
  }, [employeeToEdit, isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (employeeToEdit) {
      dispatch({ type: 'UPDATE', payload: formData });
    } else {
      dispatch({ type: 'ADD', payload: formData });
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h3>{employeeToEdit ? 'Update Employee' : 'Add New Employee'}</h3>
          <button className="close-btn" onClick={onClose}><X size={20} /></button>
        </div>
        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-group">
            <label>Full Name</label>
            <input 
              type="text" 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required 
            />
          </div>
          <div className="form-group">
            <label>Role</label>
            <select 
              value={formData.role}
              onChange={(e) => setFormData({...formData, role: e.target.value})}
            >
              <option value="Engineer">Engineer</option>
              <option value="Designer">Designer</option>
              <option value="Manager">Manager</option>
            </select>
          </div>
          <div className="form-group">
            <label>Email</label>
            <input 
              type="email" 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required 
            />
          </div>
          <div className="modal-actions">
            <button type="button" className="btn-secondary" onClick={onClose}>Cancel</button>
            <button type="submit" className="btn-primary">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeModal;