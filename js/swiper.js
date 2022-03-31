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



// (function() {
//   'use strict';

//   // breakpoint where swiper will be destroyed
//   // and switches to a dual-column layout
//   const breakpoint = window.matchMedia( '(min-width:650px)' );

//   // keep track of swiper instances to destroy later
//   let mySwiper;

//   //////////////////////////////////////////////////////////////////
//   //////////////////////////////////////////////////////////////////
//   //////////////////////////////////////////////////////////////////

//   const breakpointChecker = function() {

//     // if larger viewport and multi-row layout needed
//     if ( breakpoint.matches === true ) {

//       // clean up old instances and inline styles when available
// 	  if ( mySwiper !== undefined ) mySwiper.destroy( true, true );

// 	  // or/and do nothing
// 	  return;

//       // else if a small viewport and single column layout needed
//       } else if ( breakpoint.matches === false ) {

//         // fire small viewport version of swiper
//         return enableSwiper();

//       }

//   };

//   //////////////////////////////////////////////////////////////////
//   //////////////////////////////////////////////////////////////////
//   //////////////////////////////////////////////////////////////////

//   const enableSwiper = function() {

//     mySwiper = new Swiper ('.events__list', {
//       loop: true,
//       slidesPerView: 'auto',
//       centeredSlides: true,

//       a11y: true,
//       keyboardControl: true,
//       grabCursor: true,

//       // pagination
//       pagination: '.swiper-pagination',
//       paginationClickable: true,

//     });

//   };

//   //////////////////////////////////////////////////////////////////
//   //////////////////////////////////////////////////////////////////
//   //////////////////////////////////////////////////////////////////

//   // keep an eye on viewport size changes
//   breakpoint.addEventListener(breakpointChecker);

//   // kickstart
//   breakpointChecker();
// })(); /* IIFE end */



const editions_swiper = new Swiper('.editions__swiper', {
  navigation: {
    nextEl: '.editions__button_next',
    prevEl: '.editions__button_prev',
  },

  pagination: {
    el: '.editions__pagination',
    type: 'fraction',
  },

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
      spaceBetween: 49
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


const events_swiper = new Swiper('.events__swiper', {
  slidesPerView: 1,
  grid: {
    rows: 1
  },
  spaceBetween: 0,
  navigation: {
    nextEl: '.events__button_next',
    prevEl: '.events__button_prev',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      grid: {
        rows: 1
      },
      spaceBetween: 0,
      pagination: {
        el: '.events__pagination',
        type: 'bullets',
      },
      navigation: false,
    },

    650: {
      slidesPerView: 2,
      grid: {
        rows: 1
      },
      spaceBetween: 34,
      pagination: false,
      navigation: {
        nextEl: '.events__button_next',
        prevEl: '.events__button_prev',
      }
    },

    860: {
      slidesPerView: 3,
      grid: {
        rows: 1
      },
      spaceBetween: 27,
      pagination: false,
      navigation: {
        nextEl: '.events__button_next',
        prevEl: '.events__button_prev',
      }
    },

    1366: {
      slidesPerView: 3,
      grid: {
        rows: 1
      },
      spaceBetween: 50,
      pagination: false,
      navigation: {
        nextEl: '.events__button_next',
        prevEl: '.events__button_prev',
      }
    }
  },

  autoplay: {
      delay: 6000,
      waitForTransition: true,
  },
});



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
