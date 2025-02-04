/* for in */

/* 

For In merupakan perulangan for yang digunakan untuk mengiterasi seluruh data property di object atau index di array

Walaupun for in bisa digunakan untuk Array, namun tidak direkomendasikan untuk Array, karena biasanya kita jarang sekali butuh data index untuk Array, kita bisa menggunakan For Of (yang dibahas setelah ini)

*/

// contoh pada object
const Matakuliah = {
    matkul: "Kalkulus",
    dosen: "Ari Limay",
    IPKmatkul: 3.8,
    IPKrata: 3.7,
};

for (const property in Matakuliah) {
    console.log(`Property : ${property} : ${Matakuliah[property]}`);
}

// contoh pada array
let contohArray = ["elvin", "elfita", "elvira", "asep", "tono"];

for (let index in contohArray) {
    console.log(`isi dari index ${index} : ${contohArray[index]}`);
}
