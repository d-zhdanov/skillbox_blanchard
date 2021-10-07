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


let galery_swiper = new Swiper(".galery__swiper", {
  slidesPerView: 1,
  grid: {
    rows: 1,
    fill: "row"
  },
  spaceBetween: 20,
  pagination: {
    el: ".galery__slider .galery__pagination",
    type: "fraction"
  },
  navigation: {
    nextEl: ".galery__button_next",
    prevEl: ".galery__button_prev"
  },

  breakpoints: {
    441: {
      slidesPerView: 2,
      grid: {
        rows: 2
      },
      spaceBetween: 30
    },

    1200: {
      slidesPerView: 3,
      grid: {
        rows: 2
      },
      spaceBetween: 50
    }
  },

  a11y: false,
});



// const galery_swiper = new Swiper('.galery__swiper', {
//   // Optional parameters
//   grid: {
//     rows: 2,
//     fill: 'row',
//   },
//   slidesPerView: 3, // or 'auto'
//   spaceBetween: 50,

//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   pagination: {
//     el: '.galery__pagination',
//     type: 'fraction',
//   },

//   autoplay: {
//       delay: 6000,
//       waitForTransition: true,
//   },
// });


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
