let answerUser = prompt("Latihan percabangan if-else\nCek Bilangan : ");

let nilaiUser = parseFloat(answerUser);

if (nilaiUser % 2 == 0) {
    alert("Bilangan " + nilaiUser + " adalah bilangan genap");
} else {
    alert("Bilangan " + nilaiUser + " adalah bilangan ganjil");
}
