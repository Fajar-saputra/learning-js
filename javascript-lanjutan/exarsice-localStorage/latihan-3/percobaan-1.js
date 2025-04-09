function tambahKeranjang(buah) {
    keranjang.push(buah);
}

function hapusBuah(buah) {
    for (let index = 0; index < keranjang.length; index++) {
        if (buah === keranjang[index]) {
            // keranjang.slice(index, 1);
            delete keranjang[index];
            console.log(`buah ${keranjang[index]} telah dihapus`);
            return;
        }
    }
}

let keranjang = JSON.parse(localStorage.getItem("keranjang")) || [];

// tambahKeranjang('jambu')
// hapusBuah("durian")
hapusBuah("nanas");

localStorage.setItem("keranjang", JSON.stringify(keranjang));

if (keranjang) {
    console.log(`isi keranjang ${keranjang} : `);
} else {
    console.log("eror");
}

if (localStorage) {
    console.log(localStorage);
} else {
    console.log("kosong");
}
