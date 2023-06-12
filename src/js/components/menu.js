const isDesktop = () =>  window.matchMedia('(min-width: 1440px)').matches;

export const initMenu = () => {
  const menuButton = document.querySelector('.menu__button');
  const nav = document.querySelector('.menu');
  const navigation = document.querySelector('nav');
  const ACTIVE_CLASS = 'menu--open';
  let expanded = menuButton.getAttribute('aria-expanded') === 'true';

  const toggleMenu = () => {
    expanded = !expanded;
    nav.classList.toggle(ACTIVE_CLASS);
    menuButton.setAttribute('aria-expanded', String(expanded));
  }

  menuButton.addEventListener('click', toggleMenu)

  if (isDesktop) {
    navigation.classList.remove('menu--open')
  }

  window.addEventListener('resize', () => {
    if (isDesktop) {
      navigation.classList.remove('menu--open')
    }
  })

  nav.addEventListener('click', ({target}) => {
    const link = target.closest('a');
    if (!link) return;

    const blockID = link.href;
    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    })
    setTimeout(toggleMenu, 350)
  })
}
