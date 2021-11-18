// Mobile Menu Toggle

const hamburgerButton = document.querySelector('.hamburger');

hamburgerButton.addEventListener( 'click', function() {
  document.documentElement.classList.toggle('mobile-menu-open');
  })