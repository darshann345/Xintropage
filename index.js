document.querySelectorAll('.dropdown-parent > a').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const parent = anchor.parentElement;
    const isOpen = parent.classList.contains('link-open');

    document.querySelectorAll('.dropdown-parent').forEach(p => {
      p.classList.remove('link-open');
      const dropdown = p.querySelector('.dropdown, .dropdown-list');
      const arrow = p.querySelector('.arrow');
      if (dropdown) dropdown.classList.remove('visible');
      if (arrow) arrow.src = 'assets/images/icon-arrow-down.svg';
    });

    if (!isOpen) {
      parent.classList.add('link-open');
      const dropdown = parent.querySelector('.dropdown, .dropdown-list');
      const arrow = parent.querySelector('.arrow');
      if (dropdown) dropdown.classList.add('visible');
      if (arrow) arrow.src = 'assets/images/icon-arrow-up.svg';
    }
  });
});

function openMenu() {
  const mobileMenu = document.getElementById("mobile-menu");
  mobileMenu.classList.add("active");

  let overlay = document.querySelector('.overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'overlay show';
    overlay.style.zIndex = '9999';
    document.body.appendChild(overlay);
    overlay.addEventListener('click', closeMenu);
  } else {
    overlay.classList.add('show');
  }

  const closeBtn = document.querySelector('.close-menu');
  if (closeBtn) {
    closeBtn.style.zIndex = '10000';
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
