import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const initSwiperTors = () => {
  const swiperTours = new Swiper('.tours__swiper', {
    modules: [Navigation],

    loop: false,

    navigation: {
      nextEl: '.tours__swiper-pag-btn--next',
      prevEl: '.tours__swiper-pag-btn--prev',
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
        touchRatio: 1,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 18,
        touchRatio: 1,
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 30,
        touchRatio: 0,
      },
    },
  });
};

export {initSwiperTors};
