import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CatalogProvider } from './context/CatalogContext';
import { BillProvider } from './context/BillContext';
import BillingTerminal from './Pages/BillingTerminal';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <CatalogProvider>
        <BillProvider>
          <Routes>
            <Route path="/" element={<BillingTerminal />} />
            {/* You can add /history or /manage-items routes here */}
          </Routes>
        </BillProvider>
      </CatalogProvider>
    </BrowserRouter>
  );
}

export default App;