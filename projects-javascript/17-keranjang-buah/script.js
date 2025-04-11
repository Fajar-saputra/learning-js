function getKeranjang() {
    return JSON.parse(localStorage.getItem("keranjangBelanja")) || [];
}

function simpanKeranjang(keranjang) {
    localStorage.setItem("keranjangBelanja", JSON.stringify(keranjang));
}

function tampilkanKeranjang() {
    const daftar = document.getElementById("daftarBarang");
    daftar.innerHTML = "";

    const keranjang = getKeranjang();

    keranjang.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        daftar.appendChild(li);
    });
}

function tambahItem() {
    const input = document.getElementById("itemInput");
    const namaBarang = input.value.trim();
    if (!namaBarang) return alert("Masukkan nama barang!");

    let keranjang = getKeranjang();
    keranjang.push(namaBarang);
    simpanKeranjang(keranjang);

    input.value = "";
    tampilkanKeranjang();
}

function hapusItem() {
    const input = document.getElementById("itemInput");
    const namaBarang = input.value.trim();
    if (!namaBarang) return alert("Masukkan nama barang yang ingin dihapus!");

    let keranjang = getKeranjang();
    let index = keranjang.indexOf(namaBarang);

    if (index !== -1) {
        keranjang.splice(index, 1);
        simpanKeranjang(keranjang);
        alert(`Barang ${namaBarang} dihapus.`);
    } else {
        alert("Barang tidak ditemukan.");
    }

    input.value = "";
    tampilkanKeranjang();
}

function hapusSemua() {
    localStorage.removeItem("keranjangBelanja");
    tampilkanKeranjang();
    alert("Semua barang dihapus.");
}

// Tampilkan data saat halaman dibuka
window.onload = tampilkanKeranjang;
