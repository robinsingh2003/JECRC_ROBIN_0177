// import React, { useState, useEffect } from "react";

// function App() {
//   const [count, setCount] = useState(0);
//   const [text, setName] = useState("");

//   // 🔹 Effect 1: Runs after EVERY render
//   useEffect(() => {
//     console.log("Effect 1: Runs after EVERY render");
//   });

//   return (
//     <div style={styles.container}>
//       <h1>useEffect - Every Render</h1>

//       {/* Counter */}
//       <h2>Count: {count}</h2>
//       <button style={styles.btn} onClick={() => setCount(count + 1)}>
//         Increment Count
//       </button>

//       {/* Input field */}
//       <input
//         type="text"
//         placeholder="Enter text..."
//         value={text}
//         onChange={(e) => setName(e.target.value)}
//         style={styles.input}
//       />

//       <p style={styles.info}>
//         This effect runs after every render.
//       </p>

//       <p style={styles.note}>
//         Note: This effect will run after every render, which might not be efficient.
//       </p>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     height: "100vh",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "#f4f6f8"
//   },
//   btn: {
//     padding: "10px 20px",
//     margin: "10px",
//     fontSize: "16px",
//     cursor: "pointer",
//     borderRadius: "6px",
//     border: "none",
//     backgroundColor: "#4CAF50",
//     color: "white"
//   },
//   input: {
//     padding: "10px",
//     margin: "10px",
//     fontSize: "16px",
//     borderRadius: "6px",
//     border: "1px solid #ccc",
//     width: "200px"
//   },
//   info: {
//     marginTop: "10px",
//     color: "#333"
//   },
//   note: {
//     marginTop: "5px",
//     color: "#777",
//     fontSize: "14px"
//   }
// };

// export default App;
// import React, { useState, useEffect } from "react";

// function App() {
//   const [count, setCount] = useState(0);
//   const [text, setText] = useState("");
//   const [logs, setLogs] = useState([]);

//   // 🔹 Effect 1: Runs after EVERY render
//   useEffect(() => {
//     addLog("🔁 Effect 1: Runs after EVERY render");
//   });

//   // 🔹 Effect 2: Runs ONLY once (on mount)
//   useEffect(() => {
//     addLog("🟢 Effect 2: Runs ONLY once (component mounted)");
//   }, []);

//   // 🔹 Effect 3: Runs when count changes
//   useEffect(() => {
//     addLog("🔵 Effect 3: Runs when COUNT changes");
//   }, [count]);

//   // 🔹 Effect 4: Runs when text changes
//   useEffect(() => {
//     addLog("🟡 Effect 4: Runs when TEXT changes");
//   }, [text]);

//   const addLog = (message) => {
//     setLogs(prev => [message, ...prev.slice(0, 5)]);
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.card}>
//         <h1>🧠 useEffect Learning Dashboard</h1>

//         {/* Counter Section */}
//         <div style={styles.section}>
//           <h2>🔢 Counter (Triggers Effect 1 & 3)</h2>
//           <p>Count: <b>{count}</b></p>
//           <button style={styles.btn} onClick={() => setCount(count + 1)}>
//             Increment Count
//           </button>
//         </div>

//         {/* Input Section */}
//         <div style={styles.section}>
//           <h2>⌨️ Input (Triggers Effect 1 & 4)</h2>
//           <input
//             type="text"
//             placeholder="Type something..."
//             value={text}
//             onChange={(e) => setText(e.target.value)}
//             style={styles.input}
//           />
//         </div>

//         {/* Logs Section */}
//         <div style={styles.section}>
//           <h2>📜 Effect Logs (What just happened?)</h2>
//           <ul style={styles.logBox}>
//             {logs.map((log, index) => (
//               <li key={index}>{log}</li>
//             ))}
//           </ul>
//         </div>

//         {/* Explanation */}
//         <div style={styles.section}>
//           <h2>📘 Concepts</h2>
//           <ul>
//             <li>🔁 No dependency → runs every render</li>
//             <li>🟢 [] → runs only once (on mount)</li>
//             <li>🔵 [count] → runs when count changes</li>
//             <li>🟡 [text] → runs when text changes</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     minHeight: "100vh",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     background: "#f0f2f5"
//   },
//   card: {
//     background: "#fff",
//     padding: "30px",
//     borderRadius: "12px",
//     width: "500px",
//     boxShadow: "0 5px 20px rgba(0,0,0,0.1)"
//   },
//   section: {
//     marginBottom: "20px"
//   },
//   btn: {
//     padding: "10px 15px",
//     background: "#4CAF50",
//     color: "#fff",
//     border: "none",
//     borderRadius: "6px",
//     cursor: "pointer"
//   },
//   input: {
//     padding: "10px",
//     width: "100%",
//     borderRadius: "6px",
//     border: "1px solid #ccc"
//   },
//   logBox: {
//     maxHeight: "120px",
//     overflowY: "auto",
//     background: "#f9f9f9",
//     padding: "10px",
//     borderRadius: "6px",
//     fontSize: "14px"
//   }
// };

// export default App;
// import React, { useState, useEffect } from "react";

// function App() {
//   const [count, setCount] = useState(0);
//   const [text, setText] = useState("");

//   // 🔁 Runs after EVERY render
//   useEffect(() => {
//     console.log("Effect 1: Every render");
//   });

//   // 🟢 Runs only once
//   useEffect(() => {
//     console.log("Effect 2: Only once (on mount)");
//   }, []);

//   // 🔵 Runs when count changes
//   useEffect(() => {
//     console.log("Effect 3: Count changed");
//   }, [count]);

//   // 🟡 Runs when text changes
//   useEffect(() => {
//     console.log("Effect 4: Text changed");
//   }, [text]);

//   return (
//     <div style={styles.container}>
//       <h1>useEffect Demo</h1>

//       {/* Counter */}
//       <div style={styles.box}>
//         <h3>Counter</h3>
//         <p>Count: {count}</p>
//         <button onClick={() => setCount(count + 1)}>
//           Increment
//         </button>
//       </div>

//       {/* Input */}
//       <div style={styles.box}>
//         <h3>Input</h3>
//         <input
//           type="text"
//           placeholder="Type something..."
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//         />
//       </div>

//       {/* Explanation */}
//       <div style={styles.box}>
//         <h3>What to check (Open Console)</h3>
//         <ul>
//           <li>🔁 Runs every render</li>
//           <li>🟢 Runs once (on load)</li>
//           <li>🔵 Runs when count changes</li>
//           <li>🟡 Runs when text changes</li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     textAlign: "center",
//     marginTop: "50px"
//   },
//   box: {
//     margin: "20px auto",
//     padding: "20px",
//     width: "300px",
//     border: "1px solid #ccc",
//     borderRadius: "8px"
//   }
// };

// export default App;
import React, { useState, useEffect } from "react";

function App() {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);

  // 🟢 Load data (Component Mount) 
  useEffect(() => {
    const savedName = localStorage.getItem("name");
    const savedCount = localStorage.getItem("count");

    if (savedName) setName(savedName);
    if (savedCount) setCount(Number(savedCount));
  }, []);

  // 🔵 Save data when name changes
  useEffect(() => {
    localStorage.setItem("name", name);
  }, [name]);

  // 🔵 Save data when count changes
  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  // 🔴 Reset everything
  const handleReset = () => {
    setName("");
    setCount(0);
    localStorage.clear();
  };

  return (
    <div style={styles.container}>
      <h1>LocalStorage Demo</h1>

      {/* Name Input */}
      <input
        type="text"
        placeholder="Enter name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={styles.input}
      />

      {/* Counter */}
      <h2>Count: {count}</h2>
      <button style={styles.btn} onClick={() => setCount(count + 1)}>
        Increment
      </button>

      {/* Reset */}
      <button style={styles.resetBtn} onClick={handleReset}>
        Reset
      </button>

      {/* Info */}
      <p style={styles.info}>
        Data is saved in <b>localStorage</b> and restored on refresh
      </p>

      <p style={styles.note}>
        Refresh the page to test persistence
      </p>
    </div>
  );
}

// 🎨 Styling
const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial"
  },
  input: {
    padding: "10px",
    margin: "10px",
    fontSize: "16px",
    borderRadius: "6px",
    border: "1px solid #ccc"
  },
  btn: {
    padding: "10px 15px",
    margin: "10px",
    fontSize: "16px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  },
  resetBtn: {
    padding: "10px 15px",
    margin: "10px",
    fontSize: "16px",
    backgroundColor: "#f44336",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  },
  info: {
    marginTop: "15px",
    color: "#333"
  },
  note: {
    color: "#777",
    fontSize: "14px"
  }
};

export default App;
// import React, { useState, useEffect } from "react";

// function App() {

//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const [searchTerm, setSearchTerm] = useState("");
//   const [debouncedTerm, setDebouncedTerm] = useState("");

//   // ==================== EFFECT 8: Fetch Data ====================
//   useEffect(() => {
//     let isMounted = true;

//     const fetchPosts = async () => {
//       console.log("📡 Effect 8: Fetching posts");

//       setLoading(true);
//       setError(null);

//       try {
//         const response = await fetch(
//           "https://jsonplaceholder.typicode.com/posts?_limit=5"
//         );

//         if (!response.ok) throw new Error("Failed to fetch");

//         const data = await response.json();

//         if (isMounted) {
//           setPosts(data);
//           setLoading(false);
//         }

//       } catch (err) {
//         if (isMounted) {
//           setError(err.message);
//           setLoading(false);
//         }
//       }
//     };

//     fetchPosts();

//     return () => {
//       console.log("🧹 Cleanup: Cancelling data fetch");
//       isMounted = false;
//     };
//   }, []);

//   // ==================== EFFECT 9: Debounced Search ====================
//   useEffect(() => {
//     console.log(`🔍 Effect 9: Debouncing search: "${searchTerm}"`);

//     const timer = setTimeout(() => {
//       setDebouncedTerm(searchTerm);
//     }, 500);

//     return () => {
//       clearTimeout(timer);
//     };
//   }, [searchTerm]);

//   // 🔹 Filtered Posts
//   const filteredPosts = posts.filter(post =>
//     post.title.toLowerCase().includes(debouncedTerm.toLowerCase())
//   );

//   return (
//     <div style={styles.container}>
//       <h1>API + Debounced Search</h1>

//       {/* 🔹 Search */}
//       <input
//         type="text"
//         placeholder="Search posts..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         style={styles.input}
//       />

//       {/* 🔹 Status */}
//       {loading && <p>Loading...</p>}
//       {error && <p style={{ color: "red" }}>{error}</p>}

//       {/* 🔹 Posts */}
//       <div>
//         {filteredPosts.map(post => (
//           <div key={post.id} style={styles.card}>
//             <h3>{post.title}</h3>
//             <p>{post.body}</p>
//           </div>
//         ))}
//       </div>

//       <p style={styles.info}>
//         👉 API fetch with cleanup + debounced search (performance optimized)
//       </p>

//       <p style={styles.note}>
//         Open console to see logs 👀
//       </p>
//     </div>
//   );
// }

// // 🎨 Styling
// const styles = {
//   container: {
//     textAlign: "center",
//     marginTop: "40px",
//     fontFamily: "Arial"
//   },
//   input: {
//     padding: "10px",
//     width: "250px",
//     marginBottom: "20px"
//   },
//   card: {
//     border: "1px solid #ccc",
//     padding: "15px",
//     margin: "10px auto",
//     width: "300px"
//   },
//   info: {
//     marginTop: "20px",
//     color: "green"
//   },
//   note: {
//     color: "gray"
//   }
// };

// export default App;