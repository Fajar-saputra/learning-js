let mahasiswa = ["Dimas", "Imam", "Fathir", "Iqbal", "Refalldo"];

// push and pop = tambah dan hapus elemen terakhir
mahasiswa.push("Lipriadi", "Khairuman");
mahasiswa.pop();

// unshif and shif = tambah dan hapus elemen pertama
mahasiswa.unshift("Asep", "Adrian");
mahasiswa.shift();

// splice
// splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2,...)
mahasiswa.splice(3, 0, "Riko", "Otong");

// slice = mengiris array menjadi array baru
// slice(indexAwal, indexAkhir); dengan catatan index akhir tidak dibawa
let mahasiswa2= mahasiswa.slice(0, 5);


// toString()
console.log(mahasiswa.toString());
console.log(mahasiswa.join(" - "));
console.log(mahasiswa2.join(" - "));