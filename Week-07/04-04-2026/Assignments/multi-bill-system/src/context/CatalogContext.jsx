import { createContext, useContext, useState, useEffect } from 'react';

const CatalogContext = createContext();

export const CatalogProvider = ({ children }) => {
  const [catalogs, setCatalogs] = useState({
    entrance: [
      { id: 'e1', name: 'Adult Ticket', price: 50, type: 'entrance', description: 'Full access to all zones' },
      { id: 'e2', name: 'Child Ticket', price: 25, type: 'entrance', description: 'For kids under 12 years' },
      { id: 'e3', name: 'VIP Pass', price: 150, type: 'entrance', description: 'Priority entry + VIP lounge' },
      { id: 'e4', name: 'Family Pack', price: 120, type: 'entrance', description: '2 adults + 2 children bundle' },
      { id: 'e5', name: 'Senior Ticket', price: 35, type: 'entrance', description: 'Discount for 60+ visitors' }
    ],
    donation: [
      { id: 'd1', name: 'Supporter Donation', price: 10, type: 'donation', description: 'Help keep our programs running' },
      { id: 'd2', name: 'Sponsor Donation', price: 50, type: 'donation', description: 'Support our community events' },
      { id: 'd3', name: 'Premium Gift', price: 100, type: 'donation', description: 'Includes thank-you badge' }
    ],
    selling: [
      { id: 's1', name: 'Official T-Shirt', price: 22, type: 'selling', description: 'Comfy cotton, unisex fit' },
      { id: 's2', name: 'Artisan Coffee', price: 6, type: 'selling', description: 'Fresh roast, 250g bag' },
      { id: 's3', name: 'Event Cap', price: 18, type: 'selling', description: 'Premium embroidered cap' },
      { id: 's4', name: 'Souvenir Mug', price: 14, type: 'selling', description: 'Ceramic mug with logo' },
      { id: 's5', name: 'Snack Pack', price: 12, type: 'selling', description: 'Chips + cookies bundle' },
      { id: 's6', name: 'Water Bottle', price: 10, type: 'selling', description: 'Reusable stainless steel' }
    ]
  });

  const addItemToCatalog = (category, item) => {
    setCatalogs(prev => ({
      ...prev,
      [category]: [...prev[category], { ...item, id: Date.now() }]
    }));
  };

  return (
    <CatalogContext.Provider value={{ catalogs, addItemToCatalog }}>
      {children}
    </CatalogContext.Provider>
  );
};

export const useCatalogs = () => useContext(CatalogContext);