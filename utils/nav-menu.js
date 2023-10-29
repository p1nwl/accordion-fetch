const navLinks = document.querySelector('.nav-links');
const navToggle = document.querySelector('.mobile-nav-toggle');
const lines = document.querySelectorAll('.button-line')

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active')
  lines.forEach(line => {
    line.classList.toggle('active')
  });
});