document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".open-menu").addEventListener("click", openMenu);
  document.querySelector(".close-menu").addEventListener("click", closeMenu);
});

function openMenu() {
  document.getElementById("mobile-menu").style.display = "flex";
}

function closeMenu() {
  document.getElementById("mobile-menu").style.display = "none";
}
