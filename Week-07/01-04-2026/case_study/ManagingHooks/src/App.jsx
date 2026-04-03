// import React, { useState } from 'react';

// function App() {
//   const [count, setCount] = useState(0);
//   const increment = () =>{ setCount(prev => prev + 1)};
// const incrementbytwo = () =>{ setCount(prev => prev + 2)};
// const resetcount = () =>{ setCount(0)};
// console.log("Component rendered");
// // Lazy initialization of state(runs only once)
// const [data,setData] = useState(() => {
//   console.log("Expensive computation running .....");
//   let result = 0;
//   for (let i = 0; i < 1000000000; i++) {
//     result += i;
//   }
//   return result%1000;
// });
// // Update without re-running expensive logic
// const recalculateData = () => {
//   setData(prev => {
//     console.log("Recalculating data without expensive computation...");
//     return prev + 100; // Just an example of updating data
//   });
// };

//   return (
//     <div style={styles.container}>
//       <h1>Lazy initialization Demo</h1>
//       <h2>Computed Value: {data}</h2>
//       <button style={styles.button} onClick={recalculateData}>
//         Recalculate Data
//       </button>
//       <p style={styles.info}>
//         This uses lazy initialization to avoid expensive recalculation on every render.
//       </p>
//       <p>open console to check</p>
//       <h1>Counter App/Function update Demo</h1>
//       <h2>{count}</h2>

//       <button style={styles.button} onClick={() => setCount(count + 1)}>
//         Increment
//       </button>

//       <button style={styles.button} onClick={() => setCount(count - 1)}>
//         Decrement
//       </button>
//       <button style={styles.button} onClick={incrementbytwo}>
//   Increment by 2
// </button>

// <button style={styles.button} onClick={resetcount}>
//   Reset
// </button>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: '100vh',
//   },
//   button: {
//     padding: '10px 20px',
//     margin: '10px',
//     fontSize: '16px',
//     cursor: 'pointer',
//   },
//    info: {
//     marginTop: '10px',
//     fontStyle: 'italic',
//   }
// };

// export default App;
// import React, { useState } from 'react';

// const App = () => {
//   // 1. Initialized with empty strings instead of spaces for cleaner UI
//   const [user, setUser] = useState({ name: "", age: "" });

//   // 2. Dynamic update functions
//   const updateName = (name) => {
//     setUser((prev) => ({ ...prev, name: name }));
//   };

//   const updateAge = (age) => {
//     setUser((prev) => ({ ...prev, age: age }));
//   };

//   const resetUser = () => {
//     setUser({ name: "", age: "" });
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.card}>
//         <h1 style={styles.title}>User Profile Editor</h1>
        
//         <div style={styles.inputGroup}>
//           <label style={styles.label}>Name</label>
//           <input
//             style={styles.input}
//             type="text"
//             placeholder="e.g. John Doe"
//             value={user.name}
//             onChange={(e) => updateName(e.target.value)}
//           />
//         </div>

//         <div style={styles.inputGroup}>
//           <label style={styles.label}>Age</label>
//           <input
//             style={styles.input}
//             type="number"
//             placeholder="e.g. 25"
//             value={user.age}
//             onChange={(e) => updateAge(e.target.value)}
//           />
//         </div>

//         <button style={styles.resetBtn} onClick={resetUser}>
//           Reset Profile
//         </button>

//         <hr style={styles.divider} />

//         <div style={styles.displayArea}>
//           <p><strong>Current Name:</strong> {user.name || "---"}</p>
//           <p><strong>Current Age:</strong> {user.age || "---"}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Simple inline styles for presentation
// const styles = {
//   container: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '100vh',
//     backgroundColor: '#f0f2f5',
//     fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
//   },
//   card: {
//     backgroundColor: '#fff',
//     padding: '2rem',
//     borderRadius: '12px',
//     boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
//     width: '350px',
//   },
//   title: {
//     fontSize: '1.5rem',
//     marginBottom: '1.5rem',
//     color: '#333',
//     textAlign: 'center',
//   },
//   inputGroup: {
//     marginBottom: '1rem',
//   },
//   label: {
//     display: 'block',
//     marginBottom: '0.5rem',
//     fontSize: '0.9rem',
//     fontWeight: 'bold',
//     color: '#555',
//   },
//   input: {
//     width: '100%',
//     padding: '10px',
//     borderRadius: '6px',
//     border: '1px solid #ddd',
//     boxSizing: 'border-box',
//   },
//   resetBtn: {
//     width: '100%',
//     padding: '10px',
//     backgroundColor: '#ff4757',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '6px',
//     cursor: 'pointer',
//     fontWeight: 'bold',
//     marginTop: '0.5rem',
//   },
//   divider: {
//     margin: '1.5rem 0',
//     border: '0',
//     borderTop: '1px solid #eee',
//   },
//   displayArea: {
//     color: '#2f3542',
//     lineHeight: '1.6',
//   }
// };

// export default App;import React, { useState } from "react";

// function App() {
//   const [items, setItems] = useState([]);

//   const addItem = () => {
//     const newItem = {
//       id: Date.now(),
//       name: "Item " + (items.length + 1),
//       created: new Date().toLocaleTimeString()
//     };
//     setItems(prev => [...prev, newItem]);
//   };

//   const addMultipleItems = () => {
//     const newItems = [
//       { id: Date.now(), name: "Batch Item 1", created: new Date().toLocaleTimeString() },
//       { id: Date.now() + 1, name: "Batch Item 2", created: new Date().toLocaleTimeString() },
//       { id: Date.now() + 2, name: "Batch Item 3", created: new Date().toLocaleTimeString() }
//     ];
//     setItems(prev => [...prev, ...newItems]);
//   };

//   const updateItem = (id) => {
//     setItems(prev =>
//       prev.map(item =>
//         item.id === id
//           ? { ...item, name: "Updated Item", updated: new Date().toLocaleTimeString() }
//           : item
//       )
//     );
//   };

//   const deleteItem = (id) => {
//     setItems(prev => prev.filter(item => item.id !== id));
//   };

//   const deleteAllItems = () => setItems([]);

//   return (
//     <div style={styles.container}>
//       <div style={styles.card}>
//         <h1 style={styles.title}>Items Manager</h1>

//         {/* Buttons */}
//         <div style={styles.buttonGroup}>
//           <button style={styles.primaryBtn} onClick={addItem}>
//             Add Item
//           </button>

//           <button style={styles.secondaryBtn} onClick={addMultipleItems}>
//             Add Multiple
//           </button>

//           <button style={styles.dangerBtn} onClick={deleteAllItems}>
//             Delete All
//           </button>
//         </div>

//         {/* List */}
//         {items.length === 0 ? (
//           <p style={styles.empty}>No items added yet</p>
//         ) : (
//           <ul style={styles.list}>
//             {items.map(item => (
//               <li key={item.id} style={styles.listItem}>
//                 <div>
//                   <strong>{item.name}</strong>
//                   <div style={styles.time}>Created: {item.created}</div>

//                   {item.updated && (
//                     <div style={styles.updated}>
//                       Updated: {item.updated}
//                     </div>
//                   )}
//                 </div>

//                 <div>
//                   <button
//                     style={styles.updateBtn}
//                     onClick={() => updateItem(item.id)}
//                   >
//                     Update
//                   </button>

//                   <button
//                     style={styles.deleteBtn}
//                     onClick={() => deleteItem(item.id)}
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     height: "100vh",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#f4f6f8"
//   },
//   card: {
//     background: "#fff",
//     padding: "30px",
//     borderRadius: "12px",
//     boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
//     width: "400px"
//   },
//   title: {
//     textAlign: "center",
//     marginBottom: "20px"
//   },
//   buttonGroup: {
//     display: "flex",
//     justifyContent: "space-between",
//     marginBottom: "20px"
//   },
//   primaryBtn: {
//     backgroundColor: "#4CAF50",
//     color: "white",
//     border: "none",
//     padding: "8px 12px",
//     borderRadius: "6px",
//     cursor: "pointer"
//   },
//   secondaryBtn: {
//     backgroundColor: "#2196F3",
//     color: "white",
//     border: "none",
//     padding: "8px 12px",
//     borderRadius: "6px",
//     cursor: "pointer"
//   },
//   dangerBtn: {
//     backgroundColor: "#f44336",
//     color: "white",
//     border: "none",
//     padding: "8px 12px",
//     borderRadius: "6px",
//     cursor: "pointer"
//   },
//   list: {
//     listStyle: "none",
//     padding: 0
//   },
//   listItem: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     padding: "10px",
//     borderBottom: "1px solid #eee"
//   },
//   time: {
//     fontSize: "12px",
//     color: "#666"
//   },
//   updated: {
//     fontSize: "12px",
//     color: "green"
//   },
//   updateBtn: {
//     marginRight: "5px",
//     backgroundColor: "#ff9800",
//     color: "white",
//     border: "none",
//     padding: "5px 8px",
//     borderRadius: "4px",
//     cursor: "pointer"
//   },
//   deleteBtn: {
//     backgroundColor: "#e91e63",
//     color: "white",
//     border: "none",
//     padding: "5px 8px",
//     borderRadius: "4px",
//     cursor: "pointer"
//   },
//   empty: {
//     textAlign: "center",
//     color: "#999"
//   }
// };

// export default App;
import React, { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  const addItem = () => {
    const newItem = {
      id: Date.now(),
      name: "Item " + (items.length + 1),
      created: new Date().toLocaleTimeString()
    };
    setItems(prev => [...prev, newItem]);
  };

  const addMultipleItems = () => {
    const newItems = [
      { id: Date.now(), name: "Batch Item 1", created: new Date().toLocaleTimeString() },
      { id: Date.now() + 1, name: "Batch Item 2", created: new Date().toLocaleTimeString() },
      { id: Date.now() + 2, name: "Batch Item 3", created: new Date().toLocaleTimeString() }
    ];
    setItems(prev => [...prev, ...newItems]);
  };

  const updateItem = (id) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, name: "Updated Item", updated: new Date().toLocaleTimeString() }
          : item
      )
    );
  };

  const deleteItem = (id) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const deleteAllItems = () => setItems([]);

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Items Manager</h1>

        {/* Buttons */}
        <div style={styles.buttonGroup}>
          <button style={styles.primaryBtn} onClick={addItem}>
            Add Item
          </button>

          <button style={styles.secondaryBtn} onClick={addMultipleItems}>
            Add Multiple
          </button>

          <button style={styles.dangerBtn} onClick={deleteAllItems}>
            Delete All
          </button>
        </div>

        {/* List */}
        {items.length === 0 ? (
          <p style={styles.empty}>No items added yet</p>
        ) : (
          <ul style={styles.list}>
            {items.map(item => (
              <li key={item.id} style={styles.listItem}>
                <div>
                  <strong>{item.name}</strong>
                  <div style={styles.time}>Created: {item.created}</div>

                  {item.updated && (
                    <div style={styles.updated}>
                      Updated: {item.updated}
                    </div>
                  )}
                </div>

                <div>
                  <button
                    style={styles.updateBtn}
                    onClick={() => updateItem(item.id)}
                  >
                    Update
                  </button>

                  <button
                    style={styles.deleteBtn}
                    onClick={() => deleteItem(item.id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f6f8"
  },
  card: {
    background: "#fff",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    width: "400px"
  },
  title: {
    textAlign: "center",
    marginBottom: "20px"
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px"
  },
  primaryBtn: {
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    padding: "8px 12px",
    borderRadius: "6px",
    cursor: "pointer"
  },
  secondaryBtn: {
    backgroundColor: "#2196F3",
    color: "white",
    border: "none",
    padding: "8px 12px",
    borderRadius: "6px",
    cursor: "pointer"
  },
  dangerBtn: {
    backgroundColor: "#f44336",
    color: "white",
    border: "none",
    padding: "8px 12px",
    borderRadius: "6px",
    cursor: "pointer"
  },
  list: {
    listStyle: "none",
    padding: 0
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    borderBottom: "1px solid #eee"
  },
  time: {
    fontSize: "12px",
    color: "#666"
  },
  updated: {
    fontSize: "12px",
    color: "green"
  },
  updateBtn: {
    marginRight: "5px",
    backgroundColor: "#ff9800",
    color: "white",
    border: "none",
    padding: "5px 8px",
    borderRadius: "4px",
    cursor: "pointer"
  },
  deleteBtn: {
    backgroundColor: "#e91e63",
    color: "white",
    border: "none",
    padding: "5px 8px",
    borderRadius: "4px",
    cursor: "pointer"
  },
  empty: {
    textAlign: "center",
    color: "#999"
  }
};

export default App;