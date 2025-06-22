document.querySelectorAll('.dropdown-parent').forEach(parent => {
  parent.addEventListener('click', (e) => {
    e.preventDefault();

    // Reset others
    document.querySelectorAll('.dropdown-parent').forEach(other => {
      if (other !== parent) {
        other.classList.remove('link-open');
        const dropdown = other.querySelector('.dropdown, .dropdown-list');
        const arrow = other.querySelector('.arrow');
        if (dropdown) dropdown.style.display = 'none';
        if (arrow) arrow.src = 'assets/images/icon-arrow-down.svg';
      }
    });

    // Toggle current
    const dropdown = parent.querySelector('.dropdown, .dropdown-list');
    const arrow = parent.querySelector('.arrow');
    const isOpen = parent.classList.toggle('link-open');

    if (dropdown) dropdown.style.display = isOpen ? 'block' : 'none';
    if (arrow) {
      arrow.src = isOpen
        ? 'assets/images/icon-arrow-up.svg'
        : 'assets/images/icon-arrow-down.svg';
    }
  });
});


function openMenu() {
  document.getElementById("mobile-menu").classList.add("active");

  const overlay = document.querySelector('.overlay');
  if (overlay) {
    overlay.classList.add('show');
    overlay.style.opacity = "1";
  }
}

function closeMenu() {
  document.getElementById("mobile-menu").classList.remove("active");

  const overlay = document.querySelector('.overlay');
  if (overlay) {
    overlay.classList.remove('show');
    overlay.style.opacity = "0";
  }
}
