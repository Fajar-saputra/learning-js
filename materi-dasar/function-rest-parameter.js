/*  rest parameter */

/* 

Rest Parameter adalah fitur dimana kita bisa mengirim data sebanyak-banyak nya pada satu parameter, dan secara otomatis akan di konversi menjadi Array

Untuk membuat rest parameter, ada ketentuannya

Rest parameter hanya boleh ada satu di function, tidak boleh lebih dari satu

Rest parameter hanya boleh berada di posisi paling akhir, tidak boleh di depan atau di tengah, kecuali memang cuma ada 1 parameter

Di bahasa pemrograman lain, ada juga yang bilang ini adalah variable argument
 
*/

// contoh rest parameter
function jumlahTotal(nama, ...data) {
    let total = 0;
    for (let item of data) {
        total += item;
    }
    console.info(`Total ${nama} is ${total}`);
}

jumlahTotal('Apel', 6523,62,73,742)
jumlahTotal('anggur', ...[6523,62,73,742])
