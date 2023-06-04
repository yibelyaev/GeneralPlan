import {initModals} from './modals/init-modals.js';
import {initMenu} from './components/menu.js';

window.addEventListener('DOMContentLoaded', () => {
  initMenu();
  window.addEventListener('load', () => {
    initModals();
  });
});
