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
