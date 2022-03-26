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




  // Galery. Filter
  const galery_filter = document.querySelector('#galery__filter');
  const choices = new Choices(galery_filter, {
    searchEnabled: false,
    itemSelectText: '',
    removeItemButton: true,
  });

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

  // Events. More cards
  document.querySelectorAll('.events__more').forEach(function(painterBtn) {
    painterBtn.addEventListener('click', function (event) {

      document.querySelectorAll('.events__list').forEach(function(painterItem) {
        painterItem.classList.add('flex-wrap');
      });

      document.querySelectorAll('.events__item').forEach(function(painterItem) {
        painterItem.style.display = 'block';
      });

      painterBtn.style.display = 'none';
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
      // controls: ['zoomControl', 'geolocationControl'],
      controls: [],
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
