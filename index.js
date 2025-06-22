// Dropdown menu toggle for desktop and mobile
document.querySelectorAll('.dropdown-parent').forEach(parent => {
  parent.addEventListener('click', (e) => {
    e.preventDefault();

    // Close other open dropdowns
    document.querySelectorAll('.dropdown-parent').forEach(other => {
      if (other !== parent) {
        other.classList.remove('link-open');
        const otherDropdown = other.querySelector('.dropdown, .dropdown-list');
        const otherArrow = other.querySelector('.arrow');
        if (otherDropdown) otherDropdown.classList.remove('visible');
        if (otherArrow) otherArrow.src = 'assets/images/icon-arrow-down.svg';
      }
    });

    // Toggle current dropdown
    const dropdown = parent.querySelector('.dropdown, .dropdown-list');
    const arrow = parent.querySelector('.arrow');
    const isOpen = parent.classList.toggle('link-open');

    if (dropdown) {
      dropdown.classList.toggle('visible', isOpen); // Cypress-friendly
    }
    if (arrow) {
      arrow.src = isOpen
        ? 'assets/images/icon-arrow-up.svg'
        : 'assets/images/icon-arrow-down.svg';
    }
  });
});

// Open mobile menu
function openMenu() {
  const mobileMenu = document.getElementById("mobile-menu");
  mobileMenu.classList.add("active");

  if (!document.querySelector('.overlay')) {
    const overlay = document.createElement('div');
    overlay.className = 'overlay show';
    overlay.style.zIndex = '9999'; 
    overlay.addEventListener('click', closeMenu);
    document.body.appendChild(overlay);
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

  document.querySelectorAll('.dropdown-parent').forEach(parent => {
    parent.classList.remove('link-open');
    const dropdown = parent.querySelector('.dropdown, .dropdown-list');
    const arrow = parent.querySelector('.arrow');
    if (dropdown) dropdown.classList.remove('visible');
    if (arrow) arrow.src = 'assets/images/icon-arrow-down.svg';
  });
}
