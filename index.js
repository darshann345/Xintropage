// Dropdown menu toggle for desktop and mobile
document.querySelectorAll('.dropdown-parent').forEach(parent => {
  parent.addEventListener('click', (e) => {
    e.preventDefault();

    // Close other dropdowns
    document.querySelectorAll('.dropdown-parent').forEach(other => {
      if (other !== parent) {
        other.classList.remove('link-open');
        const otherDropdown = other.querySelector('.dropdown, .dropdown-list');
        const otherArrow = other.querySelector('.arrow');
        if (otherDropdown) otherDropdown.style.display = 'none';
        if (otherArrow) otherArrow.src = 'assets/images/icon-arrow-down.svg';
      }
    });

    // Toggle current dropdown
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
  const mobileMenu = document.getElementById("mobile-menu");
  mobileMenu.classList.add("active");

  if (!document.querySelector('.overlay')) {
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    overlay.addEventListener('click', closeMenu);
    document.body.appendChild(overlay);
    setTimeout(() => {
      overlay.classList.add('show');
    }, 10);
  }
}

function closeMenu() {
  const mobileMenu = document.getElementById("mobile-menu");
  mobileMenu.classList.remove("active");

  const overlay = document.querySelector('.overlay');
  if (overlay) {
    overlay.classList.remove('show');
    setTimeout(() => overlay.remove(), 300);
  }
}
