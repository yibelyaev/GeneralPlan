import {initModals} from './modals/init-modals.js';
import {initMenu} from './components/menu.js';
import './components/swiper.js';


window.addEventListener('DOMContentLoaded', () => {
  initMenu();
  window.addEventListener('load', () => {
    initModals();
  });
});



