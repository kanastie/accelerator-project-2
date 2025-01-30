import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const gallerySectionElement = document.querySelector('.gallery');
const gallerySwiperElement = gallerySectionElement.querySelector('.gallery__swiper');
const gallerySwiperWrapperElement = gallerySectionElement.querySelector('.gallery__gallery');
const gallerySwiperSlidesElements = gallerySectionElement.querySelectorAll('.gallery__slide');


const slider = document.querySelector('.gallery__swiper');
const windowWidth = window.matchMedia('(min-width: 1440px)');

const mySwiper = new Swiper(slider, {
  modules: [Navigation],

  loop: true,
  slidesPerView: 'auto',
  loopAddBlankSlides: false,

  navigation: {
    nextEl: '.gallery__swiper-pag-btn--next',
    prevEl: '.gallery__swiper-pag-btn--prev',
  },

  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 5,
      slidesPerGroup: 2,
      touchRatio: 1,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 5,
      slidesPerGroup: 2,
      touchRatio: 1,
    },
  }
});

const initSwiperGallery = function () {

  if (windowWidth.matches) {
    mySwiper.destroy();
    gallerySwiperWrapperElement.removeAttribute('style');
    updateContainerGallery ();
  } else {
    mySwiper.init();
  }
};

function updateContainerGallery () {
  if (windowWidth.matches) {
    gallerySwiperElement.classList.remove('swiper');
    gallerySwiperWrapperElement.classList.remove('swiper-wrapper');
    gallerySwiperSlidesElements.forEach((item) => {
      item.classList.remove('swiper-slide');
    });
  }
}

export {initSwiperGallery};
