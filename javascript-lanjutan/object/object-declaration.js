// function declaration

function Mahasiswa(nama, prodi, semester) {
    let mahasiswa = {};

    mahasiswa.nama = nama;
    mahasiswa.prodi = prodi;
    mahasiswa.semester = semester;

    mahasiswa.ngulang = function (semesterUlang) {
        console.log(`mengulang semester ${semesterUlang}`);
    };

    return mahasiswa;
}

let elvin = Mahasiswa("elvin", "Teknik Informatika", 5);

// console.log(elvin )
// console.log(elvin.nama)
// console.log(elvin.prodi)
// console.log(elvin.semester)
// console.log(elvin.ngulang(1))

function Mobil(nama, tahun, warna) {
    let mobil = [];

    mobil.name = nama;
    mobil.year = tahun;
    mobil.color = warna;

    mobil.energi = function (bahanBakar) {
        return `Energi sekarang ${bahanBakar}`;
    };

    return Mobil;
}

const Pajero = Mobil("Pajero", 2020, "black");

console.log(Pajero.name);
