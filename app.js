const body = document.querySelector("body");
const toggleMode = document.querySelector(".toggle-mode");
const sidebar = document.querySelector("nav");
const sidebarToggler = document.querySelector(".sidebar-toggle");

// for switch
toggleMode.addEventListener("click", () => {
  body.classList.toggle("dark");
});

// Hide-Show navbar
sidebarToggler.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});
