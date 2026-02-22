const headerBtn = document.getElementById("header-btn");
const navbar = document.getElementById("navbar");

headerBtn.addEventListener("click", () => {
  navbar.classList.toggle("open");
  headerBtn.classList.toggle("close-btn");
});
