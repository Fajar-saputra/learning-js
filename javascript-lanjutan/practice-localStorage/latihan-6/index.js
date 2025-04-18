// function getData() {
//     return JSON.parse(localStorage.getItem("daftarBookmark")) || [];
// }

function getData() {
    try {
        return JSON.parse(localStorage.getItem("daftarBookmark")) || [];
    } catch (e) {
        console.error("Data rusak, reset localStorage");
        localStorage.removeItem("daftarBookmark");
        return [];
    }
}

function simpanBookmark(data) {
    localStorage.setItem("daftarBookmark", JSON.stringify(data));
    console.log("berhasil disimpan");
}

function tampilBookmark() {
    const daftar = document.getElementById("daftarBookmark");

    daftar.innerHTML = "";

    const bookmarks = getData();

    bookmarks.forEach((item, index) => {
        const li = document.createElement("li");

        const link = document.createElement("a");

        link.href = item.url;
        link.textContent = item.nama;
        link.target = "_blank";

        const hapusBtn = document.createElement("button");

        hapusBtn.textContent = "❌";
        hapusBtn.style.marginLeft = "10px";
        hapusBtn.onclick = () => hapusBookmark(index);

        li.appendChild(link);
        li.appendChild(hapusBtn);
        daftar.appendChild(li);
        console.log("berhasil ditampilkan");
    });
}

function tambahBookmark() {
    const nama = document.getElementById("namaInput").value.trim();
    const url = document.getElementById("urlInput").value.trim();

    if (!nama || !url) {
        return alert("Jangan lupa masukan nama dan url!!");
    }

    try {
        new URL(url);
    } catch (e) {
        return alert("URL tidak valid!");
    }

    const bookmark = getData();
    bookmark.push({ nama, url });
    simpanBookmark(bookmark);

    document.getElementById("namaInput").value = "";
    document.getElementById("urlInput").value = "";

    tampilBookmark();
    console.log("berhasil ditambah");
}

function hapusBookmark(index) {
    const bookmarks = getData();
    bookmarks.splice(index, 1);
    simpanBookmark(bookmarks);
    tampilBookmark();
}

function hapusSemuaBookmark() {
    localStorage.removeItem("daftarBookmark");
    tampilBookmark();
}

window.onload = tampilBookmark;
