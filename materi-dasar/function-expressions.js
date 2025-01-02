/* ​‌‍‌⁡⁢⁣⁢𝗙𝘂𝗻𝗰𝘁𝗶𝗼𝗻 𝗘𝘅𝗽𝗿𝗲𝘀𝘀𝗶𝗼𝗻𝘀⁡​ */

// ⁡⁣⁣⁢Selain membuat function menggunakan deklarasi (function declaration), Anda juga bisa membuat function menggunakan ekspresi (function expression), di mana function disimpan dalam variabel.⁡

let kali = function (a, b) {
    return a * b;
};

let luas_segitiga = function (alas, tinggi) {
    return (1 / 2) * (tinggi * alas);
};

let kuadrat = function (num) {
    return num > 0 ? num * num : "angka negatif tidak kami kuadratkan";
};

console.log(kali(4, 5));
console.log(luas_segitiga(4, 5));
console.log(kuadrat(-4));
