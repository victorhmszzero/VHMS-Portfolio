import React from "react";
import "../../sharedStyles/sharedStyles.css";
import "./Project.css";

const Project = ({ key, thumb, title, date, category, page, center }) => {
  const containerClasses = ["project"];

  if (center === true) {
    containerClasses.push("project--center");
  }
  return (
    <div className={containerClasses.join(" ")}>
      <img className="project__image" src={thumb} />
      <button className="project__link" onclick={page}></button>
      <section className="project__container">
        <div className="project__header">
          <p className="project__text project__text--date">{date}</p>
          <p className="project__text project__text--title">{title}</p>
        </div>
        <ul className="project__list">
          <li className="project__list-line">{category.firstItem}</li>
          <li className="project__list-line">{category.secondItem}</li>
          <li className="project__list-line">{category.thirdItem}</li>
        </ul>
      </section>
    </div>
  );
};

export default Project;
