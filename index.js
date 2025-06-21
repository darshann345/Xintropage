function openMenu() {
  document.getElementById("mobile-menu").style.display = "flex";
  document.querySelector(".overlay").style.display = "block";
}

function closeMenu() {
  document.getElementById("mobile-menu").style.display = "none";
  document.querySelector(".overlay").style.display = "none";
}

const openBtn = document.getElementById("open-button");
if (openBtn) {
  openBtn.addEventListener("click", openMenu);
}

const closeBtn = document.getElementById("close-button");
if (closeBtn) {
  closeBtn.addEventListener("click", closeMenu);
}
