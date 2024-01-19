import { useEffect } from "react";

function useScroll() {
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
  });
}

export default useScroll;
