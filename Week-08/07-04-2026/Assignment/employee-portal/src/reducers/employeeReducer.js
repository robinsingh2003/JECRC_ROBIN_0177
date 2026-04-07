export const initialState = [
  { id: 1, name: 'Alice Freeman', role: 'Senior Dev', email: 'alice@company.com' },
  { id: 2, name: 'Bob Vance', role: 'Product Manager', email: 'bob@company.com' }
];

export const employeeReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, { ...action.payload, id: Date.now() }];
    case 'DELETE':
      return state.filter(emp => emp.id !== action.payload);
    case 'UPDATE':
      return state.map(emp => emp.id === action.payload.id ? action.payload : emp);
    default:
      return state;
  }
};