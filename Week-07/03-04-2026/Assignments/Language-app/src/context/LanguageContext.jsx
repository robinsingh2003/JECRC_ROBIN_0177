// import { createContext, useState } from "react";

// import en from "../locales/en";
// import hi from "../locales/hi";
// import gu from "../locales/gu";
// import pa from "../locales/pa";
// import mr from "../locales/mr";
// import bn from "../locales/bn";
// import ta from "../locales/ta";
// import te from "../locales/te";
// import es from "../locales/es";
// import fr from "../locales/fr";
// import de from "../locales/de";
// import ar from "../locales/ar";

// export const LanguageContext = createContext();

// const languages = {
//   en,
//   hi,
//   gu,
//   pa,
//   mr,
//   bn,
//   ta,
//   te,
//   es,
//   fr,
//   de,
//   ar,
// };

// export const LanguageProvider = ({ children }) => {
//   const [language, setLanguage] = useState("en");

//   const switchLanguage = (lang) => {
//     console.log("Switching to:", lang);
//     setLanguage(lang);
//   };

//   return (
//     <LanguageContext.Provider
//       value={{
//         language,
//         text: languages[language] || languages.en,
//         switchLanguage,
//       }}
//     >
//       {children}
//     </LanguageContext.Provider>
//   );
// };
import { createContext, useState, useEffect } from "react";

import en from "../locales/en";
import hi from "../locales/hi";
import gu from "../locales/gu";
import pa from "../locales/pa";
import mr from "../locales/mr";
import bn from "../locales/bn";
import ta from "../locales/ta";
import te from "../locales/te";
import es from "../locales/es";
import fr from "../locales/fr";
import de from "../locales/de";
import ar from "../locales/ar";
export const LanguageContext = createContext();

const languages = {
  en,
  hi,
  gu,
  pa,
  mr,
  bn,
  ta,
  te,
  es,
  fr,
  de,
  ar,
};

export const LanguageProvider = ({ children }) => {
  // 🌍 Detect browser language
  const browserLang = navigator.language.slice(0, 2);

  const savedLang = localStorage.getItem("lang");

  const [language, setLanguage] = useState(
    savedLang || (languages[browserLang] ? browserLang : "en")
  );

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const switchLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("lang", lang);

    // 🔔 show notification
    setOpenSnackbar(true);
  };

  const closeSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        text: languages[language] || languages.en,
        switchLanguage,
        openSnackbar,
        closeSnackbar,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};