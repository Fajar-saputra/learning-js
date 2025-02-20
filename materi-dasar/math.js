/* ​‌‍‌⁡⁢⁣⁢𝗠𝗮𝘁𝗵 𝗢𝗯𝗷𝗲𝗰𝘁⁡​ */

// ⁡⁣⁣⁢Apa itu Math Object,⁡ ⁡⁣⁢⁢Math Object di JavaScript adalah objek bawaan yang berisi berbagai properti dan metode untuk melakukan operasi matematika. 

// ⁡⁣⁣⁢Properti Math⁡

// * Math.PI: Mengembalikan nilai π (3.14159...).
// * Math.E: Mengembalikan nilai konstanta Euler (2.718...).

console.log(Math.PI)
console.log(Math.E)


// ⁡⁣⁣⁢Metode Math⁡
console.log(Math.abs(-294)) // ubah bilangan ke positif
console.log(Math.pow(2,5)) // (a,b) a pangkat b
console.log(Math.sqrt(81))  // kuadrat suatu bilangan
console.log(Math.cbrt(27)) // akar 3 dari suatu bilangan
console.log(Math.max(1,13,89,2,75)) // mencari bilangan terbesar
console.log(Math.min(1,13,89,2,75)) // mencari bilangan terkecil


// ⁡⁣⁣⁢Pembulatan Angka⁡
console.log(Math.round(3.5)) // bulatan
console.log(Math.ceil(4.0000001)) // pembulatan ke atas
console.log(Math.floor(3.9)) // pembulatan ke bawah
console.log(Math.trunc(4.99999))

// ⁡⁣⁣⁢Random Number⁡
console.log(Math.round(Math.random() * 100))