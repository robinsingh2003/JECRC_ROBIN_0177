import React, { useState, useContext } from 'react';
import { EmployeeContext } from '../context/EmployeeContext';

const EmployeeModal = ({ isOpen, onClose }) => {
  const { addEmployee } = useContext(EmployeeContext);
  const [formData, setFormData] = useState({ name: '', role: '', email: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Call the context function we created in Step 1
    await addEmployee(formData);
    
    onClose(); // Close modal after saving
    setFormData({ name: '', role: '', email: '' }); // Clear form
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <form className="modal-content" onSubmit={handleSubmit}>
        <h2>Add New Employee</h2>
        <input 
          placeholder="Name" 
          onChange={(e) => setFormData({...formData, name: e.target.value})} 
          required 
        />
        <input 
          placeholder="Role" 
          onChange={(e) => setFormData({...formData, role: e.target.value})} 
          required 
        />
        <div className="modal-actions">
          <button type="button" onClick={onClose}>Cancel</button>
          <button type="submit" className="btn-primary">Save to Database</button>
        </div>
      </form>
    </div>
  );
};
export default EmployeeModal;