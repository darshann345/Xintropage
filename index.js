document.querySelectorAll('.dropdown-parent').forEach(parent => {
  parent.addEventListener('click', (e) => {
    e.preventDefault();

    document.querySelectorAll('.dropdown-parent').forEach(other => {
      if (other !== parent) {
        other.classList.remove('link-open');
        const otherDropdown = other.querySelector('.dropdown, .dropdown-list');
        const otherArrow = other.querySelector('.arrow');
        if (otherDropdown) otherDropdown.classList.remove('visible');
        if (otherArrow) otherArrow.src = 'assets/images/icon-arrow-down.svg';
      }
    });

    const dropdown = parent.querySelector('.dropdown, .dropdown-list');
    const arrow = parent.querySelector('.arrow');
    const isOpen = parent.classList.toggle('link-open');

    if (dropdown) {
      dropdown.classList.toggle('visible', isOpen);
    }
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
    overlay.className = 'overlay show';
    overlay.style.zIndex = '9000'; 
    document.body.appendChild(overlay);
    overlay.addEventListener('click', closeMenu);
  }

  const closeBtn = document.querySelector('.close-menu');
  if (closeBtn) {
    closeBtn.style.zIndex = '10001';
    closeBtn.style.position = 'relative';
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
