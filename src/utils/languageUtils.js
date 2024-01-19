// languageUtils.js
import React, { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage deve ser usado dentro de um LanguageProvider");
  }
  return context;
};

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

export function useLanguageTexts() {
  const { language } = useLanguage();

  let home_Subititle;
  let iconText_uxUi = "UI/UX";
  let iconText_editor = "Editor";
  let iconText_design = "Design";
  let iconText_dev = "Dev";
  let iconText_artist;
  //
  let typeBtn_all;
  let typeBtn_popular;
  let typeBtn_design;
  let typeBtn_draw;
  let typeBtn_site;
  let typeBtn_dev;
  let typeBtn_3d;
  let typeBtn_pixelArt;

  if (language === "pt-br") {
    home_Subititle = "Bem-vindo ao meu mundo criativo!";
    iconText_artist = "Artista";
    typeBtn_all = "Todos";
    typeBtn_popular = "Favoritos";
    typeBtn_design = "Design";
    typeBtn_draw = "Illustrações";
    typeBtn_site = "Sites";
    typeBtn_dev = "Dev";
    typeBtn_3d = "3D";
    typeBtn_pixelArt = "PixelArt";
  } else if (language === "en-us") {
    home_Subititle = "Lorem1";
    iconText_artist = "Lorem2";
    typeBtn_all = "Lorem3";
    typeBtn_popular = "Lorem4";
    typeBtn_design = "Lorem5";
    typeBtn_draw = "Lorem6";
    typeBtn_site = "Lorem7";
    typeBtn_dev = "Lorem8";
    typeBtn_3d = "Lorem9";
    typeBtn_pixelArt = "Lorem10";
  }

  return {
    home_Subititle,
    iconText_uxUi,
    iconText_editor,
    iconText_design,
    iconText_dev,
    iconText_artist,
    typeBtn_all,
    typeBtn_popular,
    typeBtn_design,
    typeBtn_draw,
    typeBtn_site,
    typeBtn_dev,
    typeBtn_3d,
    typeBtn_pixelArt,
  };
}
