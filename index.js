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
  document.getElementById("mobile-menu").classList.add("active");
  const overlay = document.querySelector('.overlay');
  if (overlay) overlay.classList.add('show');
}

function closeMenu() {
  document.getElementById("mobile-menu").classList.remove("active");
  const overlay = document.querySelector('.overlay');
  if (overlay) overlay.classList.remove('show');

  document.querySelectorAll('.dropdown-parent').forEach(parent => {
    parent.classList.remove('link-open');
    const dropdown = parent.querySelector('.dropdown, .dropdown-list');
    const arrow = parent.querySelector('.arrow');
    if (dropdown) dropdown.classList.remove('visible');
    if (arrow) arrow.src = 'assets/images/icon-arrow-down.svg';
  });
}
