let hari = ["senin", "selasa", "rabu", "kamis", "jumat", "sabtu"];
console.log(hari);
// panjang array
console.log(hari.length);

// akses array
let ambil = hari[1];
console.log(ambil);

// fungsi toString()
console.log(hari.toString());

// array multi dimensi / bersarang
let angka = [1, 2, 3, 4, 5];
function sapa() {
    alert("Haii");
}
let arrayBersarang = ['senin', 1, 2, 3, angka, sapa];
let ambilsarang = arrayBersarang[4][0]; 
console.log(ambilsarang);
