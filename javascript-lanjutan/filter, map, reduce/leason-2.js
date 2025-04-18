// ambil data
const videos = document.querySelectorAll("[data-duration]");

// Konversi NodeList ke Array
const videosArray = Array.from(videos);

const jsLanjut = videosArray
    .filter((item) => item.textContent.includes("JAVASCRIPT LANJUTAN"))

    // ambil durasi
    .map((item) => item.dataset.duration)

    // konversi ke menit dan detik
    .map((item) => {
        // konversi ke float
        const waktu = item.split(":").map((item) => parseFloat(item));
        return waktu[0] * 60 + waktu[1];
    })
    .reduce((acc, cur) => acc + cur);

const hours = Math.floor(jsLanjut / 3600);
const minute = Math.floor((jsLanjut - hours * 3600) / 60);
const second = Math.floor((jsLanjut - hours * 3600) % 60);

// tampilkan
const jumlahVideo = document.querySelector(".jumlah-video"),
    durasiElement = document.querySelector(".total-durasi");

durasiElement.textContent = `${hours} : ${minute} : ${second}`;
jumlahVideo.textContent = videosArray.filter((item) => item.textContent.includes("JAVASCRIPT LANJUTAN")).length;
