/* ⁡⁣⁢⁢⁡⁢⁣⁢𝗗𝗮𝘁𝗲 𝗢𝗯𝗷𝗲𝗰𝘁 𝗱𝗶 𝗷𝗮𝘃𝗮𝘀𝗰𝗿𝗶𝗽𝘁⁡⁡ */

// ⁡⁣⁣⁢Apa itu Date Object,⁡ ⁡⁣⁢⁢Date Object di JavaScript digunakan untuk bekerja dengan tanggal dan waktu. Objek ini memungkinkan kita untuk mendapatkan, mengatur, dan memanipulasi tanggal dan waktu.⁡

// ⁡⁣⁣⁢Membuat Date Object⁡

// Tanggal dan waktu saat ini
let now = new Date();

console.log(now);

// menggunakan string
let spesifikasiDate = new Date("January 2, 2024 16:30:00");
console.log(spesifikasiDate);

// Menggunakan parameter (tahun, bulan, hari, jam, menit, detik, milidetik)
let customDate = new Date(2025, 1, 2, 16, 30);
console.log(customDate)

// ⁡⁣⁣⁢Mengambil Informasi Tanggal dan Waktu⁡
let today = new Date();
console.log(today.getFullYear())
console.log(today.getMonth())
console.log(today.getDay())
console.log(today.getDate())
console.log(today.getHours())
console.log(today.getMinutes())
console.log(today.getSeconds())
console.log(today.getMilliseconds())
console.log(today.getTime())