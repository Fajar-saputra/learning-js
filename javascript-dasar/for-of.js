/* for of */

/* 
Jika For In digunakan untuk melakukan iterasi property atau index, berbeda dengan For Of, ini digunakan untuk melakukan iterasi terhadap isi value dari iterable object, seperti Array, String dan lain - lain

For of tidak bisa digunakan untuk melakukan iterasi data di object, karena object bukanlah iterable.

*/

let names = ["elvin", "elfita", "elvira", "asep", "tono"];

for (let nama of names) {
    console.log(`isi :  ${nama}`);
}

let numbers = [1, 5, 6, 7, 2, 7, 87, 8, 24, 7, 2, 1, 46, 67, 1, 7, 7, 89, 42, 13, 1];

for (const number of numbers) {
    console.log(`${number}`)
}

// for of di string
const name = "elvin rahmattullah"

for (const char of name) {
    console.log(`${char}`);
}