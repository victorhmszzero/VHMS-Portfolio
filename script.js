document.addEventListener("DOMContentLoaded", function () {
  // * Funcion nav__anchor
  const navAnchors = document.querySelectorAll(".nav__line");
  const defaultAnchor = document.getElementById("default-achor");

  navAnchors.forEach((anchor) => {
    anchor.addEventListener("mouseenter", () => {
      if (anchor != defaultAnchor) {
        navAnchors.forEach((otherAnchor) => {
          otherAnchor.classList.remove("nav__line--activate");
        });
      }
    });

    anchor.addEventListener("click", () => {
      navAnchors.forEach((otherAnchor) => {
        otherAnchor.classList.remove("nav__line--activate");
      });
    });
  });

  // Quando o mouse deixa toda a área da navegação, restaura a última ancoragem ativa
  document.querySelector(".nav__list").addEventListener("mouseleave", () => {
    if (defaultAnchor) {
      defaultAnchor.classList.add("nav__line--activate");
    }
  });

  // * Funcion 2
  // document.addEventListener("scroll", function () {
  //   // Obtém a posição vertical da página durante o scroll
  //   var scrollPosition = window.scrollY;

  //   // Obtém a largura da janela do navegador
  //   var windowWidth = window.innerWidth;

  //   // Obtém a largura da <span>
  //   var shapeWidth = document.querySelector(".c-home__shape").offsetWidth;

  //   // Obtém a largura da área visível da página
  //   var visibleAreaWidth = 1000; // Altere este valor conforme necessário

  //   // Calcula a nova posição da <span>
  //   var newPosition =
  //     (scrollPosition / (document.body.scrollHeight - visibleAreaWidth)) *
  //     (windowWidth - shapeWidth);

  //   // Limita a posição para que a <span> pare no centro
  //   newPosition = Math.max(0, Math.min(newPosition, (windowWidth - shapeWidth) / 2));

  //   // Atualiza a posição da <span>
  //   document.querySelector(".c-home__shape").style.left = newPosition + "px";
  // });

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

  // Adiciona um evento de transição para remover a classe "in-motion" após a animação
  shapeElement.addEventListener("transitionend", function () {
    setTimeout(function () {
      shapeElement.classList.remove("in-motion");
    }, 500);
  });
});
