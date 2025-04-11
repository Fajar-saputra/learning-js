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

let buahan = ['apel', 'jeruk', 'mangga', 'durian'];

for (const buah in buahan) {
    console.log(`Ini daftar buah ${buah} : ${buahan[buah]}`)
}

let angkaRandom = [1, 35, 2, 6, 8, 2, 7, 0, 8, 42, 7, 8, 2, 7, 9, 2, 44, 11, 687, 33];

for (const index in angkaRandom) {
    if (angkaRandom[index] >= 10) {
        let temp = []; 
        temp = angkaRandom[index];
        console.log(`angka random yang lebih besar dari 10 adalah ${temp}`)
    }
}