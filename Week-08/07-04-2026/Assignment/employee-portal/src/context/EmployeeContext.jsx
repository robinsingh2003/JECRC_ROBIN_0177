import React, { createContext, useReducer } from 'react';
import { employeeReducer, initialState } from '../reducers/employeeReducer';

export const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(employeeReducer, initialState);

  return (
    <EmployeeContext.Provider value={{ state, dispatch }}>
      {children}
    </EmployeeContext.Provider>
  );
};