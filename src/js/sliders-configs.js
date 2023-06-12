import {MEDIA} from "./utils/media.js";
export const CONFIGS = {
  cases: {
    loop: false,

    navigation: {
      nextEl: '.reviews__button--next',
      prevEl: '.reviews__button--prev',
    },
    scrollbar: {
      el: '.cases__slider .swiper-scrollbar',
      draggable: true,
    },
    on: {
      resize() {
        !MEDIA.sm.matches
          ? this.destroy()
          : this.init();
      },
      init() {
        if (!MEDIA.sm.matches) {
          this.destroy()
        }
      }
    }
  },
  reviews: {
    navigation: {
      nextEl: '.reviews__button-wrapper .reviews__button--next',
      prevEl: '.reviews__button-wrapper .reviews__button--prev',
    },
    slideClass: 'reviews__item',
    breakpoints: {
      768: {
        slidesPerView: 2
      }
    },
    on: {
      resize() {
        !MEDIA.sm.matches
          ? this.destroy()
          : this.init();
      },
      init() {
        if (!MEDIA.sm.matches) {
          this.destroy()
        }
      }
    }
  },
  customers: {
    slidesPerView: 'auto',
    scrollbar: {
      el: '.customers__slider .swiper-scrollbar',
      draggable: true,
    },
    on: {
      resize() {
        !MEDIA.sm.matches
          ? this.destroy()
          : this.init();
      },
      init() {
        if (!MEDIA.sm.matches) {
          this.destroy()
        }
      }
    }
  },
  developers: {
    scrollbar: {
      el: '.customers__list-developers .swiper-scrollbar',
      draggable: true,
    },
    on: {
      resize() {
        !MEDIA.sm.matches
          ? this.destroy()
          : this.init();
      },
      init() {
        if (!MEDIA.sm.matches) {
          this.destroy()
        }
      }
    }
  }
}
