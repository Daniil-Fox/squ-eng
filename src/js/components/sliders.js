import {Swiper} from 'swiper'
import { Pagination } from 'swiper/modules'

Swiper.use([Pagination])

const quizSlider = new Swiper('.quiz__slider', {
  slidesPerView: 1,
  spaceBetween: 24
})

const quizInputs = document.querySelectorAll('.quiz__slider input[type="radio"]')

quizInputs.forEach(el => {
  el.addEventListener('click', e => {
    setTimeout(()=>{
      quizSlider.slideNext()
    }, 100)
  })
})





window.addEventListener('DOMContentLoaded', () => {

  const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
    let swiper;

    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function(className, settings) {
      swiper = new Swiper(className, settings);

      if (callback) {
        callback(swiper);
      }
    }

    const checker = function() {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);
        return;
      }
    };

    breakpoint.addEventListener('change', checker);
    checker();
  }

  const someFunc = (instance) => {
    if (instance) {
      instance.on('slideChange', function (e) {
        console.log('*** mySwiper.activeIndex', instance.activeIndex);
      });
    }
  };

  const planSliders = document.querySelectorAll('.plan__content')

  planSliders.forEach(el => {
    resizableSwiper(
      '(max-width: 900px)',
      el,
      {
        spaceBetween: 24,
        slidesPerView: 'auto',
        pagination: {
          el: '.plan__pagination',
          clickable: true
        }
      },
    );
  })
});
