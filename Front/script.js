let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");
let menuIcon = menu.querySelector("i");

menu.onclick = () => {
  menuIcon.classList.toggle("fa-solid");
  menuIcon.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menuIcon.classList.remove("fa-solid");
  menuIcon.classList.remove("fa-xmark");
  navbar.classList.remove("active");
};
