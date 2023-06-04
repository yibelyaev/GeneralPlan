export const initMenu = () => {
  const menuButton = document.querySelector('.menu__button');
  const nav = document.querySelector('.menu')
const navigation = document.querySelector('nav')


menuButton.addEventListener('click', () => {
  let expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', !expanded);
  nav.classList.toggle('menu--open')
})

const isDesktop = () =>  window.matchMedia('(min-width: 1440px)').matches;

if (isDesktop) {
  navigation.classList.remove('menu--open')
}

window.addEventListener('resize', () => {
  if (isDesktop || navigation.classList.contains('menu--open')) {
    navigation.classList.remove('menu--open')
  }
})
}
