import { AlyaSwiper } from './src/plugins/albinaCarousel'
import { TabSelector } from './src/plugins/tabSelector'


const aboutSlider = new AlyaSwiper()
aboutSlider.init({
    slideSelector: '.slider-products',
    rightButtonSelector: '#nextSlideBtn',
})

const tabSelector = new TabSelector()
tabSelector.init('#gift-tabs .tab-link');
