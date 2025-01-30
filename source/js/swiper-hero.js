import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const initSwiperHero = () => {
  const swiperPromo = new Swiper('.hero__swiper', {
    modules: [Pagination],

    loop: true,
    slidesPerView: 1,

    pagination: {
      el: '.hero__pagination',
      bulletClass: 'hero__pagination-btn',
      bulletActiveClass: 'hero__pagination-btn--active',
      currentClass: 'hero__swiper-slide--current',
      clickable: true,
      bulletElement: 'button',
    },
  });
};

export {initSwiperHero};
