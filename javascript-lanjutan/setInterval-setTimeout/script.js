// setInterval adalah fungsi yang digunakan untuk menjalankan kode secara berulang-ulang dengan interval waktu tertentu
// contoh

let angka = 1;
function belajarInterval() {
    let interval = setInterval(() => {
        console.log(`Contoh sederhana penggunaan setInterval ${angka}`);
        angka++;
        if (angka === 8) {
            // clearInterval untuk memberhentikan setInterval
            clearInterval(interval);
        }
    }, 1000);
}

// belajarInterval();

// setTimeout(() => {
//     console.log("contoh penggunaan setTimeout muncul di detik ke 5 (5000 ms)");
// }, 5000);

// get element carousel

let carouselImages = document.querySelectorAll(".carousel__img img");
let intervalid;

function autoCarousel() {
    let index = 0;

    intervalid = setInterval(() => {
        carouselImages[index].style.transform = `translateX(${-index * 100}%`;
        console.log(`index sebelum ${index}`)
        
        if (index === 4) {
            index = 0;
                
            console.log(`index sudah mencapai 3`)
        }
        
        index++;
        console.log(`index sesudah ${index}`)
    }, 3000);
}

autoCarousel();

// carouselSlide.style.transform = `translateX(${-currentIndex * 100}%)`;

// document.querySelector(".container").style.transform = ``;
// document.querySelector(".container").style.color = "red";
// document.querySelector(".container").style.transform = `translateX(${besarGesaran}%`;
