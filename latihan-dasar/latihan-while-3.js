let sum = 0;
let limit = 0;
let angkaUser = prompt("Menjumlahkan angka dari 1 sampai...\nMasukan angka yang ingin dijumlahkan");
angkaUser = parseInt(angkaUser); // Mengonversi input menjadi integer

while (angkaUser >= limit) {
    sum += angkaUser; // Menambahkan angkaUser ke sum
    angkaUser--; // Mengurangi angkaUser setiap iterasi
}
alert("Jumlah angka dari " + angkaUser + " sampai 0 adalah " + sum);
