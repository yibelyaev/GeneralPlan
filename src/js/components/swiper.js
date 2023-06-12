export const initSwiper = () => {
  let slider = null;
  const isMobile = window.matchMedia("(max-width: 640px)");
  // const isNeedSlider = () => !slider && isMobile.matches;

  const createSlider = () => {
    slider = new Swiper('.cases__list', {
              direction: 'horizontal',
              loop: false,

              navigation: {
                nextEl: '.reviews__button--next',
                prevEl: '.reviews__button--prev',
              },
              scrollbar: {
                el: '.swiper-scrollbar',
                draggable: true,
              },
            })
  }

  if (isMobile.matches) {
    createSlider()
  }

  window.addEventListener('resize', () => {
    if (!isMobile.matches && slider) {
      slider.disable()
    } else {
      slider.enable()
    }
  });
}

