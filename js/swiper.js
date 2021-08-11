const hero_swiper = new Swiper('.hero__swiper', {
  // Optional parameters
  loop: true,
  effect: 'fade',
  crossfade: true,
  autoplay: {
      delay: 6000,
      waitForTransition: true,
  },

});


const galery_swiper = new Swiper('.galery__swiper', {
  // Optional parameters
  // loop: true,
  slidesPerView: 3, // or 'auto'
  slidesPerColumn: 2,
  slidesPerColumnFill: 'row',
  // slidesPerGroup: 3,
  // grabCursor: true,
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

// $('.swiper-pagination').each(function (){
//   $('.swiper-pagination-bullet').attr('tabindex', -1)
// })
