// Import libraries
import React, { useEffect } from "react";

// Import styles
import "../../sharedStyles/sharedStyles.css";
import "./Nav.css";

// Impor assets
import blackLogo from "../../assets/logo-vhms-black.svg";

// Import hooks
import ButtonAction from "../../hooks/buttonAction/buttonAction.js";

// Import utils
import { useLanguage, useLanguageTexts } from "../../utils/languageUtils.js";

const Nav = () => {
  // Imports
  ButtonAction(".btn__action--language");
  const { language, switchLanguage } = useLanguage();
  //
  useEffect(() => {
    const [handleClickPTBR, handleClickENUS] = changeLanguage(language, switchLanguage);
    const navCleanup = navInteraction();

    const btnPTBR = document.getElementById("idPTBR");
    const btnEnUS = document.getElementById("idENUS");

    btnPTBR.addEventListener("click", handleClickPTBR);
    btnEnUS.addEventListener("click", handleClickENUS);

    return () => {
      navCleanup();
      btnPTBR.removeEventListener("click", handleClickPTBR);
      btnEnUS.removeEventListener("click", handleClickENUS);
    };
  }, [language, switchLanguage]);
  //
  return (
    <nav className="nav body__item">
      <section className="nav__item">
        <div className="nav__image">
          <img className="nav__image-logo" src={blackLogo} alt="logo" />
        </div>
        <div className="nav__buttons">
          <button className="btn__action--language btn__action" id="idPTBR">
            PT-BR
          </button>
          <button className="btn__action--language btn__action btn__action--off" id="idENUS">
            EN-US
          </button>
        </div>
      </section>
      <section className="nav__item">
        <ul className="nav__list">
          <li id="default-achor" className="nav__line nav__line--activate">
            <span className="nav__rect"></span>
            <a className="nav__anchor" href="#home">
              Inicio
            </a>
          </li>
          <li className="nav__line">
            <span className="nav__rect"></span>
            <a className="nav__anchor" href="#portfolio">
              Portfólio
            </a>
          </li>
          <li className="nav__line">
            <span className="nav__rect"></span>
            <a className="nav__anchor" href="#idAbout">
              Sobre
            </a>
          </li>
          <li className="nav__line">
            <span className="nav__rect"></span>
            <a className="nav__anchor" href="#contact">
              Contato
            </a>
          </li>
        </ul>
      </section>
    </nav>
  );
};
//
function navInteraction() {
  const navAnchors = document.querySelectorAll(".nav__line");
  const defaultAnchor = document.getElementById("default-achor");

  const handleMouseLeave = () => {
    if (defaultAnchor) {
      defaultAnchor.classList.add("nav__line--activate");
    }
  };

  const handleMouseEnter = (anchor) => {
    if (anchor !== defaultAnchor) {
      navAnchors.forEach((otherAnchor) => {
        otherAnchor.classList.remove("nav__line--activate");
      });
    }
  };
  const handleMouseClick = () => {
    navAnchors.forEach((otherAnchor) => {
      otherAnchor.classList.remove("nav__line--activate");
    });
  };

  navAnchors.forEach((anchor) => {
    anchor.addEventListener("mouseenter", () => handleMouseEnter(anchor));
    anchor.addEventListener("click", handleMouseClick);
  });
  document.querySelector(".nav__list").addEventListener("mouseleave", handleMouseLeave);

  return () => {
    navAnchors.forEach((anchor) => {
      anchor.removeEventListener("mouseenter", () => handleMouseEnter(anchor));
      anchor.removeEventListener("click", handleMouseClick);
    });
    document.querySelector(".nav__list").removeEventListener("mouseleave", handleMouseLeave);
  };
}

function changeLanguage(currentLanguage, changeFunction) {
  const handleClickPTBR = () => {
    if (currentLanguage !== "pt-br") {
      changeFunction("pt-br");
    }
  };

  const handleClickENUS = () => {
    if (currentLanguage !== "en-us") {
      changeFunction("en-us");
    }
  };

  return [handleClickPTBR, handleClickENUS];
}
//
export default Nav;
