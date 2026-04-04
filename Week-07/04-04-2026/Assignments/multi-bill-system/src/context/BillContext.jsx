import { createContext, useContext, useState } from 'react';

const BillContext = createContext();

export const BillProvider = ({ children }) => {
  const [activeItems, setActiveItems] = useState([]);
  const [discount, setDiscount] = useState(0);
  const taxRate = 0.12; // 12% Tax

  const addToBill = (product) => {
    setActiveItems(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        return prev.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item);
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const updateQty = (id, newQty) => {
    if (newQty < 1) return removeItem(id);
    setActiveItems(prev => prev.map(item => item.id === id ? { ...item, qty: newQty } : item));
  };

  const removeItem = (id) => setActiveItems(prev => prev.filter(item => item.id !== id));

  const calculateSubtotal = () => activeItems.reduce((acc, item) => acc + (item.price * item.qty), 0);
  
  const clearBill = () => { setActiveItems([]); setDiscount(0); };

  return (
    <BillContext.Provider value={{ 
      activeItems, addToBill, updateQty, removeItem, 
      discount, setDiscount, taxRate, calculateSubtotal, clearBill 
    }}>
      {children}
    </BillContext.Provider>
  );
};

export const useBill = () => useContext(BillContext);