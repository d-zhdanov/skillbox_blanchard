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


  document.querySelectorAll('.galery__slide').forEach(function(el) {
    el.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path;



      // document.querySelectorAll('.catalog__painters-btn-active').forEach(function(catalogYearItem) {
      //   catalogYearItem.classList.remove('catalog__painters-btn-active');
      // });

      // document.querySelectorAll('.catalog__painters-list-active').forEach(function(catalogYearItem) {
      //   catalogYearItem.classList.remove('catalog__painters-list-active');
      // });

      // document.querySelector(`[data-path="${path}"]`).classList.add('catalog__painters-btn-active');
      overlay.style.display = 'block';
      // overlay.style.overflow = 'scroll';
      document.querySelector(`[data-target="${path}"]`).style.display = 'flex';
      document.querySelector('body').style.overflow = 'hidden';
      // document.body.style.top = `-${window.scrollY}px`;

    });
  });


  // galeryShow?.forEach(el => {
  //   el.addEventListener('click', () => {
  //     const gModalImage = el.firstElementChild.cloneNode(true);
  //     el.classList.toggle('galery--active');
  //     overlay.style.display = 'block';
  //     overlay.appendChild(gModalImage);
  //   });
  // });

  overlay?.addEventListener('click', () => {
    overlay?.children.forEach(el => {
      el.style.display = 'none';
    });

    // galeryShow.style.display = 'none';
    // overlay.removeChild(overlay.firstElementChild);
    // overlay.classList.remove('galery--active');
    overlay.style.display = 'none';
    // document.querySelector('body').style.overflow = 'auto';
    // overlay.style.overflow = 'auto';
    // const scrollY = document.body.style.top;
    // // document.body.style.position = '';
    // document.body.style.top = '';
    // window.scrollTo(0, parseInt(scrollY || '0') * -1);
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
