let angka = 10;

// setInterval adalah fungsi yang digunakan untuk menjalankan kode secara berulang-ulang dengan interval waktu tertentu
// contoh
function tess() {
    let interval = setInterval(() => {
        console.log(`Contoh sederhana penggunaan setInterval ${angka}`);
        angka--;
        if (angka === 4) {
            clearInterval(interval);
        }
    }, 1000);

}

setTimeout(() => {
    console.log('hai')
}, 5000);

tess();

// function belajarSetInterval() {
//     intervalid = setInterval(() => {
//         angka--;
//         console.log(`tess ${angka}`);
//     }, 1000);

//     if (angka === 0) {
//         clearInterval(intervalid);
//     }
//     if (angka < 0) {
//         clearInterval(intervalid);
//     }

//     return angka;
// }
