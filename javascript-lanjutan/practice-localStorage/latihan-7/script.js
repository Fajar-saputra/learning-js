// Mendapatkan referensi ke elemen-elemen DOM (HTML) yang akan kita gunakan
const list = document.querySelector(".list"); // Elemen ul (unordered list) tempat daftar tugas akan ditampilkan
const add = document.querySelector(".add"); // Tombol untuk menambahkan tugas
const inputUser = document.querySelector("input"); // Input field tempat pengguna mengetik tugas

// String HTML yang berisi tombol-tombol (icon) untuk setiap item tugas
const btns = ` <div class="buttons">
                     <i class='bx bx-check btnComplete'></i>
                     <i class='bx bx-message-alt-minus btnDelete'></i>
                </div>`;

// Fungsi untuk menyimpan array tugas ke dalam localStorage
function saveTasks(Tasks) {
    localStorage.setItem("Tasks", JSON.stringify(Tasks));
}

// Fungsi untuk mengambil array tugas dari localStorage
function getTasks() {
    try {
        const storedTasks = localStorage.getItem("Tasks");
        return storedTasks ? JSON.parse(storedTasks) : [];
    } catch (error) {
        console.log("Data tidak tidak ditemukan / rusak");
        console.log(`Pesan error : ${error}`);
        return [];
    }
}

// Fungsi untuk menambahkan tugas baru
function addTasks() {
    // 1. Ambil nilai input saat fungsi dipanggil
    const taskText = inputUser.value.trim();

    // ambil data dari localStorage
    const Tasks = getTasks();

    // 2. Pastikan input tidak kosong
    if (taskText !== "") {
        // 3. Buat elemen li baru
        const newLi = document.createElement("li"); // Membuat elemen list item (<li>) baru
        newLi.classList.add("itemList"); // Menambahkan class "itemList" ke elemen li
        newLi.textContent = taskText; // Mengatur teks konten elemen li dengan teks tugas dari input
        newLi.insertAdjacentHTML("beforeend", btns); // Menambahkan string HTML 'btns' (tombol-tombol) ke akhir elemen li

        // push data
        Tasks.push(taskText); // Menambahkan teks tugas baru ke dalam array Tasks

        // simpan data
        saveTasks(Tasks); // Menyimpan array Tasks yang sudah diperbarui ke localStorage

        // 4. Tambahkan elemen li ke dalam daftar
        list.appendChild(newLi); // Menambahkan elemen li yang baru dibuat ke dalam elemen ul (list)

        // 5. Kosongkan input setelah tugas ditambahkan
        inputUser.value = ""; // Mengosongkan nilai pada input field
    } else {
        // Jika input kosong, menampilkan alert kepada pengguna
        alert("Enter your tasks");
    }
}

// Fungsi untuk merender (menampilkan) daftar tugas dari localStorage ke layar
function renderTasks() {
    // hapus semua list
    if (list) {
        list.innerHTML = ""; // Mengosongkan seluruh konten di dalam elemen ul (list) untuk menampilkan ulang daftar yang terbaru

        // ambil data
        const Tasks = getTasks(); // Mendapatkan array tugas dari localStorage

        if (Tasks) {
            // Iterasi melalui setiap elemen (tugas) dalam array Tasks
            Tasks.forEach((element) => {
                let li = document.createElement("li"); // Membuat elemen list item (<li>) baru untuk setiap tugas
                li.classList.add("itemList"); // Menambahkan class "itemList" ke elemen li

                li.textContent = element; // Mengatur teks konten elemen li dengan teks tugas dari array
                li.insertAdjacentHTML("beforeend", btns); // Menambahkan string HTML 'btns' (tombol-tombol) ke akhir elemen li

                list.appendChild(li); // Menambahkan elemen li yang dibuat ke dalam elemen ul (list)
            });

            // Menampilkan jumlah tugas yang ada di konsol
            console.log(`Isi Data : ${Tasks.length}`);
        } else {
            // Jika tidak ada data di localStorage, menampilkan pesan di konsol
            console.log("Data kosong");
        }
    } else {
        // Jika elemen dengan class "list" tidak ditemukan di DOM, menampilkan pesan error di konsol
        console.error("Elemen dengan ID 'taskList' tidak ditemukan.");
    }
}

const container = document.querySelector(".container");
// const newNotes = `
// <div class="card-note">
//     <h1>Note 1</h1>
//     <input type="text" placeholder="enter your task">
//         <ul class="list">

//     </ul>
//     <button class="add">add</button>
// </div>`;

function addNewNotes() {
    const title = prompt("Enter your title!");
    let newTitle = "";

    if (newTitle !== null) {
        newTitle = title.trim();
        const newNotes = `
        <div class="card-note">
            <h1>${newTitle}</h1>
            <input type="text" placeholder="enter your task">
                <ul class="list">
                    
            </ul>
            <button class="add">add</button>
        </div>`;

        container.insertAdjacentHTML("beforeend", newNotes);
    } else {
        console.log("Gagal");
    }
}

document.querySelector(".btnNew").addEventListener("click", addNewNotes);

// Event listener untuk menangani klik pada elemen daftar (untuk tombol hapus dan selesai)
list.addEventListener("click", function (event) {
    const target = event.target; // Mendapatkan elemen yang diklik

    // Handle tombol hapus
    if (target.classList.contains("btnDelete")) {
        // Jika elemen yang diklik memiliki class "btnDelete"
        const listItem = target.closest(".itemList"); // Mencari elemen li terdekat dengan class "itemList"
        if (listItem) {
            // Jika elemen li ditemukan
            const taskTextToRemove = listItem.textContent.trim(); // Mendapatkan teks tugas dari elemen li yang akan dihapus
            removeTask(taskTextToRemove, listItem); // Memanggil fungsi removeTask untuk menghapus tugas
        }
    }

    // Handle tombol coret (tandai selesai)
    if (target.classList.contains("btnComplete")) {
        // Jika elemen yang diklik memiliki class "btnComplete"
        const listItem = target.closest(".itemList"); // Mencari elemen li terdekat dengan class "itemList"
        if (listItem) {
            listItem.classList.toggle("completed"); // Menambahkan atau menghapus class "completed" pada elemen li untuk memberikan efek coret
        }
    }
});

// Fungsi untuk menghapus tugas dari localStorage dan DOM
function removeTask(taskText, listItemToRemove) {
    let Tasks = getTasks(); // Mendapatkan array tugas dari localStorage
    Tasks = Tasks.filter((task) => task !== taskText); // Membuat array baru yang tidak mengandung tugas yang akan dihapus
    saveTasks(Tasks); // Menyimpan array tugas yang sudah diperbarui ke localStorage
    listItemToRemove.remove(); // Menghapus elemen li dari DOM (tampilan)
    console.log(`Tugas "${taskText}" dihapus.`);
    // Anda bisa memilih untuk memanggil renderTasks() lagi untuk memperbarui seluruh daftar,
    // atau membiarkan elemen dihapus langsung dari DOM seperti di atas (lebih efisien).
    // renderTasks();
}

// Event listener untuk menangani tombol Enter pada input field
document.addEventListener("keydown", function (e) {
    // Memeriksa jika tombol yang ditekan adalah Enter
    if (e.key === "Enter") {
        // Mencegah perilaku default tombol Enter (misalnya, submit form)
        e.preventDefault();
        addTasks(); // Memanggil fungsi addTasks untuk menambahkan tugas baru
        console.log("testing berhasil");
    }
});

// Event listener untuk menangani klik pada tombol "add"
add.addEventListener("click", addTasks); // Ketika tombol dengan class "add" diklik, panggil fungsi addTasks

// Memanggil fungsi renderTasks saat halaman pertama kali dimuat untuk menampilkan tugas yang sudah ada di localStorage
renderTasks();
