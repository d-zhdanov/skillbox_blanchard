const hero_swiper = new Swiper('.hero__swiper', {
  // Optional parameters
  loop: true,
  allowTouchMove: false,
  effect: 'fade',
  speed: 10000,
  fadeEffect: {
    crossFade: true,
  },
  autoplay: {
    delay: 10000,
  }

});


let galery_swiper = new Swiper(".galery__swiper", {
  slidesPerView: 1,
  grid: {
    rows: 1,
    fill: "row"
  },
  spaceBetween: 20,
  pagination: {
    el: ".galery__pagination",
    type: "fraction"
  },
  navigation: {
    nextEl: ".galery__button_next",
    prevEl: ".galery__button_prev"
  },

  breakpoints: {
    650: {
      slidesPerView: 2,
      grid: {
        rows: 2
      },
      spaceBetween: 34
    },

    1366: {
      slidesPerView: 3,
      grid: {
        rows: 2
      },
      spaceBetween: 50
    }
  },

  a11y: false,
});



// const editions_swiper = new Swiper('.editions__swiper', {
//   navigation: {
//     nextEl: '.editions__button_next',
//     prevEl: '.editions__button_prev',
//   },

//   pagination: {
//     el: '.editions__pagination',
//     type: 'fraction',
//   },

//   breakpoints: {
//     320: {
//       slidesPerView: 2,
//       grid: {
//         rows: 1
//       },
//       spaceBetween: 30,
//     },

//     860: {
//       slidesPerView: 2,
//       grid: {
//         rows: 1
//       },
//       spaceBetween: 49,
//     },

//     1366: {
//       slidesPerView: 3,
//       grid: {
//         rows: 1
//       },
//       spaceBetween: 50,
//     }
//   },

//   autoplay: {
//       delay: 6000,
//       waitForTransition: true,
//   },
// });




const projects_swiper = new Swiper('.projects__swiper', {
  navigation: {
    nextEl: '.projects__button_next',
    prevEl: '.projects__button_prev',
  },

  // pagination: {
  //   el: '.projects__pagination',
  //   type: 'fraction',
  // },

  breakpoints: {
    320: {
      slidesPerView: 2,
      grid: {
        rows: 1
      },
      spaceBetween: 34
    },

    860: {
      slidesPerView: 2,
      grid: {
        rows: 1
      },
      spaceBetween: 50
    },

    1366: {
      slidesPerView: 3,
      grid: {
        rows: 1
      },
      spaceBetween: 50
    }
  },

  autoplay: {
      delay: 6000,
      waitForTransition: true,
  },
});

// $('.swiper-pagination').each(function (){
//   $('.swiper-pagination-bullet').attr('tabindex', -1)
// })
