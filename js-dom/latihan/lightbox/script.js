const boxImages = document.querySelectorAll(".box__image"),
    totalImages = boxImages.length,
    lightBox = document.querySelector(".lightbox"),
    lightboxImg = document.querySelector(".lightbox__img"),
    lightBoxClose = document.querySelector(".lightbox__close"),
    lightBoxCounter = document.querySelector(".caption__counter");

let itemIndex = 0;

for (let i = 0; i < totalImages; i++) {
    boxImages[i].addEventListener("click", () => {
        itemIndex = i;
        toggleLightbox();
        changeBoxImages()
    });
}

function toggleLightbox() {
    lightBox.classList.toggle("open");
}

function changeBoxImages() {
    imgSrc = boxImages[itemIndex].querySelector('.box__image img').getAttribute('src');

    lightboxImg.src = imgSrc;

    lightBoxCounter.textContent = itemIndex + " of " + totalImages;
}

function nextItem() {
    if (itemIndex === totalImages - 1) {
        itemIndex=0;
    } else {
        itemIndex++;
    }
    changeBoxImages();
}

function prevItem() {
    if (itemIndex === 0) {
        itemIndex = toggleLightbox - 1;
    } else {
        itemIndex--;
    }
    changeBoxImages();
}

// close
lightBox.addEventListener("click", (event) => {
    if (event.target === lightBoxClose || event.target === lightBox) {
        toggleLightbox();
    }
});
