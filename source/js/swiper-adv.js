import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const advSectionElement = document.querySelector('.advantages');
const advSwiperElement = advSectionElement.querySelector('.advantages__swiper');
const advSwiperWrapperElement = advSectionElement.querySelector('.advantages__list');
const advSwiperSlidesElements = advSectionElement.querySelectorAll('.advantages__item');


const slider = document.querySelector('.advantages__swiper');
const windowWidth = window.matchMedia('(min-width: 1440px)');

const mySwiper = new Swiper(slider, {
  modules: [Navigation],

  loop: true,

  navigation: {
    nextEl: '.advantages__swiper-pag-btn--next',
    prevEl: '.advantages__swiper-pag-btn--prev',
  },

  breakpoints: {
    1440: {
      slidesPerView: 'auto',
      spaceBetween: 30,
      touchRatio: 0,
    },
  },
});

const initSwiperAdv = function () {

  if (windowWidth.matches) {
    mySwiper.init();
  } else {
    mySwiper.destroy();
    advSwiperWrapperElement.removeAttribute('style');
    updateContainerAdv();
  }
};

function updateContainerAdv () {
  if (!windowWidth.matches) {
    advSwiperElement.classList.remove('swiper');
    advSwiperWrapperElement.classList.remove('swiper-wrapper');
    advSwiperSlidesElements.forEach((item) => {
      item.classList.remove('swiper-slide');
    });
  }
}

export {initSwiperAdv};
