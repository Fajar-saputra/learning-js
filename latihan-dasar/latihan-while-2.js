let angkaGenap = 2;
let angkaGanjil = 1;
let angkaStart = 1;
let angkaUser = prompt("Masukan angka untuk mencetak angka genap dan ganjil");

while (angkaGenap <= angkaUser) {
    alert("Angka ganjil ke-" + angkaStart + " adalah " + angkaGanjil + "\nAngka genap ke-" + angkaStart + " adalah " + angkaGenap);
    angkaGenap += 2;
    angkaGanjil += 2;
    angkaStart++;
}
