import { AppBar, Toolbar, Typography, Box, IconButton } from "@mui/material";
import LanguageSwitcher from "./LanguageSwitcher";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <AppBar position="sticky" elevation={3}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          🌐 Language App
        </Typography>

        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <LanguageSwitcher />

          <IconButton color="inherit" onClick={toggleTheme}>
            🌙
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;