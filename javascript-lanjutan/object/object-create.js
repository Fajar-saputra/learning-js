function Cars(nama, tahun, warna, bahanBakar = 100) {
    this.name = nama;
    this.year = tahun;
    this.color = warna;
    this.bahanBakar = bahanBakar;
}

Cars.prototype.tambahBesin = function (liter) {
    const energi = liter * 10 + this.bahanBakar;

    console.log(`Energi terisi : ${energi} hp`);

    return energi;
};

Cars.prototype.jalan = function (kilometer) {
    this.bahanBakar - (kilometer*5);
    return this.bahanBakar;
};

const Pajero = new Cars("Pajero", 2020, "black");

console.log(Pajero);
console.log(Pajero.tambahBesin(2));
console.log(Pajero.jalan(10));
