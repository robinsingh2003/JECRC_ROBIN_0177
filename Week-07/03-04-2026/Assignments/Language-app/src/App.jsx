import { useState } from "react";
import Navbar from "./components/Navbar";
import Login from "./pages/login";
import Dashboard from "./pages/Dashboard";
import { Snackbar, Alert } from "@mui/material";
import { useContext } from "react";
import { LanguageContext } from "./context/LanguageContext";

function App() {
  const [user, setUser] = useState(null);

  const { openSnackbar, closeSnackbar } = useContext(LanguageContext);

  return (
    <>
      <Navbar />

      {user ? (
        <Dashboard user={user} onLogout={() => setUser(null)} />
      ) : (
        <Login onLogin={setUser} />
      )}

      {/* 🔔 Snackbar */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={2000}
        onClose={closeSnackbar}
      >
        <Alert severity="success">Language Changed 🌍</Alert>
      </Snackbar>
    </>
  );
}

export default App;