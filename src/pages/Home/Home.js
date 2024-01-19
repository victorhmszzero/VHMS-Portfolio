// Import libraries
import React, { useState, useEffect, useMemo } from "react";

// Import styles
import "./Home.css";

// Import components
import IconButton from "../../components/IconButton/IconButton";
import Project from "../../components/Project/Project";

// Import hooks
import useScroll from "../../hooks/useScroll";
import ButtonAction from "../../hooks/buttonAction/buttonAction.js";

// Import utils
import { iconUtils } from "../../utils/iconUtils.js";
import { useLanguageTexts } from "../../utils/languageUtils";
import { projectsData } from "../../utils/projectUtils.js";

// Constants
const BUTTON_IDS = {
  ALL: "btnAll",
  POPULAR: "btnPopular",
  DESIGN: "btnDesign",
  DRAW: "btnDraw",
  SITES: "btnSites",
};

const Home = () => {
  // Imports
  useScroll();
  ButtonAction(".btn__action--smaller");
  const iconsData = iconUtils();
  const textsData = useLanguageTexts();

  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [exitProjectIndex, setExitProjectIndex] = useState(null);
  const [filteredProjectsClass, setProjectClassName] = useState("");

  const renderProjectsMemoized = useMemo(() => {
    return renderProjects(filteredProjects, filteredProjectsClass, exitProjectIndex);
  }, [filteredProjects, filteredProjectsClass, exitProjectIndex]);

  useEffect(() => {
    const timeoutId = setTimeout(() => setExitProjectIndex(null), 500);

    const addEventToButton = (type, skipAnim) => {
      return () => {
        filterProjects(type, skipAnim, {
          setFilteredProjects,
          setProjectClassName,
          setExitProjectIndex,
        });
      };
    };

    const addButtonClickListener = (buttonId, type, skipAnim) => {
      const button = document.getElementById(buttonId);
      button?.addEventListener("click", addEventToButton(type, skipAnim));
    };

    addButtonClickListener(BUTTON_IDS.ALL, "", false);
    addButtonClickListener(BUTTON_IDS.POPULAR, "Popular", false);
    addButtonClickListener(BUTTON_IDS.DESIGN, "Design", false);
    addButtonClickListener(BUTTON_IDS.DRAW, "Draw", false);
    addButtonClickListener(BUTTON_IDS.SITES, "Site", false);

    return () => {
      clearTimeout(timeoutId);
      Object.values(BUTTON_IDS).forEach((buttonId) => {
        const button = document.getElementById(buttonId);
        button?.removeEventListener("click", addEventToButton("", false));
      });
    };
  }, [exitProjectIndex, setFilteredProjects, setProjectClassName, setExitProjectIndex]);

  return (
    <div>
      <section className="c-home">
        <div className="c-home__item">
          <div className="c-home__icons">
            <IconButton icon={iconsData.svgIcon_uxUi} text={textsData.iconText_uxUi} />
            <IconButton icon={iconsData.svgIcon_editor} text={textsData.iconText_editor} />
            <IconButton icon={iconsData.svgIcon_design} text={textsData.iconText_design} />
            <IconButton icon={iconsData.svgIcon_dev} text={textsData.iconText_dev} />
            <IconButton icon={iconsData.svgIcon_artist} text={textsData.iconText_artist} />
          </div>
          <h1 className="title title--bigger">VH MAGALHÃES</h1>
          <p className="text">{textsData.home_Subititle}</p>
        </div>
        <span className="c-home__shape"></span>
      </section>
      <section className="c-portifolio" id="sectionPortifolio">
        <h2 className="title">Portifolio</h2>
        <div className="c-portifolio__item">
          <button className="btn__action btn__action--smaller btn__action--off" id="btnAll">
            {textsData.typeBtn_all}
          </button>
          <button className="btn__action btn__action--smaller" id="btnPopular">
            {textsData.typeBtn_popular}
          </button>
          <button className="btn__action btn__action--smaller btn__action--off" id="btnDesign">
            {textsData.typeBtn_design}
          </button>
          <button className="btn__action btn__action--smaller btn__action--off" id="btnDraw">
            {textsData.typeBtn_draw}
          </button>
          <button className="btn__action btn__action--smaller btn__action--off " id="btnSites">
            {textsData.typeBtn_site}
          </button>
        </div>
      </section>
      <main className="main body__item">{renderProjectsMemoized}</main>
    </div>
  );
};

const filterProjects = (type, skipAnim, setStateFunctions) => {
  const { setFilteredProjects, setProjectClassName, setExitProjectIndex } = setStateFunctions;
  if (!skipAnim) {
    setTimeout(function () {
      setProjectClassName("exited");
      filterProjects(type, true, setStateFunctions);
    }, 500);
    setProjectClassName("exiting");
  } else {
    if (type === "btnAll") {
      setTimeout(function () {
        setProjectClassName("entered");
        setExitProjectIndex(null);
        setFilteredProjects(projectsData);
      }, 250);
    } else {
      setTimeout(function () {
        const filteredProjects = projectsData.filter((project) => project.type.includes(type));
        setProjectClassName("entered");
        setExitProjectIndex(0);
        setFilteredProjects(filteredProjects);
      }, 250);
    }
    setFilteredProjects(projectsData);
    setProjectClassName("exited");
  }
};

const renderProjects = (filteredProjects, filteredProjectsClass, exitProjectIndex) => {
  return filteredProjects.map((project, index) => {
    const relativePosition = index + 1;
    const isCenter = (relativePosition - 2) % 3 === 0;
    let projectClasses = "project-container";
    filteredProjectsClass && (projectClasses += ` ${filteredProjectsClass}`);

    return (
      <div className={projectClasses} key={index}>
        <Project
          thumb={project.thumb}
          title={project.title}
          date={project.date}
          page={project.page}
          category={project.category}
          className={project.className}
          center={isCenter}
        />
      </div>
    );
  });
};

export default Home;
