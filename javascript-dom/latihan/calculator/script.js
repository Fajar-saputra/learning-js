const layar = document.querySelector(".display");

function tambahNumber(angka) {
    layar.value += angka;
}

function tambahOperator(operator) {
    layar.value += operator;
}

function hasil() {
    try {
        hasilAkhir = eval(layar.value);
        layar.value = hasilAkhir;
    } catch (error) {
        layar.value = "Error";
    }
}

function hapus() {
    layar.value = "";
    hasilAkhir = undefined;
}
