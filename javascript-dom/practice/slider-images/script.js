// get element html
const carouselSlide = document.querySelector(".carousel__slide"),
    carouselImages = document.querySelectorAll(".carousel__slide img"),
    prevBtn = document.querySelector(".btn-prev"),
    nextBtn = document.querySelector(".btn-next"),
    indicators = document.querySelectorAll(".indicator"),
    totalImages = carouselImages.length;

// state current
let currentIndex = 0,
    // variable to aotu slide
    autoSlideInterval;

function updateCarousel() {
    carouselSlide.style.transform = `translateX(${-currentIndex * 100}%)`;


    // update active indicators
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle("active", index === currentIndex);
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel()
    resetAutoSlide()

}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateCarousel()
    resetAutoSlide()
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval)

    autoSlideInterval = setInterval(nextSlide, 5000)
}

nextBtn.addEventListener('click', nextSlide)
prevBtn.addEventListener('click', prevSlide)
