import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const initSwiperTraining = () => {
  const swiperTraining = new Swiper('.training__swiper', {
    modules: [Navigation],

    loop: false,

    navigation: {
      nextEl: '.training__swiper-pag-btn--next',
      prevEl: '.training__swiper-pag-btn--prev',
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
        initialSlide: 2,
        touchRatio: 1,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
        initialSlide: 0,
        touchRatio: 1,
      },
      1440: {
        slidesPerView: 4,
        spaceBetween: 20,
        touchRatio: 0,
        initialSlide: 0,
      },
    },
  });
};

export {initSwiperTraining};
