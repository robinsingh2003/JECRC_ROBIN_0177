import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { Select, MenuItem } from "@mui/material";

const LanguageSwitcher = () => {
  const { language, switchLanguage } = useContext(LanguageContext);

  return (
    <Select
      value={language}
      onChange={(e) => switchLanguage(e.target.value)}
      size="small"
      sx={{
        background: "",
        borderRadius: 2,
        minWidth: 180,
        color: "inherit",
        "& .MuiSelect-icon": {
          color: "inherit"
        }
      }}
    >
      <MenuItem value="en">🇺🇸 English</MenuItem>
      <MenuItem value="hi">🇮🇳 Hindi</MenuItem>
      <MenuItem value="es">🇪🇸 Spanish</MenuItem>
      <MenuItem value="fr">🇫🇷 French</MenuItem>
      <MenuItem value="de">🇩🇪 German</MenuItem>
      <MenuItem value="ar">🇸🇦 Arabic</MenuItem>
    </Select>
  );
};

export default LanguageSwitcher;