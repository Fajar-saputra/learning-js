function cobaDulu() {
    let data = JSON.parse(localStorage.getItem(keranjangBuah)) || [];

    // localStorage.setItem("keranjangBuah", JSON.stringify(keranjangBuah))

    let userInput = prompt("Tambah: ");

    let tambah = userInput.trim();

    data.push(tambah);

    localStorage.setItem("keranjangBuah", JSON.stringify(keranjangBuah));

    console.log(data);
}

cobaDulu()
