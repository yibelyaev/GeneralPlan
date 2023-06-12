import {Modals} from './modals.js';

let modals;

const settings = {
  'default': {
    preventDefault: true,
    stopPlay: true,
    lockFocus: true,
    startFocus: false,
    focusBack: false,
    resetScrollPos: false,
    eventTimeout: 400,
    openCallback: false,
    closeCallback: false,
  }
};

const initModals = () => {
  const modalElements = document.querySelectorAll('.modal');
  if (modalElements.length) {
    modalElements.forEach((el) => {
      setTimeout(() => {
        el.classList.remove('modal--preload');
      }, 100);
    });
  }

  modals = new Modals(settings);
  window.modals = modals;
};

export {modals, initModals};
