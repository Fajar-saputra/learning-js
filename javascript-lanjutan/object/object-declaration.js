// function declaration

function Mahasiswa(nama, prodi, semester) {
    let mahasiswa = {};

    mahasiswa.nama = nama;
    mahasiswa.prodi = prodi;
    mahasiswa.semester = semester;

    mahasiswa.ngulang = function (semester) {
        console.log(`mengulang semester ${semester}`)
    }

    

    return mahasiswa;
}




let elvin = Mahasiswa("elvin", "Teknik Informatika", 5)

console.log(elvin )
// console.log(elvin.nama)
// console.log(elvin.prodi)
// console.log(elvin.semester)
// console.log(elvin.ngulang(1))

function displayObject(object) {
    console.log(object)
}

displayObject(elvin.nama)