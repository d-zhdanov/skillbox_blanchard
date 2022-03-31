(function(){
  // const burger = document?.querySelector('[data-burger]');
  // const menu = document?.querySelector('[data-menu]');
  const galeryShow = document?.querySelectorAll('.galery__slide');
  const overlay = document?.querySelector('.modal');
  // const login = document?.querySelector('[data-login]');

  // galeryShow?.addEventListener('click', (e) => {
  //   // .classList.toggle('galery--active');

  //   // menu?.classList.toggle('nav--active');
  //   // login?.classList.toggle('login--active');

  //   // if (menu?.classList.contains('nav--active')) {
  //   //   // burger?.setAttribute('aria-expanded', 'true');
  //   //   // burger?.setAttribute('aria-label', 'Закрыть меню');
  //   //   // disableScroll();
  //   // } else {
  //   //   // burger?.setAttribute('aria-expanded', 'false');
  //   //   // burger?.setAttribute('aria-label', 'Открыть меню');
  //   //   // enableScroll();
  //   // }
  // });


  galeryShow?.forEach(el => {
    el.addEventListener('click', () => {
      const gModalImage = el.firstElementChild.cloneNode(true);
      el.classList.toggle('galery--active');
      overlay.style.display = 'block';
      overlay.appendChild(gModalImage);
    });
  });

  overlay?.addEventListener('click', () => {
    overlay.removeChild(overlay.firstElementChild);
    overlay.classList.remove('galery--active');
    overlay.style.display = 'none';
  });

  // menuItems?.forEach(el => {
  //   el.addEventListener('click', () => {
  //     burger?.setAttribute('aria-expanded', 'false');
  //     burger?.setAttribute('aria-label', 'Открыть меню');
  //     burger.classList.remove('burger--active');
  //     menu.classList.remove('nav--active');
  //     login.classList.remove('login--active');
  //     // enableScroll();
  //   });
  // });

  // login?.addEventListener('click', () => {
  //   burger?.setAttribute('aria-expanded', 'false');
  //   burger?.setAttribute('aria-label', 'Открыть меню');
  //   burger.classList.remove('burger--active');
  //   menu.classList.remove('nav--active');
  //   login.classList.remove('login--active');
  //   // enableScroll();
  // });
})();
