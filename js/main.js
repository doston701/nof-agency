const mobile = document.querySelector(".navbar__mobile-list");
const body = document.querySelector("body");
const btn = document.querySelector(".header-btn");

btn.addEventListener("click", () => {
  mobile.classList.toggle("open");
  body.classList.toggle("overflow");
});
