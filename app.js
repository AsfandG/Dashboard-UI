const body = document.querySelector("body");
const toggleMode = document.querySelector(".toggle-mode");

toggleMode.addEventListener("click", () => {
  body.classList.toggle("dark");
});
