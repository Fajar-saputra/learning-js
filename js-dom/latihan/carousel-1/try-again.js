let indexImage = 1;
function showSlides(n) {
    let slides = document.querySelectorAll(".carousel-item");

    if (n > slides.length) {
        indexImage = 1;
    }

    if (n < 1) {
        indexImage = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[indexImage - 1].style.display = "block";
}

showSlides(0);

function navigasi(params) {
    showSlides(indexImage += params)
}

function nextSlide() {
    navigasi(1)
}

function prevSlide() {
    navigasi(-1)
}

let intervalid;

function autoPlay() {
    intervalid = setInterval(() => {
        navigasi(1)
    }, 2000);
}

autoPlay()