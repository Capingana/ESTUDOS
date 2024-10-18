const hamburguer = document.querySelector(".hamburguer");
const nav_menu = document.querySelector(" .nav-menu");
hamburguer.addEventListener("click", () => {
  hamburguer.classList.toggle("active")
  nav_menu.classList.toggle("active")
});
