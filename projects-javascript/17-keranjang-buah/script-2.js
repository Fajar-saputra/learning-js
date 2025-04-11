function simpanKeranjang(keranjang) {
    localStorage.setItem("keranjang", JSON.stringify(keranjang)) || [];
}

function ambilKeranjang() {
    return JSON.parse(localStorage.getItem("keranjang"));
}

function tambahItem() {
    const input = document.getElementById("itemInput");
    const namaBarang = input.value.trim();
    if (!namaBarang) return alert("Masukkan nama barang!");

    let keranjang = ambilKeranjang();
    keranjang.push(namaBarang);
    simpanKeranjang(keranjang);

    input.value = "";
    tampilkanKeranjang();
}

function tampilkanKeranjang() {
    const li = document.createElement('li')
    const ul = document.querySelector(".daftarBarang")
    let keranjang = ambilKeranjang()

    keranjang.forEach(belanja => {
        li.textContent = belanja
        ul.appendChild(li)

    });
}

// console.log(ambilKeranjang())

const add = document.getElementById("tambahItem");
const hapus = document.getElementById("hapusItem");
const clear = document.getElementById("clear");

add.addEventListener("click", tambahItem);
// hapus.addEventListener('click', hapusItem)
// clear.addEventListener('click', hapusSemua)

// Tampilkan data saat halaman dibuka
window.onload = tampilkanKeranjang;
