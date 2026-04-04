import { createContext, useContext, useState } from 'react';

const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([
    { id: 101, name: 'John User', email: 'user@company.com', role: 'Developer', dept: 'IT' },
    { id: 102, name: 'Sarah Jenkins', email: 'sarah@company.com', role: 'Manager', dept: 'HR' },
    { id: 103, name: 'Admin Account', email: 'admin@company.com', role: 'Admin', dept: 'HQ' },
  ]);

  const addEmployee = (emp) => setEmployees([...employees, { ...emp, id: Date.now() }]);
  
  const updateEmployee = (id, updated) => {
    setEmployees(employees.map(e => e.id === id ? { ...updated, id } : e));
  };

  const deleteEmployee = (id) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      setEmployees(employees.filter(e => e.id !== id));
    }
  };

  return (
    <EmployeeContext.Provider value={{ employees, addEmployee, updateEmployee, deleteEmployee }}>
      {children}
    </EmployeeContext.Provider>
  );
};

export const useEmployees = () => useContext(EmployeeContext);