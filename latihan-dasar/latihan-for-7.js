let angkaUser = prompt("Latihan membuat segitiga\nSilahkan input angka sembarang : "); // minta user input angka sembarang

let loop = parseInt(angkaUser); // ubah data dari prompt(string) menjadi int
// menampilkan pada console
for (let i = 1; i <= loop; i++) {
    let baris = ""; // variabel sebagai tempat menyimpan sementara
    for (let j = 1; j < i; j++) {
        baris += " # "; // menyimpan " # "
    }
    for (let k = loop; k >= 2 * i - loop; k--) {
        baris += " @ "; // menyimpan " @ "
    }
    console.log(baris); // menampilkan
}

// menampilkan pada alert
let segitigaTerbalik = "";

for (let i = 1; i <= loop; i++) {
    let baris = ""; // variable yang menyimpan value
    for (let j = 1; j < i; j++) {
        baris += " ~ "; // menyimpan " ~ " pada variable baris
    }
    for (let k = loop; k >= 2 * i - loop; k--) {
        baris += " $ "; // menyimpan " ~ " dan " $ " pada variable baris
    }

    segitigaTerbalik += baris + "\n"; // menyimpan " ~ " dan " $ " pada variable baris ke let segitigaTerbalik
}

alert(segitigaTerbalik); // menampilkan hasil dari iterasi
