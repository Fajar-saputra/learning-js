/*
 - - - - *
 - - - * *
 - - * * *
 - * * * *
 * * * * * 
 */

// Menampilkan segitiga ke console.log
let angkaUser = prompt("Latihan membuat segita\n Silahkan input angka : ");

let loop = parseInt(angkaUser);

for (let i = 0; i < loop; i++) {
    var baris = "";
    for (let j = 0; j < i; j++) {
        baris += "   ";
    }
    for (let k = loop; k > i; k--) {
        baris += " * ";
    }
    console.log(baris);
}
