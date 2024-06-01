let angkaUser = prompt("Latihan membuat segitiga\nSilahkan input angka sembarang : "); // minta user input angka sembarang

let loop = parseInt(angkaUser); // ubah data dari prompt(string) menjadi int
// menampilkan pada console
for (let i = 0; i < loop; i++) {
    let baris = ""; // tempat menyimpan " - " dan " * "
    for (let j = loop - 1; j > i; j--) {
        baris += " - "; // menyimpan " - "
    }
    for (let k = 0; k <= i; k++) {
        baris += " # "; // menyimpan " - " dan " # "
    }
    console.log(baris); // Menampilkan
}
// menampilkan pada alert
let segitiga = ""; // sebagai tempat untuk menyimpan

for (let i = 0; i < loop; i++) {
    let baris = ""; // tempat menyimpan sementara
    for (let j = loop - 1; j > i; j--) {
        baris += " - "; // menyimpan " - " ke let baris
    }
    for (let k = 0; k <= i; k++) {
        baris += " $ "; // menyimpan " - " dan " $ " ke let baris
    }
    segitiga += baris + "\n"; // menyimpan " - " dan " $ ", serta \n ke let segitiga
}

alert(segitiga); // menampilkan segitiga pada alert
