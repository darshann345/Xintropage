// ===== Mobile Menu Functions =====
function openMenu() {
  const menu = document.getElementById("mobile-menu");
  const overlay = document.querySelector(".overlay");
  menu.style.display = "flex";
  overlay.style.display = "block";
  overlay.style.opacity = "1";
}

function closeMenu() {
  const menu = document.getElementById("mobile-menu");
  const overlay = document.querySelector(".overlay");
  menu.style.display = "none";
  overlay.style.opacity = "0";
  setTimeout(() => {
    overlay.style.display = "none";
  }, 300);
}

document.querySelector(".open-menu").addEventListener("click", openMenu);
document.querySelector(".close-menu").addEventListener("click", closeMenu);

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
  link.addEventListener("click", e => {
    const parent = link.closest(".dropdown-parent");
    if (parent) {
      e.preventDefault(); 
      parent.classList.toggle("link-open");
    }
  });
});
