
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile_nav_menu');
  const closeBtn = document.querySelector('.close_btn');

  hamburger.addEventListener('click', () => {
    mobileMenu.style.display = 'flex';
  });

  closeBtn.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
  });

