function openMenu() {
  document.getElementById("mobile-menu").style.display = "flex";
  document.querySelector(".overlay").style.display = "block";
}

function closeMenu() {
  document.getElementById("mobile-menu").style.display = "none";
  document.querySelector(".overlay").style.display = "none";
}

document.getElementById("open-button").addEventListener("click", openMenu);
document.getElementById("close-button").addEventListener("click", closeMenu);
