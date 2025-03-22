// setInterval adalah fungsi yang digunakan untuk menjalankan kode secara berulang-ulang dengan interval waktu tertentu
// contoh

// let angka = 1;
// function belajarInterval() {
//     let interval = setInterval(() => {
//         console.log(`Contoh sederhana penggunaan setInterval ${angka}`);
//         angka++;
//         if (angka === 8) {
//             // clearInterval untuk memberhentikan setInterval
//             clearInterval(interval);
//         }
//     }, 1000);
// }

// belajarInterval();

// setTimeout(() => {
//     console.log("contoh penggunaan setTimeout muncul di detik ke 5 (5000 ms)");
// }, 5000);

// get element carousel
let carouselContainer = document.querySelector(".carousel__img");
let images = document.querySelectorAll(".carousel__img img");
let index = 0;
let intervalId;

function autoCarousel() {
    intervalId = setInterval(() => {
        index++;

        if (index >= images.length) {
            index = 0;
            console.log('sudah mencapai batas')
            
        }

        images[index].style.transform = `translateX(${-index * 100}%)`;
        // Geser seluruh container ke kiri berdasarkan indeks gambar
        
        console.log(`Index sekarang: ${index}`);
    }, 3000);
}

// Tambahkan CSS agar transisi smooth
carouselContainer.style.transition = "transform 0.5s ease-in-out";

// Jalankan carousel
autoCarousel();

// carouselSlide.style.transform = `translateX(${-currentIndex * 100}%)`;

// document.querySelector(".container").style.transform = ``;
// document.querySelector(".container").style.color = "red";
// document.querySelector(".container").style.transform = `translateX(${besarGesaran}%`;
