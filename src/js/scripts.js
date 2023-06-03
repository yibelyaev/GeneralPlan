const menuButton = document.querySelector('.menu__button');
const nav = document.querySelector('.menu')


menuButton.addEventListener('click', () => {
  let expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', !expanded);
  nav.classList.toggle('menu--open')
})
