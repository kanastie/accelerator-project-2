import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const initSwiperReviews = () => {
  const swiperReviews = new Swiper('.reviews__swiper', {
    modules: [Navigation],

    loop: false,

    navigation: {
      nextEl: '.reviews__swiper-pag-btn--next',
      prevEl: '.reviews__swiper-pag-btn--prev',
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 'auto',
        spaceBetween: 30,
      },
      1440: {
        slidesPerView: 'auto',
        spaceBetween: 120,
        touchRatio: 0,
      },
    },
  });
};

export {initSwiperReviews};
