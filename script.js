import { AlyaSwiper } from './src/plugins/albinaCarousel'

const aboutSlider = new AlyaSwiper()
aboutSlider.init({
    slideSelector: '.slider-products',
    rightButtonSelector: '#nextSlideBtn',
})

const secondSlider = new AlyaSwiper()
secondSlider.init({
    slideSelector: '.combo-products',
    rightButtonSelector: '#nextSlideBtnC',
})
