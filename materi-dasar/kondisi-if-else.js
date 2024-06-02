let answerUser = prompt("Belajar percabangan if-else\nMasukan Tahun kelahiran anda : ");

let tahunLahir = parseInt(answerUser);

if (tahunLahir % 2 == 0) {
    alert("Anda lahir pada tahun genap!");
} else if ((tahunLahir / 4 == 0 && tahunLahir / 100 != 0) || tahunLahir / 400 == 0) {
    alert("Anda lahir pada tahun kabisat");
} else {
    alert("Anda lahir pada tahun ganjil");
}
