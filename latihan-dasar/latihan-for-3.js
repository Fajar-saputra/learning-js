/*
 * * * * *
 * * * *
 * * *
 * *
 *
 */
// Menampilkan segitiga ke console.log
let angka = prompt("Latihan Membuat Segitiga\nSilahkan input angka : ");
let loop = parseInt(angka);

for (let i = loop; i > 0; i--) {
    let baris = ""; // Menginisialisasi variabel untuk menyimpan bintang di satu baris
    for (let j = 0; j < i; j++) {
        baris += " * "; // Menambahkan bintang ke variabel baris
    }
    console.log(baris); // Mencetak satu baris bintang
}

// Menampilkan segitiga ke alert
let segitiga = ""; // Deklarsi let segitiga menyimpan variabel dari variabel baris
for (let i = loop; i > 0; i--) {
    let baris = ""; // Deklasrasi baris untuk menyimpan bintang
    for (let j = 0; j < i; j++) {
        baris += " * "; // bintang kita simpan pada baris pada setiap iterasi
    }
    segitiga += baris + "\n"; // menyimpan bintang yang telah disimpan dibaris
}

alert(segitiga); // menampilkan
