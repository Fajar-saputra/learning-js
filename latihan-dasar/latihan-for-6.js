let angkaUser = prompt("Latihan membuat segitiga\nSilahkan input angka sembarang : "); // minta user input angka sembarang

let loop = parseInt(angkaUser); // ubah data dari prompt(string) menjadi int
// menampilkan pada console
for (let i = 0; i < loop; i++) {
    let baris = ""; // tempat menyimpan sementara
    for (let j = loop; j > i; j--) {
        baris += " . "; // menyimpan " . " kedalam let baris
    }
    for (let k = 0; k < 2 * i - 1; k++) {
        baris += " % "; // menyimpan " . " dan " & " ke let baris
    }
    console.log(baris); // menampilkannya ke console.log
}

// menampilkan pada alert
let segitigaSamaSisi = ""; // sebagai tempat penyimpanan value dari let

for (let i = 0; i < loop; i++) {
    let baris = ""; // tempat menyimpan " . " dan " % " sementara
    for (let j = loop; j > i; j--) {
        baris += " .  "; // menyimpan " . " ke let baris
    }
    for (let k = 0; k < 2 * i - 1; k++) {
        baris += " & "; // menyimpan " . " dan " & "ke let baris
    }
    segitigaSamaSisi += baris + "\n"; // menyimpan " . " dan " & " dari let baris ke segitigaSamaSisi
}

alert(segitigaSamaSisi);
