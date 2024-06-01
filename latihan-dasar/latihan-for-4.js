// Menampilkan segitiga ke console.log
let angkaUser = prompt("Latihan membuat segita\n Silahkan input angka : "); /* Meminta user untuk memasukan sebuah 
angka sembarang */

let loop = parseInt(angkaUser); // ubah angka yang dimasukan user ke int

// Menampilkan segitiga pada console
for (let i = 0; i < loop; i++) {
    let baris = ""; // var baris untuk menyimpan *
    for (let j = 0; j < i; j++) {
        baris += "   "; // var baris ditambahkan spasi setiap iterasi
    }
    for (let k = loop; k > i; k--) {
        baris += " * "; // var baris ditambahkan lagi * setiap iterasi
    }
    console.log(baris); // menampilkan * pada console
}

// Menampilkan segitiga pada alert
let segitiga = ""; // variabel untuk menyimpan * dan space

for (let i = 0; i < loop; i++) {
    let baris = ""; // variabel baris digunakan untuk menyimpan * dan spasi sementarai
    for (let j = 0; j < i; j++) {
        baris += " - "; // menyimpan - atau spasi ke var baris setiap iterasi
    }
    for (let k = loop; k > i; k--) {
        baris += " * "; // menyimpan * setelah spasi setiap iterasi
    }

    segitiga += baris + "\n"; // menyimpan (menggabungkan) - dengan *
}

alert(segitiga); // menampilkan data pada alert
