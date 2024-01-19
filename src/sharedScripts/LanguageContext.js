import React, { createContext, useContext, useState } from "react";
const LanguageContext = createContext();

// Hook para acessar o contexto
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage deve ser usado dentro de um LanguageProvider");
  }
  return context;
};

// Provedor do contexto
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("pt-br");

  const switchLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  const contextValue = {
    language,
    switchLanguage,
  };

  return <LanguageContext.Provider value={contextValue}>{children}</LanguageContext.Provider>;
};
