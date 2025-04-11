// cara membuat objec
// 1 objec literal
let identitas = {
    nama: "Fathir Hidayat",
    umur: 20,
    pekerjaan: "Dosen",
    alamat: "Padang",
};

console.log(identitas);

// 2 function declaratioin
function buatObjectIdentitas(nama, nip, prodi, umur) {
    let mahasiswa = {};
    mahasiswa.nama = nama;
    mahasiswa.nip = nip;
    mahasiswa.prodi = prodi;
    mahasiswa.umur = umur;
    return mahasiswa;
}

let mahasiswa1 = buatObjectIdentitas("Iqbal Ramadan", 2355201013, "Sistem Informasi", 21);
let mahasiswa2 = buatObjectIdentitas("Mulyono", 2346201013, "Sistem Informasi", 21);

console.log(mahasiswa1);
console.log(mahasiswa2);

// 3 constructor
function Mahasiswakuliah(nama, nip, prodi, umur) {
    this.nama = nama;
    this.nip = nip;
    this.prodi = prodi;
    this.umur = umur;
}

let mahasiswa3 = new Mahasiswakuliah("Khairuman", 2346201013, "Sistem Informasi", 21);

console.log(mahasiswa3);
