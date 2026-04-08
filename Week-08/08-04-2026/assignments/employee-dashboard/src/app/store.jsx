// import { configureStore } from "@reduxjs/toolkit";
// import employeeReducer from "../features/employees/employeeSlice";
// import authReducer from "../features/auth/authSlice";
// import uiReducer from "../features/ui/uiSlice";
// import logger from "redux-logger";

// export const store = configureStore({
//   reducer: {
//     employees: employeeReducer,
//     auth: authReducer,
//     ui: uiReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(logger),
// });


import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "../features/employees/employeeSlice";
import authReducer from "../features/auth/authSlice";
import uiReducer from "../features/ui/uiSlice";
import { createLogger } from "redux-logger";

const logger = createLogger();

export const store = configureStore({
  reducer: {
    employees: employeeReducer,
    auth: authReducer,
    ui: uiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger),
});