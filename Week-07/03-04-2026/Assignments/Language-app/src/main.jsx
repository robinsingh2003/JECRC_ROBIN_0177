import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProviderCustom, ThemeContext } from "./context/ThemeContext";

const Root = () => {
  return (
    <ThemeProviderCustom>
      <ThemeContext.Consumer>
        {({ mode }) => {
          const theme = createTheme({
            palette: {
              mode,
              primary: { main: "#4f46e5" },
              secondary: { main: "#ec4899" },
            },
            shape: { borderRadius: 12 },
          });

          return (
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <LanguageProvider>
                <App />
              </LanguageProvider>
            </ThemeProvider>
          );
        }}
      </ThemeContext.Consumer>
    </ThemeProviderCustom>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);