const bar = document.getElementById("bar");
const navbar = document.getElementById("navbar");
const close = document.getElementById("close");

if (bar && navbar && close) {
  bar.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });

  close.addEventListener("click", () => {
    navbar.classList.remove("active");
  });
}