// 1. function declaration
// function sapaDia(nama) {
//     console.log(`Haiii ${nama}`);
// }

// sapaDia('Tono')
// 2. function exprestion

// const sapaDia = function(nama) {
//     console.log(`Haiii ${nama}`);
// }

// sapaDia('Tono')

// 3. arrow function
// a
// const sapaDia = (nama) => {
//     console.log(`Haiii ${nama}`);
// };

// b
// const sapaDia = (nama) => console.log(`Haiii ${nama}`);

// c
// const sapaDia = nama => console.log(`Hayyyyy ${nama}`);

// sapaDia("Tono");

// d
const sapaDia = () => console.log("hayyyyy");
sapaDia();

// contoh implementasinya tidak hanya pada function namun juga bisa digunakan pada fungsi lain seperti
// map, addEventLisene, forEcah, dll

// contoh forEach
// const array = [1, 2, 3, 4, 5, 5, 6, 7]

// array.forEach(element => {
//     console.log(element)
// });

// console.log("boleh seperti ini")
// array.forEach(element => console.log(element))

// array.forEach((isiArray, indexArray) => {
//     console.log(`Isi Array : ${isiArray} | Index Array : ${indexArray}`)
// });

// contoh map
const nama = ["tono", "otong", "elvin", "dimas", "asep"];

// 1
// let jumlahNama = nama.map((nama) => {
//     return nama.length;
// });

// console.log(jumlahNama);

// 2
let jumlahNama = nama.map((nama) => ({ nama: nama, banyakHuruf: nama.length }));

console.log(jumlahNama);
