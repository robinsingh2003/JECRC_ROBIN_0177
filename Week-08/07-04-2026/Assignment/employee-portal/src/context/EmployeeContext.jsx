import React, { createContext, useReducer, useEffect } from 'react';
// IMPORTANT: Make sure you import your reducer from the correct path!
import { employeeReducer } from './employeeReducer'; 

export const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  // Use empty array [] as initial state
  const [state, dispatch] = useReducer(employeeReducer, []);

  // 1. LOAD: Fetch from port 5262
  useEffect(() => {
    fetch('http://localhost:5262/api/employees') // Updated Port
      .then(res => {
        if(!res.ok) throw new Error("API not responding");
        return res.json();
      })
      .then(data => dispatch({ type: 'SET_EMPLOYEES', payload: data }))
      .catch(err => console.error("Database connection failed:", err));
  }, []);

  // 2. ADD: Post to port 5262
  const addEmployee = async (newEmployee) => {
    try {
      const response = await fetch('http://localhost:5262/api/employees', { // Updated Port
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newEmployee),
      });

      if (response.ok) {
        const savedEmployee = await response.json();
        dispatch({ type: 'ADD_EMPLOYEE', payload: savedEmployee });
      }
    } catch (error) {
      console.error("Error adding employee:", error);
    }
  };

  return (
    <EmployeeContext.Provider value={{ state, addEmployee }}>
      {children}
    </EmployeeContext.Provider>
  );
};