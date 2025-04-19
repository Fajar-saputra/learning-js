// get element
const actionAdd = document.querySelector(".action-add"),
    actionDelete = document.querySelector(".action-clear"),
    notesWrapper = document.querySelector(".notes-wrapper"),
    noteCard = document.querySelector(".note-card"),
    noteTitle = document.querySelector(".note-title"),
    noteList = document.querySelector(".note-list"),
    noteItem = document.querySelector(".note-item");

    const list = document.querySelector(".list"),
    itemList = document.querySelector(".item"),
    add = document.querySelector(".add"),
    inputUser = document.querySelector("input");

function saveTasks(Tasks) {
    localStorage.setItem("Tasks", JSON.stringify(Tasks));
}

function getTasks() {
    try {
        return JSON.parse(localStorage.getItem("Tasks")) || [];
    } catch (error) {
        console.log("Data tidak tidak ditemukan / rusak");
        console.log(`Pesan error : ${error}`);
        return [];
    }
}

function addTasks() {
    // 1. Ambil nilai input saat fungsi dipanggil
    const taskText = inputUser.value.trim();
    // ambil data dari localStorage
    const Tasks = getTasks();

    // 2. Pastikan input tidak kosong
    if (taskText !== "") {
        // 3. Buat elemen li baru
        const newLi = document.createElement("li");
        newLi.textContent = taskText;
        // push data
        Tasks.push(taskText);
        // simpan data
        saveTasks(Tasks);

        // 4. Tambahkan elemen li ke dalam daftar
        list.appendChild(newLi);

        // 5. Kosongkan input setelah tugas ditambahkan
        inputUser.value = "";
    } else {
        alert("Enter your tasks");
    }
}

add.addEventListener("click", addTasks);
