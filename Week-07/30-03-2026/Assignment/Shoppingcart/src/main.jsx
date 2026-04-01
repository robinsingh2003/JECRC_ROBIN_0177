import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// React Concept: Entry Point
// This is the entry point of the React application.
// ReactDOM.createRoot() creates a root for rendering the React tree.
// StrictMode helps detect potential problems in the app during development.
// The App component is the root component of our application.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
