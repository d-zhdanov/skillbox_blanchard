document.addEventListener('DOMContentLoaded', function() {

  // Main menu. Smooth move
  const anchors = document.querySelectorAll('a[href*="#"]');

  for (let anchor of anchors) {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const blockID = anchor.getAttribute('href').substring(1);
      console.log(blockID);
      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    })
  }


  // document.querySelectorAll('a[href^="#"]').forEach(link => {
  //   link.addEventListener('click', function(e) {
  //     e.preventDefault();

  //     let href = this.getAttribute('href').substring(1);
  //     const scrollTarget = document.getElementById(href);
  //     // const topOffset = document.querySelector('.scrollto').offsetHeight;
  //     const topOffset = 0; // если не нужен отступ сверху
  //     const elementPosition = scrollTarget.getBoundingClientRect().top;
  //     const offsetPosition = elementPosition - topOffset;

  //     window.scrollBy({
  //       top: offsetPosition,
  //       behavior: "smooth"
  //     });
  //   });
  // });


  // Подменю. Выпадающее меню
  const params = {
    btnClassName: "js-header-dropdown-btn",
    dropClassName: "js-header-drop",
    activeClassName: "is-active",
    disabledClassName: "is-disabled"
  }

  function onDisable(evt) {
    if (evt.target.classList.contains(params.disabledClassName)) {
      evt.target.classList.remove(params.disabledClassName, params.activeClassName);
      evt.target.removeEventListener("animationend", onDisable);
    }
  }

  function setMenuListener() {
    document.body.addEventListener("click", (evt) => {
      const activeElements = document.querySelectorAll(`.${params.btnClassName}.${params.activeClassName}, .${params.dropClassName}.${params.activeClassName}`);

      if (activeElements.length && !evt.target.closest(`.${params.activeClassName}`)) {
        activeElements.forEach((current) => {
          if (current.classList.contains(params.btnClassName)) {
            current.classList.remove(params.activeClassName);
          } else {
            current.classList.add(params.disabledClassName);
          }
        });
      }

      if (evt.target.closest(`.${params.btnClassName}`)) {
        const btn = evt.target.closest(`.${params.btnClassName}`);
        const path = btn.dataset.path;
        const drop = document.querySelector(`.${params.dropClassName}[data-target="${path}"]`);

        btn.classList.toggle(params.activeClassName);

        if (!drop.classList.contains(params.activeClassName)) {
          drop.classList.add(params.activeClassName);
          drop.addEventListener("animationend", onDisable);
        } else {
          drop.classList.add(params.disabledClassName);
        }
      }
    });
  }

  setMenuListener();


  // Galery. Filter
  const galeryFilter = document.getElementById('galeryFilter');
  const choicesGalery = new Choices(galeryFilter, {
    searchEnabled: false,
    itemSelectText: '',
    removeItemButton: true,
  });


  // // Editions. Filter
  // const editionsFilter = document.getElementById('editionsFilter');
  // const choicesEditions = new Choices(editionsFilter, {
  //   searchEnabled: false,
  //   itemSelectText: '',
  // });

  // Табы для Каталога. Страны.
  document.querySelectorAll('.catalog__btn').forEach(function(catalogTabBtn) {
    catalogTabBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path;

      document.querySelectorAll('.catalog__btn').forEach(function(catalogTabItem) {
        catalogTabItem.classList.remove('catalog__btn-active');
      });

      document.querySelectorAll('.catalog__item').forEach(function(catalogTabItem) {
        catalogTabItem.classList.remove('catalog__item-active');
      });

      document.querySelector(`[data-path="${path}"]`).classList.add('catalog__btn-active');
      document.querySelector(`[data-target="${path}"]`).classList.add('catalog__item-active');
    });
  });

  // Каталог. Аккордион.
  document.querySelectorAll('.catalog__painters-btn').forEach(function(catalogYearBtn) {
    catalogYearBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path;

      document.querySelectorAll('.catalog__painters-btn-active').forEach(function(catalogYearItem) {
        catalogYearItem.classList.remove('catalog__painters-btn-active');
      });

      document.querySelectorAll('.catalog__painters-list-active').forEach(function(catalogYearItem) {
        catalogYearItem.classList.remove('catalog__painters-list-active');
      });

      document.querySelector(`[data-path="${path}"]`).classList.add('catalog__painters-btn-active');
      document.querySelector(`[data-target="${path}"]`).classList.add('catalog__painters-list-active');
    });
  });

  // Каталог. Выбор художника.
  document.querySelectorAll('.catalog__painter-name').forEach(function(painterBtn) {
    painterBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path;

      document.querySelectorAll('.catalog__painter').forEach(function(painterItem) {
        painterItem.classList.remove('catalog__painter-active');
      });

      document.querySelector(`[data-target="${path}"]`).classList.add('catalog__painter-active');
    });
  });

  // Projects. Tooltippy
  tippy('.js-tooltip-btn', {
    theme: 'amethyst',
    maxWidth: 264,
  });


  // Contacts
  ymaps.ready(init);
  function init(){
    var myMap = new ymaps.Map("contacts__map", {
      center: [55.76, 37.64],
      zoom: 15,
      controls: ['zoomControl', 'geolocationControl'],
    })
  };


  var selector = document.querySelector("input[type='tel']");
  var im = new Inputmask("+7 (999)-999-99-99");
  im.mask(selector);

  new JustValidate('.contacts__form', {
    rules: {
      name: {
        required: true,
        minLength: 2,
        maxLength: 30
      },

      tel: {
        required: true,
        function: (name, value) => {
          const phone = selector.inputmask.unmaskedvalue()
          return Number(phone) && phone.length === 10
        }
      },

    },

    messages: {
      name: 'Как вас зовут?',
      tel: 'Укажите ваш телефон',
    }
  });
});
