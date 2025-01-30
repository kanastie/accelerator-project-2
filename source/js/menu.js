const navElement = document.querySelector('.header__nav');
const navBtnElement = navElement.querySelector('.nav__toggle');
const navListElement = navElement.querySelector('.nav__list');
const navItemsElements = navElement.querySelectorAll('.nav__item');

const blockOverlay = () => {
  if (navListElement.classList.contains('nav__list--open')) {
    document.body.style.overflow = 'hidden';
    document.body.classList.add('blocked-overlay');
  } else {
    document.body.style.overflow = 'auto';
    document.body.classList.remove('blocked-overlay');
  }
};

const toggleMenu = () => {
  navBtnElement.addEventListener('click', () => {
    navListElement.classList.toggle('nav__list--open');
    blockOverlay();
  });
};

const chooseItem = () => {
  navItemsElements.forEach((item) => {
    item.addEventListener('click', () => {
      navListElement.classList.remove('nav__list--open');
      blockOverlay();
    });
  });
};

export {toggleMenu, chooseItem};
