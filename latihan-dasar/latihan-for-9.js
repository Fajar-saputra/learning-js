let angkaUser = prompt("Latihan membuat segitiga\nSilahkan input angka sembarang : "); // minta user input angka sembarang

let loop = parseInt(angkaUser); // ubah data dari prompt(string) menjadi int
// menampilkan pada console
let angkaConsole = 1;
for (let i = 0; i < loop; i++) {
    let baris = ""; // tempat menyimpan sementara
    for (let j = i; j < loop; j++) {
        baris += " " + (j + 1) + " "; // formula untuk menampilkan angka mulai dari 1
        angkaConsole++;
    }
    console.log(baris);
}

// menampilkan pada alert
let tampilAlert = "";
let angkaAlert = 1;
for (let i = 0; i < loop; i++) {
    let baris = "";
    for (let j = i; j < loop; j++) {
        baris += " " + (j + 1) + " "; // formula untuk menampilkan angka mulai dari 1
        angkaAlert++;
    }

    tampilAlert += baris + "\n";
}

alert(tampilAlert);
