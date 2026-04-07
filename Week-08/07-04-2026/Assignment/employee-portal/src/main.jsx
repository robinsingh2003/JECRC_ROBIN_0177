import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AuthProvider } from './context/AuthContext'
import { ThemeProvider } from './context/ThemeContext'
import { EmployeeProvider } from './context/EmployeeContext'
// --- ADD THESE IMPORTS RIGHT HERE ---
import './assets/styles/global.css'
import './assets/styles/layout.css'
import './assets/styles/components.css'
// ------------------------------------

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <AuthProvider>
      <EmployeeProvider>
        <App />
      </EmployeeProvider>
    </AuthProvider>
  </ThemeProvider>
)