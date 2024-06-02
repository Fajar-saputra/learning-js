let answerUser = prompt("Latihan percabangan if-else\nMasukan nilai ujian anda : ");

let nilaiUser = parseFloat(answerUser);

if (nilaiUser >= 85) {
    alert("Nilai Anda Sangat Bagus!");
} else if (nilaiUser >= 75) {
    alert("Nilai Anda Bagus!");
} else if (nilaiUser >= 60) {
    alert("Nilai Anda Cukup");
} else {
    alert("Anda harus mengulang");
}
