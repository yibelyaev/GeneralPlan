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
    // console.log(slider);
    // if (!slider && isMobile.matches) {
    // } else {
    //   slider.disable();

    // }
  });

}


// const swiperReviews = document.querySelector('.cases__list');

// const isMobile = window.matchMedia('max-width: 640px');

// const initSwiper = () => {
//   if (!isMobile.matches) return;



//   if (swiperReviews) {
//     (() =>
//       new Swiper('.cases__list', { // eslint-disable-line
//         direction: 'horizontal',
//         loop: false,

//         navigation: {
//           nextEl: '.reviews__button--next',
//           prevEl: '.reviews__button--prev',
//         },
//       })
//     )();
//   }
// };




// export { initSwiperReviews };

