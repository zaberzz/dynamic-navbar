const links = document.getElementById("links");
const navToggle = document.querySelector(".nav-toggle");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-link");
});
