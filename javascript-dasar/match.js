/* ​‌‍‌⁡⁢⁣⁢𝗠𝗮𝘁𝗵 𝗢𝗯𝗷𝗲𝗰𝘁⁡​ */

// ⁡⁣⁣⁢Apa itu Math Object,⁡ ⁡⁣⁢⁢Math Object di JavaScript adalah objek bawaan yang berisi berbagai properti dan metode untuk melakukan operasi matematika.

// ⁡⁣⁣⁢Properti Math⁡

// * Math.PI: Mengembalikan nilai π (3.14159...).
// * Math.E: Mengembalikan nilai konstanta Euler (2.718...).

console.log(Math.PI);
console.log(Math.E);

// ⁡⁣⁣⁢Metode Math⁡
console.log(Math.abs(-7)); // digunakan untuk mengubah value menjadi absolute
console.log(Math.pow(2, 5)); // pangkat angka pertama dipangkatkan dengan angka kedua
console.log(Math.sqrt(81)); // akar dari pangkat 2
console.log(Math.cbrt(125)); // akar dari pangkat 3
console.log(Math.max(1, 13, 89, 2, 75, 90)); // mencari nilai max dari kumpulan angka
console.log(Math.min(1, 13, 89, 2, 75)); // mencari nilai min dari kumpulan angka

// ⁡⁣⁣⁢Pembulatan Angka⁡
console.log(Math.round(3.5)); // penbulatan angka ke atas jika >= 5
console.log(Math.ceil(4.0000001));
console.log(Math.floor(3.9)); // pembulatan angka ke bawah
console.log(Math.trunc(4.99999));

// ⁡⁣⁣⁢Random Number⁡
console.log(Math.round(Math.random() * 10));
