import {initModals} from './modals/init-modals.js';
import {initMenu} from './components/menu.js';
import {initSwiper} from './components/swiper.js';


window.addEventListener('DOMContentLoaded', () => {
  initMenu();
  window.addEventListener('load', () => {
    initModals();
    initSwiper();
  });
});


const anchors = document.querySelectorAll('a.[href="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href')

    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}


