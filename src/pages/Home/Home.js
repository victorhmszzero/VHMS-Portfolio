import React, { useState, useEffect } from "react";
import { useLanguage } from "../../sharedScripts/LanguageContext";

// Import Components
import IconButton from "../../components/IconButton/IconButton";
import Project from "../../components/Project/Project";
// Import CSS
import "../..//sharedStyles/sharedStyles.css";
import "./Home.css";

const Home = () => {
  const { language } = useLanguage();
  //
  let textSubtitle;
  let textIcon_uxUi;
  let textIcon_editor;
  let textIcon_design;
  let textIcon_dev;
  let textIcon_artist;
  function getTextsByLanguage() {
    if (language === "pt-br") {
      textSubtitle = "Bem-vindo ao meu mundo criativo!";
      textIcon_uxUi = "UI/UX";
      textIcon_editor = "Editor";
      textIcon_design = "Design";
      textIcon_dev = "Dev";
      textIcon_artist = "Artista";
    } else if (language === "en-us") {
      textSubtitle = "Lorem";
      textIcon_uxUi = "UI/UX";
      textIcon_editor = "Editor";
      textIcon_design = "Design";
      textIcon_dev = "Dev";
      textIcon_artist = "Artist";
    }
  }
  //
  let svgIcon_uxUi;
  let svgIcon_editor;
  let svgIcon_design;
  let svgIcon_dev;
  let svgIcon_artist;
  function databaseIcon() {
    svgIcon_uxUi = (
      <svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask id="mask0_338_996" maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="24">
          <rect x="0.5" width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_338_996)">
          <path
            d="M2.5 20C1.95 20 1.47917 19.8042 1.0875 19.4125C0.695833 19.0208 0.5 18.55 0.5 18H4.5C3.95 18 3.47917 17.8042 3.0875 17.4125C2.69583 17.0208 2.5 16.55 2.5 16V5C2.5 4.45 2.69583 3.97917 3.0875 3.5875C3.47917 3.19583 3.95 3 4.5 3H20.5C21.05 3 21.5208 3.19583 21.9125 3.5875C22.3042 3.97917 22.5 4.45 22.5 5V16C22.5 16.55 22.3042 17.0208 21.9125 17.4125C21.5208 17.8042 21.05 18 20.5 18H24.5C24.5 18.55 24.3042 19.0208 23.9125 19.4125C23.5208 19.8042 23.05 20 22.5 20H2.5ZM12.5 19C12.7833 19 13.0208 18.9042 13.2125 18.7125C13.4042 18.5208 13.5 18.2833 13.5 18C13.5 17.7167 13.4042 17.4792 13.2125 17.2875C13.0208 17.0958 12.7833 17 12.5 17C12.2167 17 11.9792 17.0958 11.7875 17.2875C11.5958 17.4792 11.5 17.7167 11.5 18C11.5 18.2833 11.5958 18.5208 11.7875 18.7125C11.9792 18.9042 12.2167 19 12.5 19ZM4.5 16H20.5V5H4.5V16Z"
            fill="#1C1B1F"
          />
        </g>
      </svg>
    );
    svgIcon_editor = (
      <svg class="c-home__icon" xmlns="http://www.w3.org/2000/svg" fill="none">
        <mask id="mask0_338_999" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
          <rect width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_338_999)">
          <path
            d="M9.5 16.5L16.5 12L9.5 7.5V16.5ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z"
            fill="#1C1B1F"
          />
        </g>
      </svg>
    );
    svgIcon_design = (
      <svg class="c-home__icon" xmlns="http://www.w3.org/2000/svg" fill="none">
        <mask id="mask0_338_1002" maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="24">
          <rect x="0.5" width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_338_1002)">
          <path
            d="M5.5 21C4.95 21 4.47917 20.8042 4.0875 20.4125C3.69583 20.0208 3.5 19.55 3.5 19V5C3.5 4.45 3.69583 3.97917 4.0875 3.5875C4.47917 3.19583 4.95 3 5.5 3H19.5C20.05 3 20.5208 3.19583 20.9125 3.5875C21.3042 3.97917 21.5 4.45 21.5 5V19C21.5 19.55 21.3042 20.0208 20.9125 20.4125C20.5208 20.8042 20.05 21 19.5 21H5.5ZM5.5 19H19.5V5H5.5V19ZM6.5 17H18.5L14.75 12L11.75 16L9.5 13L6.5 17Z"
            fill="#1C1B1F"
          />
        </g>
      </svg>
    );
    svgIcon_dev = (
      <svg class="c-home__icon" xmlns="http://www.w3.org/2000/svg" fill="none">
        <mask id="mask0_338_996" maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="24">
          <rect x="0.5" width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_338_996)">
          <path
            d="M2.5 20C1.95 20 1.47917 19.8042 1.0875 19.4125C0.695833 19.0208 0.5 18.55 0.5 18H4.5C3.95 18 3.47917 17.8042 3.0875 17.4125C2.69583 17.0208 2.5 16.55 2.5 16V5C2.5 4.45 2.69583 3.97917 3.0875 3.5875C3.47917 3.19583 3.95 3 4.5 3H20.5C21.05 3 21.5208 3.19583 21.9125 3.5875C22.3042 3.97917 22.5 4.45 22.5 5V16C22.5 16.55 22.3042 17.0208 21.9125 17.4125C21.5208 17.8042 21.05 18 20.5 18H24.5C24.5 18.55 24.3042 19.0208 23.9125 19.4125C23.5208 19.8042 23.05 20 22.5 20H2.5ZM12.5 19C12.7833 19 13.0208 18.9042 13.2125 18.7125C13.4042 18.5208 13.5 18.2833 13.5 18C13.5 17.7167 13.4042 17.4792 13.2125 17.2875C13.0208 17.0958 12.7833 17 12.5 17C12.2167 17 11.9792 17.0958 11.7875 17.2875C11.5958 17.4792 11.5 17.7167 11.5 18C11.5 18.2833 11.5958 18.5208 11.7875 18.7125C11.9792 18.9042 12.2167 19 12.5 19ZM4.5 16H20.5V5H4.5V16Z"
            fill="#1C1B1F"
          />
        </g>
      </svg>
    );
    svgIcon_artist = (
      <svg class="c-home__icon" xmlns="http://www.w3.org/2000/svg" fill="none">
        <mask id="mask0_338_1008" maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="24">
          <rect x="0.5" width="24" height="24" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_338_1008)">
          <path
            d="M6.5 21C5.75 21 5.00833 20.8167 4.275 20.45C3.54167 20.0834 2.95 19.6 2.5 19C2.93333 19 3.375 18.8292 3.825 18.4875C4.275 18.1459 4.5 17.65 4.5 17C4.5 16.1667 4.79167 15.4584 5.375 14.875C5.95833 14.2917 6.66667 14 7.5 14C8.33333 14 9.04167 14.2917 9.625 14.875C10.2083 15.4584 10.5 16.1667 10.5 17C10.5 18.1 10.1083 19.0417 9.325 19.825C8.54167 20.6084 7.6 21 6.5 21ZM6.5 19C7.05 19 7.52083 18.8042 7.9125 18.4125C8.30417 18.0209 8.5 17.55 8.5 17C8.5 16.7167 8.40417 16.4792 8.2125 16.2875C8.02083 16.0959 7.78333 16 7.5 16C7.21667 16 6.97917 16.0959 6.7875 16.2875C6.59583 16.4792 6.5 16.7167 6.5 17C6.5 17.3834 6.45417 17.7334 6.3625 18.05C6.27083 18.3667 6.15 18.6667 6 18.95C6.08333 18.9834 6.16667 19 6.25 19H6.5ZM12.25 15L9.5 12.25L18.45 3.30002C18.6333 3.11669 18.8625 3.02086 19.1375 3.01252C19.4125 3.00419 19.65 3.10002 19.85 3.30002L21.2 4.65002C21.4 4.85002 21.5 5.08336 21.5 5.35002C21.5 5.61669 21.4 5.85002 21.2 6.05002L12.25 15Z"
            fill="#1C1B1F"
          />
        </g>
      </svg>
    );
  }
  const projectsData = [
    {
      thumb:
        "https://mir-s3-cdn-cf.behance.net/projects/808/a46efe182841405.Y3JvcCw4MDgsNjMyLDAsMA.png",
      title: "Projeto 1",
      date: "2023",
      page: "/link-da-pagina",
      category: { firstItem: "Categoria 1", secondItem: "Categoria 2" },
      type: "Popular, Design, Site",
    },
    {
      thumb:
        "https://mir-s3-cdn-cf.behance.net/projects/808/9edf76164666485.Y3JvcCw0MDQzLDMxNjIsMCww.jpg",
      title: "Projeto 2",
      date: "2023",
      page: "/link-da-pagina",
      category: { firstItem: "Categoria 1", secondItem: "Categoria 2" },
      type: "Popular, Design",
    },
    {
      thumb:
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/ce9116162440939.63d5d628d97de.png",
      title: "Projeto 3",
      date: "2023",
      page: "/link-da-pagina",
      category: { firstItem: "Categoria 1", secondItem: "Categoria 2" },
      type: "Popular, Design",
    },
    {
      thumb:
        "https://mir-s3-cdn-cf.behance.net/projects/808/9d28f5161913209.Y3JvcCwxNDA3LDExMDAsMCww.png",
      title: "Projeto 4",
      date: "2023",
      page: "/link-da-pagina",
      category: { firstItem: "Categoria 1", secondItem: "Categoria 2" },
      type: "Popular, Draw",
    },
    {
      thumb: "https://www.pcgamesn.com/wp-content/sites/pcgamesn/2019/04/dota-3-logo.jpg",
      title: "Projeto 5",
      date: "2023",
      page: "/link-da-pagina",
      category: { firstItem: "Categoria 1", secondItem: "Categoria 2" },
      type: "",
    },
    {
      thumb:
        "https://mir-s3-cdn-cf.behance.net/projects/808/c48d7c161924613.Y3JvcCwxNDA3LDExMDAsMCww.png",
      title: "Projeto 6",
      date: "2023",
      page: "/link-da-pagina",
      category: { firstItem: "Categoria 1", secondItem: "Categoria 2" },
      type: "Popular, Draw",
    },
  ];
  //
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [exitProjectIndex, setExitProjectIndex] = useState(null);
  const [filteredProjectsClass, setFilteredProjectsClass] = useState("");

  const filterProjects = (type, addClass, anim) => {
    if (!anim) {
      setTimeout(function () {
        setFilteredProjectsClass(addClass ? "exited" : "");
        filterProjects(type, addClass, true);
      }, 500);
      setFilteredProjectsClass(addClass ? "exiting" : "");
    } else {
      if (type === "btnAll") {
        setTimeout(function () {
          setFilteredProjectsClass(addClass ? "entered" : "");
          setExitProjectIndex(null);
          setFilteredProjects(projectsData);
        }, 250);
      } else {
        setTimeout(function () {
          const filteredProjects = projectsData.filter((project) => project.type.includes(type));
          setFilteredProjectsClass(addClass ? "entered" : "");
          setExitProjectIndex(0);
          setFilteredProjects(filteredProjects);
        }, 250);
      }
      setFilteredProjects(projectsData);
      setFilteredProjectsClass(addClass ? "exited" : "");
    }
  };
  //
  //
  useEffect(() => {
    var shapeElement = document.querySelector(".c-home__shape");
    document.addEventListener("scroll", function () {
      // Adiciona a classe "in-motion" para ativar a animação
      shapeElement.classList.add("in-motion");

      // Obtém a posição vertical da página durante o scroll
      var scrollPosition = window.scrollY;

      // Obtém a largura da janela do navegador
      var windowWidth = window.innerWidth;

      // Obtém a largura da <span>
      var shapeWidth = shapeElement.offsetWidth;

      // Obtém a altura da área visível da página
      var visibleAreaHeight = window.innerHeight;

      // Calcula a nova posição da <span>
      var newPosition =
        ((scrollPosition / (document.body.scrollHeight - visibleAreaHeight)) *
          (windowWidth - shapeWidth)) /
        2;

      // Atualiza a posição da <span>
      shapeElement.style.left = newPosition + "px";
    });
    // Remover a classe "in-motion" após a animação
    shapeElement.addEventListener("transitionend", function () {
      setTimeout(function () {
        shapeElement.classList.remove("in-motion");
      }, 500);
    });
    //
    const typeBtns = document.querySelectorAll(".btn__action");

    typeBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        typeBtns.forEach((otherBtn) => {
          otherBtn.classList.add("btn__action--off");
        });
        btn.classList.remove("btn__action--off");
      });
    });
    //
    const timeoutId = setTimeout(() => setExitProjectIndex(null), 500);
    // Limpar o timeout ao desmontar o componente ou ao mudar os projetos filtrados
    return () => clearTimeout(timeoutId);
  }, [exitProjectIndex, filteredProjects]);
  //
  getTextsByLanguage();
  databaseIcon();
  //
  const renderProjects = () => {
    return filteredProjects.map((project, index) => {
      const relativePosition = index + 1;
      const isCenter = (relativePosition - 2) % 3 === 0;
      let projectClasses = "project-container";
      if (filteredProjectsClass) {
        projectClasses += ` ${filteredProjectsClass}`;
      }

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

  //
  return (
    <div>
      <section className="c-home">
        <div className="c-home__item">
          <div className="c-home__icons">
            <IconButton icon={svgIcon_uxUi} text={textIcon_uxUi} />
            <IconButton icon={svgIcon_editor} text={textIcon_editor} />
            <IconButton icon={svgIcon_design} text={textIcon_design} />
            <IconButton icon={svgIcon_dev} text={textIcon_dev} />
            <IconButton icon={svgIcon_artist} text={textIcon_artist} />
          </div>
          <h1 className="title title--bigger">VH MAGALHÃES</h1>
          <p className="text">{textSubtitle}</p>
        </div>
        <span className="c-home__shape"></span>
      </section>
      <section className="c-portifolio" id="sectionPortifolio">
        <h2 className="title">Portifolio</h2>
        <div className="c-portifolio__item">
          <button
            className="btn__action btn__action--smaller btn__action--off"
            id="btnAll"
            onClick={() => filterProjects("btnAll", true, false)}
          >
            Todos
          </button>
          <button
            className="btn__action btn__action--smaller"
            id="btnMain"
            onClick={() => filterProjects("Popular", true, false)}
          >
            Destaque
          </button>
          <button
            className="btn__action btn__action--smaller btn__action--off"
            id="btnDesign"
            onClick={() => filterProjects("Design", true, false)}
          >
            Design
          </button>
          <button
            className="btn__action btn__action--smaller btn__action--off"
            id="btnDraw"
            onClick={() => filterProjects("Draw", true, false)}
          >
            Desenhos
          </button>
          <button
            className="btn__action btn__action--smaller btn__action--off "
            id="btnSites"
            onClick={() => filterProjects("Site", true, false)}
          >
            Sites
          </button>
        </div>
      </section>
      <main className="main body__item">{renderProjects()}</main>
    </div>
  );
};

export default Home;
