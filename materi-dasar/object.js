// membuat objett
// 1. object literal
let buah = {
    nama: "apel",
    warna: "merah",
    harga: 4000,
};

console.log(buah);

// ⁡⁣⁣⁢2. Menggunakan Constructor new Object()⁡:
let buku = new Object();
buku.judul = "Belajar JavaScript";
buku.penulis = "Ranggo Pato";
console.log(buku);

let MataKuliah = {
    mataKuliah : '',
    nilaiKuliah : '',
    IPKkuliah : '',
    dosen : ''
};

// let Kalkulus = new MataKuliah();

const person = {
    nama: 'Elvira',

    sayHello: function (nama) {
        console.log(`Hello ${nama}`)
    }
}

console.log(person.nama)
person.sayHello('tata')

// Menambah Method ke Object
const kucing = {
    name: 'anggora'
}

kucing.sayHello = function (nama) {
    console.log(`Hello ${nama}`)
}
kucing.sayHaii =  (nama) => console.log(`Hello ${nama}`)

kucing.sayHello('Anggora')
kucing.sayHello('Kucing kampung')