function Mobil(nama, tahun, warna) {
    this.name = nama;
    this.year = tahun;
    this.color = warna;
}

Mobil.prototype.bahanBakar = function (liter) {
    return (liter *= 10);
};

Mobil.prototype.laju = function (laju) {
    console.log(`laju dengan kecepatan ${laju} km/jam`);
};

Mobil.prototype.sisaBensin = function () {
    let liter = this.bahanBakar(4);
    // const sisa = liter - jarakKm;
    console.log(`sisa bahan bakar ${liter}`)
}
// Mobil.prototype.sisaBensin = function (jarakKm) {
//     let liter = this.bahanBakar()
//     const sisa = liter - jarakKm;
//     console.log(`sisa bahan bakar ${sisa}`)
// }

const Pajero = new Mobil("Pajero", 2020, "black");

console.log(Pajero);
console.log(Pajero.bahanBakar(10));
console.log(Pajero.laju(40));
console.log(Pajero.sisaBensin());
