function AlyaSwiper () {
    let currentSlideIndex = 0
    let slides
    let controls = {
        nextBtn: null,
    }

    function prevSlide () {
        let targetIndex

        if (currentSlideIndex - 1 < 0) {
            targetIndex = slides.length - 1
        } else {
            targetIndex = currentSlideIndex - 1
        }

        changeSlide(targetIndex)
    }

    function nextSlide () {
        let targetIndex

        if (currentSlideIndex + 1 >= slides.length) {
            targetIndex = 0
        } else {
            targetIndex = currentSlideIndex + 1
        }

        changeSlide(targetIndex)
    }

    function changeSlide (targetIndex) {
        hideSlide(slides[currentSlideIndex])
        currentSlideIndex = targetIndex
        showSlide(slides[currentSlideIndex])
    }

    function showSlide (slide) {
        slide.classList.add('active')
    }

    function hideSlide (slide) {
        slide.classList.remove('active')
    }

    function init ({slideSelector, rightButtonSelector}) {
        slides = document.querySelectorAll(slideSelector)

        controls.nextBtn = document.querySelector(rightButtonSelector)

        controls.nextBtn.addEventListener('click', nextSlide)

        for (let i = 1; i < slides.length; i++) {
            hideSlide(slides[i])
        }
    }

    return {
        init,
    }
}

export {
    AlyaSwiper,
}
