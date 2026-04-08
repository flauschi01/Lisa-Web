function scrollToSection() {
  document.getElementById("about").scrollIntoView({
    behavior: "smooth"
  });
}
function toggleMenu() {
  const menu = document.getElementById("menu");
  const burger = document.querySelector(".burger");

  menu.classList.toggle("active");
  burger.classList.toggle("active");
}
