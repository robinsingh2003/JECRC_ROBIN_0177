import React, { useContext, useState } from 'react';
import { AuthContext } from './context/AuthContext';

// Pages
import Dashboard from './Pages/Dashboard';
import Settings from './pages/Settings';
import Analytics from './pages/Analytics';
import Login from './Pages/Login';

// Componentsnp
import Sidebar from './components/Sidebar';

function App() {
  const { isAuthenticated } = useContext(AuthContext);
  
  // State to track which page is currently visible
  const [activeView, setActiveView] = useState('dashboard'); 

  // 1. Guard Clause: Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Login />;
  }

  // 2. Helper function to render the correct view
  // This is much cleaner than nested ternary operators
  const renderView = () => {
    switch (activeView) {
      case 'dashboard':
        return <Dashboard />;
      case 'analytics':
        return <Analytics />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="app-layout">
      {/* Sidebar handles the navigation triggers */}
      <Sidebar activeView={activeView} setActiveView={setActiveView} />
      
      <main className="content-area">
        {/* Dynamic View Injection */}
        {renderView()}
      </main>
    </div>
  );
}

export default App;