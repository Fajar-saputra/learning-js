let mahasiswa = {
    // properti
    nama: "Refalldo",
    nim: 2355201015,
    ipk: [3.8, 3.85, 3.89, 3.7, 3.55],
    prodi: "Teknik Informatika",
    // method
    ipkKomulatif: function () {
        // Menggunakan reduce untuk menghitung total IPK
        let total = this.ipk.reduce((acc, curr) => acc + curr, 0);
        return total / this.ipk.length;
    },
};

console.log(mahasiswa.ipkKomulatif());
