// function tanpa parameter
function sapaUser1() {
    return alert("haii");
}
//sapaUser();

// function dengan 1 parameter
function sapaUser2(nama) {
    return alert("Haii " + nama + " bagaimana kabarmu?");
}
// sapaUser2("Asep");

// function dengan 2 parameter
function luasSegita(sisi, tinggi) {
    return (sisi * tinggi) / 2;
}
// let sisi = prompt("Masukan sisi : ");
// let tinggi = prompt("Masukan tinggi : ");
// console.log(luasSegita(3, 2));
// alert(luasSegita(sisi,tinggi));

// function dengan lebih  parameter
function tambahBil() {
    let hasil = 0;
    for (let i = 0; i < arguments.length; i++) {
        hasil += arguments[i];
    }
    return hasil;
}
function perkalianBil() {
    let hasil = 1;
    for (let i = 0; i < arguments.length; i++) {
        hasil *= arguments[i];
    }
    return hasil;
}

console.log(tambahBil(2, 3, 4));
console.log(perkalianBil(2, 3, 4));
