// const disableScroll = () => {
//   const fixBlocks = document?.querySelectorAll('.fixed-block');
//   const pagePosition = window.scrollY;
//   const paddingOffset = `${(window.innerWidth - document.body.offsetWidth)}px`;

//   document.documentElement.style.scrollBehavior = 'none';
//   fixBlocks.forEach(el => { el.style.paddingRight = paddingOffset; });
//   document.body.style.paddingRight = paddingOffset;
//   document.body.classList.add('dis-scroll');
//   document.body.dataset.position = pagePosition;
//   document.body.style.top = `-${pagePosition}px`;
// }

// import { disableScroll } from '../functions/disable-scroll';


// const enableScroll = () => {
//   const fixBlocks = document?.querySelectorAll('.fixed-block');
//   const body = document.body;
//   const pagePosition = parseInt(document.body.dataset.position, 10);
//   fixBlocks.forEach(el => { el.style.paddingRight = '0px'; });
//   document.body.style.paddingRight = '0px';

//   document.body.style.top = 'auto';
//   document.body.classList.remove('dis-scroll');
//   window.scroll({
//     top: pagePosition,
//     left: 0
//   });
//   document.body.removeAttribute('data-position');
//   document.documentElement.style.scrollBehavior = 'smooth';
// }

// import { enableScroll } from '../functions/enable-scroll';


(function(){
  const burger = document?.querySelector('[data-burger]');
  const menu = document?.querySelector('[data-menu]');
  const menuItems = document?.querySelectorAll('[data-menu-item]');
  const overlay = document?.querySelector('[data-menu-overlay]');
  const login = document?.querySelector('[data-login]');
  const body = document?.querySelector('body');

  burger?.addEventListener('click', (e) => {
    burger?.classList.toggle('burger--active');
    menu?.classList.toggle('nav--active');
    login?.classList.toggle('login--active');
    body?.classList.toggle('overflow-hidden');

    if (menu?.classList.contains('nav--active')) {
      burger?.setAttribute('aria-expanded', 'true');
      burger?.setAttribute('aria-label', 'Закрыть меню');
      // disableScroll();
    } else {
      burger?.setAttribute('aria-expanded', 'false');
      burger?.setAttribute('aria-label', 'Открыть меню');
      // enableScroll();
    }
  });

  overlay?.addEventListener('click', () => {
    burger?.setAttribute('aria-expanded', 'false');
    burger?.setAttribute('aria-label', 'Открыть меню');
    burger.classList.remove('burger--active');
    menu.classList.remove('nav--active');
    login.classList.remove('login--active');
    body?.classList.remove('overflow-hidden');
    // enableScroll();
  });

  menuItems?.forEach(el => {
    el.addEventListener('click', () => {
      burger?.setAttribute('aria-expanded', 'false');
      burger?.setAttribute('aria-label', 'Открыть меню');
      burger.classList.remove('burger--active');
      menu.classList.remove('nav--active');
      login.classList.remove('login--active');
      body?.classList.remove('overflow-hidden');
      // enableScroll();
    });
  });

  login?.addEventListener('click', () => {
    burger?.setAttribute('aria-expanded', 'false');
    burger?.setAttribute('aria-label', 'Открыть меню');
    burger.classList.remove('burger--active');
    menu.classList.remove('nav--active');
    login.classList.remove('login--active');
    body?.classList.remove('overflow-hidden');
    // enableScroll();
  });
})();
