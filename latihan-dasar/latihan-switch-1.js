alert("Latihan switch\nCalculator sederhana");

let angkaPertama = parseFloat(prompt("Angka pertama : "));
let operatorUser = prompt("Pilih operatro + , * , - , / , %");
let angkaKedua = parseFloat(prompt("Angka kedua : "));
let hasil;

switch (operatorUser) {
    case "+":
        hasil = angkaPertama + angkaKedua;
        break;
    case "-":
        hasil = angkaPertama - angkaKedua;
        break;
    case "*":
        hasil = angkaPertama * angkaKedua;
        break;
    case "/":
        hasil = angkaPertama / angkaKedua;
        break;
    case "%":
        hasil = angkaPertama % angkaKedua;
        break;

    default:
        alert("INVALID!!");
        break;
}

alert(angkaPertama + " + " + angkaKedua + " = " + hasil);
