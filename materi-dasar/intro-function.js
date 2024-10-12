// function deklarasi
function jumlah2Bilangan(a, b) {
    let total;
    total = a + b;
    return total;
}

alert(jumlah2Bilangan(5, 5));

// function exspresion
let kali2Bilangan = function (x, y) {
    let  hasil;
    hasil = x * y;
    return hasil;
}

console.log("Hasil dari x dikali y : " + kali2Bilangan(5, 5));
console.log(kali2Bilangan(5, 5));