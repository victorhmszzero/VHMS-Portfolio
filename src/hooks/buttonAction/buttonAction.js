import { useEffect } from "react";
import "./buttonAction.css";

function ButtonAction(btnClass) {
  useEffect(() => {
    const typeBtns = document.querySelectorAll(btnClass);
    typeBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        typeBtns.forEach((otherBtn) => {
          otherBtn.classList.add("btn__action--off");
        });
        btn.classList.remove("btn__action--off");
      });
    });
  });
}

export default ButtonAction;
