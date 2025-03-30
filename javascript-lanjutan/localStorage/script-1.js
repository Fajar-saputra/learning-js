document.addEventListener("DOMContentLoaded", () => {
    // 1 menyinpan data ke localStorage
    // localStorage.setItem("nama", "Elvira Maharani");

    // 2 mengambil data dari localStorage
    // let nama = localStorage.getItem("nama");
    // console.log(nama);

    // 3 menghapus data dari localStorage
    // localStorage.removeItem("nama");

    // 4 menghapus semua data di localStorage
    // localStorage.clear();

    // 5 mengecek apakah data anda di localStorage, gunakn if untuk mnecek keberadaan data
    // if (localStorage.getItem(nama)) {
    //     console.log("ada");
    // } else {
    //     console.log("tidak ditemukan");
    // }

    // 6 studi kasus: hitungan kunjungan
    // let kunjungan = localStorage.getItem("kunjungan") || 0;
    // kunjungan++;

    // localStorage.setItem("kunjungan", kunjungan);

    // console.log(`Anda telah mengunjungi halaman ini sebanyak ${kunjungan}`);
});

// 7 sessionStorage
// sessionStorage.setItem("sessionData", "Ini hanya tersimpan selama sesi browser");

// console.log(sessionStorage.getItem("sessionData"));

// 8 menyimpan array ke localStorage wajib menggunakan JSON.stringify() untuk mengubah data menjadi string ini penting
//  untuk mengambil data menggunakan parse()
let data = ["Elvin", "Elvira", "Elfita"];

localStorage.setItem("data", JSON.stringify(data));

let ambilNama = JSON.parse(localStorage.getItem('data'))

// if (ambilNama) {
//     console.log("ada array")
//     console.log(ambilNama[0])
// } else {
//     console.log('tidak ada array')
// }

// for (let i = 0; i < ambilNama.length; i++) {
//     console.log(`${ambilNama[i]}`)
// }

// ambilNama.forEach((nama, index  ) => {
//     console.log(`${nama} ${index} `)
// });


// 9 ambil semua data

// for (let i = 0; i < localStorage.length; i++) {
//     let key = localStorage.key(i)
//     let value = localStorage.getItem(key)
//     console.log(`${key} : ${value}`)
// }

// 10 event storage (mendeteksi perubahan localStorage)
// jika localStorage dibuah di tab LargestContentfulPaint, kita bisa mendeteksinya dengan event Storage
window.addEventListener('storage', function(event) {
    console.log("Key yang berubah: ", event.key)
    console.log("Nilai lama: ", event.oldValue)
    console.log("Nilai baru: ", event.newValue)
    console.log("Penyimpanan berasal dari: ", event.url)
})

// catatan: event ini hanya berjalan jika perubahan terjadi di tab lain, bukan di tab yang sama


// 11 menghapus data tertentu dengan syarat
localStorage.setItem('sementara', "Data ini akan dihapus dalam 10 detik")

setTimeout(() => {
    localStorage.removeItem('sementara')
    console.log("data sementara telah dihapus")
}, 10000)