const navbar = document.querySelector(".mobile-info-display");
const navButton = document.querySelector(".nav-button");
const projectSection = document.querySelector(".project-section");
const main = document.querySelector(".main");
const picture = document.querySelector(".nav-picture");
const navLinks = document.querySelector(".nav-links");

navButton.addEventListener("click", () => {
  navbar.classList.toggle("nav-open");
  main.classList.toggle("project-nav-open");
  navLinks.classList.toggle("nav-links-open");
});

picture.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
