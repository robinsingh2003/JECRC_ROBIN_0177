export const employeeReducer = (state, action) => {
  switch (action.type) {
    case 'SET_EMPLOYEES':
      return action.payload; // Replaces empty array with MySQL data
    case 'ADD_EMPLOYEE':
      return [...state, action.payload];
    // ... other cases
    default:
      return state;
  }
};