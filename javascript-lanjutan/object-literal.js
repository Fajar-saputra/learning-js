// object literal

let identitasWarga = {
    nama: "elvin rahmattullah",
    umur: 18,
    pekerjaan: "guru pendidikan olahraga",
    gaji: 1500000,
    tabungan: 500000,

    tambahTabungan: function (uang) {
        console.log(`Tabungan ${this.nama} sebanyak ${this.tabungan}`);
    },

    gajiWarga : function () {
        let rupiah = this.gaji.toLocaleString('id-ID')
        console.log(`Gajinya sebesar Rp ${rupiah}`)
    }
};

console.log(identitasWarga.gajiWarga())