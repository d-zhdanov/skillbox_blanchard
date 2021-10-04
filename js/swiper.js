const hero_swiper = new Swiper('.hero__swiper', {
  // Optional parameters
  loop: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  autoplay: {
      delay: 6000,
      waitForTransition: true,
  },

});


const galery_swiper = new Swiper('.galery__swiper', {
  // Optional parameters
  grid: {
    rows: 2,
    fill: 'row',
  },
  slidesPerView: 3, // or 'auto'
  spaceBetween: 50,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.galery__pagination',
    type: 'fraction',
  },

  autoplay: {
      delay: 6000,
      waitForTransition: true,
  },
});


const editions_swiper = new Swiper('.editions__swiper', {
  // Optional parameters
  // loop: true,
  slidesPerView: 3, // or 'auto'
  // grabCursor: true,
  spaceBetween: 50,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.editions__pagination',
    type: 'fraction',
  },

  autoplay: {
      delay: 6000,
      waitForTransition: true,
  },
});


const projects_swiper = new Swiper('.projects__swiper', {
  // Optional parameters
  // loop: true,
  slidesPerView: 3, // or 'auto'
  // grabCursor: true,
  spaceBetween: 50,

  navigation: {
    nextEl: '.projects__btn_next',
    prevEl: '.projects__btn_prev',
  },

  // pagination: {
  //   el: '.projects__pagination',
  //   type: 'fraction',
  // },

  autoplay: {
      delay: 6000,
      waitForTransition: true,
  },
});

// $('.swiper-pagination').each(function (){
//   $('.swiper-pagination-bullet').attr('tabindex', -1)
// })
