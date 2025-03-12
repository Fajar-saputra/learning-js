// let slideIndex = 1;

// function showSlides(currentSlide) {
//     let slides = document.getElementsByClassName("carousel-item");

//     if (currentSlide > slides.length) {
//         slideIndex = 1;
//     }

//     if (currentSlide < 1) {
//         slideIndex = slides.length;
//     }

//     for (let i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }

//     slides[slideIndex - 1].style.display = "block";
// }

// showSlides(slideIndex);

// function navigateSlides(offset) {
//     showSlides((slideIndex += offset));
// }

// function currentSlide(slideNumber) {
//     showSlides((slideIndex = slideNumber));
// }

// function prevSlide() {
//     navigateSlides(-1);
//     console.log("tess prev");
// }
// function nextSlide() {
//     navigateSlides(1);
//     console.log("tess next");
// }

// function autoPlay() {
//     let intervalid = setInterval(() => {
//         navigateSlides(1);
//     }, 3000);
// }

// autoPlay();

let slideIndex = 1;

function showSlides(params) {
    let slides = document.querySelectorAll(".carousel-item");

    if (params > slides.length) {
        slideIndex = 1;
    }

    if (params < slides.length) {
        slideIndex = slides.length;
    }

    for (let index = 0; index < slides.length; index++) {
        slides[index].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}

showSlides(slideIndex);

function navigasi(params) {
    showSlides((slideIndex += params));
}

function prevSlide() {
    navigasi(-1);
}
function nextSlide() {
    navigasi(1);
}

function autoPlay() {
    
    let intervalid = setInterval(() => {
        navigasi(1);
    }, 3000);
}

autoPlayj();
