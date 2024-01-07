import React, { useEffect } from "react";
import "../../sharedStyles/sharedStyles.css";
import "../../sharedStyles/actionButtons.css";
import "./Nav.css";
import vhms_black_logo from "../../sharedAssets/logo-vhms-black.svg";

import { useLanguage } from "../../sharedScripts/LanguageContext";

const Nav = () => {
  const { language, switchLanguage } = useLanguage();

  // Empty dependency array means this effect will run once after the initial render
  useEffect(() => {
    function navButtons() {
      const navAnchors = document.querySelectorAll(".nav__line");
      const defaultAnchor = document.getElementById("default-achor");

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

      const handleMouseLeave = () => {
        if (defaultAnchor) {
          defaultAnchor.classList.add("nav__line--activate");
        }
      };

      document.querySelector(".nav__list").addEventListener("mouseleave", handleMouseLeave);

      // Cleanup function
      return () => {
        navAnchors.forEach((anchor) => {
          anchor.removeEventListener("mouseenter", () => handleMouseEnter(anchor));
          anchor.removeEventListener("click", handleMouseClick);
        });

        document.querySelector(".nav__list").removeEventListener("mouseleave", handleMouseLeave);
      };
    }
    navButtons();
    const elementENUS = document.getElementById("idENUS");
    const elementPTBR = document.getElementById("idPTBR");

    elementPTBR.addEventListener("click", function () {
      if (language !== "pt-br") {
        switchLanguage("pt-br");
        elementPTBR.classList.remove("btn__action--off");
        elementENUS.classList.add("btn__action--off");
      }
    });

    elementENUS.addEventListener("click", function () {
      if (language !== "en-us") {
        switchLanguage("en-us");
        elementENUS.classList.remove("btn__action--off");
        elementPTBR.classList.add("btn__action--off");
      }
    });
  }, [language, switchLanguage]);

  return (
    <nav className="nav body__item">
      <section className="nav__item">
        <div className="nav__image">
          <img className="nav__image-logo" src={vhms_black_logo} alt="logo" />
        </div>
        <div className="nav__buttons">
          <button className="btn__action" id="idPTBR">
            PT-BR
          </button>
          <button className="btn__action btn__action--off" id="idENUS">
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

export default Nav;
