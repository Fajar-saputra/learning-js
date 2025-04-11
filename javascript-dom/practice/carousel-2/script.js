// get element
const carouselSlide = document.querySelector(".carousel-slide"),
    carouselImages = document.querySelectorAll(".carousel-slide img"),
    prevBtn = document.querySelector(".prev-btn"),
    nextBtn = document.querySelector(".next-btn"),
    indicators = document.querySelectorAll(".indicator"),
    totalImages = carouselImages.length;

let currentIndex = 0,
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
    updateCarousel();
    resetAutoSlide();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateCarousel();
    resetAutoSlide();
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval)

    autoSlideInterval = setInterval(nextSlide, 3000);
}


// add even listener for btn next
nextBtn.addEventListener('click', nextSlide)
prevBtn.addEventListener('click', prevSlide)