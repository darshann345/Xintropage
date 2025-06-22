document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelectorAll('.nav-link').forEach(other => {
      if (other !== link) other.classList.remove('link-open');
    });
    link.classList.toggle('link-open');
  });
});

document.querySelector('.open-menu').addEventListener('click', () => {
  const overlay = document.querySelector('.overlay');
  overlay.classList.add('show');
  overlay.style.opacity = "1";
});

document.querySelector('.close-menu').addEventListener('click', () => {
  const overlay = document.querySelector('.overlay');
  overlay.classList.remove('show');
  overlay.style.opacity = "0";
});
// function openMenu() {
//   document.getElementById("mobile-menu").style.display = "block";
// }

// function closeMenu() {
//   document.getElementById("mobile-menu").style.display = "none";
// }
function openMenu() {
  document.getElementById("mobile-menu").classList.add("active");
}

function closeMenu() {
  document.getElementById("mobile-menu").classList.remove("active");
}


