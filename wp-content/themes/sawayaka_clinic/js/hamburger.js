const hamburger = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.nav-and-cta-sp');
const links = document.querySelectorAll('.nav-and-cta-sp a');
const html = document.documentElement;
const body = document.body;

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('is-open');
  menu.classList.toggle('is-open');
  html.classList.toggle('is-fixed');
  body.classList.toggle('is-fixed');
});

links.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('is-open');
    menu.classList.remove('is-open');
  });
});

function setVH() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

setVH();
window.addEventListener('resize', setVH);
