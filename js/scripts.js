document.addEventListener('DOMContentLoaded', function() {
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
        catalogTabItem.classList.remove('catalog__btn_active');
      });

      document.querySelectorAll('.catalog__item').forEach(function(catalogTabItem) {
        catalogTabItem.classList.remove('catalog__item_active');
      });

      document.querySelector(`[data-path="${path}"]`).classList.add('catalog__btn_active');
      document.querySelector(`[data-target="${path}"]`).classList.add('catalog__item_active');
    });
  });

  // Каталог. Аккордион.
  document.querySelectorAll('.catalog__painters_btn').forEach(function(catalogYearBtn) {
    catalogYearBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path;

      document.querySelectorAll('.catalog__painters_btn-active').forEach(function(catalogYearItem) {
        catalogYearItem.classList.remove('catalog__painters_btn-active');
      });

      document.querySelectorAll('.catalog__painters_list-active').forEach(function(catalogYearItem) {
        catalogYearItem.classList.remove('catalog__painters_list-active');
      });

      document.querySelector(`[data-path="${path}"]`).classList.add('catalog__painters_btn-active');
      document.querySelector(`[data-target="${path}"]`).classList.add('catalog__painters_list-active');
    });
  });

  // Каталог. Выбор художника.
  document.querySelectorAll('.catalog__painter_name').forEach(function(painterBtn) {
    painterBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path;

      document.querySelectorAll('.catalog__painter').forEach(function(painterItem) {
        painterItem.classList.remove('catalog__painter_active');
      });

      document.querySelector(`[data-target="${path}"]`).classList.add('catalog__painter_active');
    });
  });

  // Events. More cards
  document.querySelectorAll('.events__more').forEach(function(painterBtn) {
    painterBtn.addEventListener('click', function (event) {

      document.querySelectorAll('.events__item_disabled').forEach(function(painterItem) {
        painterItem.classList.remove('events__item_disabled');
      });

      painterBtn.classList.add('events__item_disabled');
    });
  });

  // Contacts
  ymaps.ready(init);
  function init(){
    var myMap = new ymaps.Map("contacts__map", {
      center: [55.76, 37.64],
      zoom: 15
    });
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
