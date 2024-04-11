let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");
let menuIcon = menu.querySelector("i");

let isMenuClicked = false;

menu.onclick = () => {
  isMenuClicked = true;
  menuIcon.classList.toggle("fa-solid");
  menuIcon.classList.toggle("fa-x");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  if (isMenuClicked) {
    menuIcon.classList.remove("fa-solid");
    menuIcon.classList.remove("fa-x");
    navbar.classList.remove("active");
    menuIcon.classList.add("fa-solid");
    menuIcon.classList.add("fa-chart-bar");
  }
};

// Resolvido o problema do icone que não retornava ao simbolo original ao dar scroll e voltar ao topo da página.
