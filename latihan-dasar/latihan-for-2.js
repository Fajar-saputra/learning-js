/*
 *
 * *
 * * *
 * * * *
 * * * * *
 */
// Menampilkan segitiga ke console.log
let angka = prompt("Latihan Membuat Segitiga\nSilahkan input angka : ");
let loop = parseInt(angka);

for (let i = 0; i < loop; i++) {
    let baris = ""; // Menginisialisasi variabel untuk menyimpan bintang di satu baris
    for (let j = 0; j <= i; j++) {
        baris += "* "; // Menambahkan bintang ke variabel baris
    }
    console.log(baris); // Mencetak satu baris bintang
}

// Menampilkan segitiga ke alert
let segitiga = "";

for (let i = 0; i < loop; i++) {
    let baris = ""; // Menginisialisasi variabel untuk  menyimpan bintang di satu baris
    for (let j = 0; j <= i; j++) {
        baris += "* "; // Menambahkan baris dengan bintang
    }
    segitiga += baris + "\n"; // Menambahkan bintang dengan enter agar bintang terbentuk
}

alert(segitiga); // Menampilkan bintang
