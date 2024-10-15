let mahasiswa = ["Dimas", "Imam", "Fathir", "Iqbal", "Refalldo"];

// push and pop = tambah dan hapus elemen terakhir
// mahasiswa.push("Lipriadi", "Khairuman");
// mahasiswa.pop();

// unshif and shif = tambah dan hapus elemen pertama
// mahasiswa.unshift("Asep", "Adrian");
// mahasiswa.shift();

// splice
// splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2,...)
// mahasiswa.splice(3, 0, "Riko", "Otong");

// slice = mengiris array menjadi array baru
// slice(indexAwal, indexAkhir); dengan catatan index akhir tidak dibawa
// let mahasiswa2= mahasiswa.slice(0, 5);

// forEach
// mahasiswa.forEach(function (e, i) {
//     console.log("Nama mahasiswa ke " + (i + 1)+" " + e);
// });

// map
// let angka = [1, 2, 3, 4, 5, 6];
// let cari =angka.map(function(e) {
//     return e * 4;
// })
// console.log(cari);

// sort
// let angkaRandom1 = [3, 6, 2, 9, 7, 5, 1, 4, 8];
// console.log(angkaRandom1.sort());

// angkaRandom2.sort(function (a,b) {
//     return a - b;
// });
// console.log(angkaRandom2);

// filter
let angkaRandom2 = [10, 3, 20, 6, 2, 9, 7, 5, 1, 4, 8];
let angkaFilter = angkaRandom2.filter(function (e) {
    return e > 5;
});
let angkaFind = angkaRandom2.find(function (e) {
    return e > 5;
});
console.log(angkaFilter);
console.log(angkaFind);



// toString()
// console.log(mahasiswa.join(" - "));
// console.log(mahasiswa.toString());
// console.log(mahasiswa2.join(" - "));
