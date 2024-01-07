import React, { useEffect } from "react";
import "../../sharedStyles/sharedStyles.css";
import "./IconButton.css";

const IconButton = ({ icon, text, size }) => {
  const elementiconButton = document.getElementById("iconButton");
  if (size === "big") {
    elementiconButton.classList.add("icon-button__icon--bigger");
  }
  useEffect(() => {}, []);

  return (
    <div className="icon-button">
      <div id="iconButton" className="icon-button__icon">
        {icon}
      </div>
      <p className="icon-button__text text--small">{text}</p>
    </div>
  );
};

export default IconButton;
