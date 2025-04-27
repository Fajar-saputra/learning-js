// Mendapatkan referensi ke elemen container tempat semua catatan akan ditampilkan
const container = document.querySelector(".container");
// Mendapatkan referensi ke tombol "New" untuk membuat catatan baru
const btnNewNote = document.querySelector(".btnNew");

// Fungsi untuk menyimpan array catatan ke localStorage
function saveNotes(notes) {
    // Menggunakan kunci "notesData" untuk menyimpan array JSON dari objek catatan
    localStorage.setItem("notesData", JSON.stringify(notes));
}

// Fungsi untuk mengambil array catatan dari localStorage
function getNotes() {
    try {
        // Mengambil string JSON dari localStorage menggunakan kunci "notesData"
        const storedNotes = localStorage.getItem("notesData");
        // Jika ada data, parse menjadi array JavaScript; jika tidak, kembalikan array kosong
        return storedNotes ? JSON.parse(storedNotes) : [];
    } catch (error) {
        // Jika terjadi error saat parsing (misalnya, data rusak), log error dan kembalikan array kosong
        console.error("Error getting notes from localStorage:", error);
        return [];
    }
}

// Fungsi untuk membuat dan menambahkan elemen DOM untuk satu objek catatan
function addNewNoteToDOM(noteObject) {
    // Membuat elemen div baru untuk menampung satu catatan
    const newNoteCard = document.createElement("div");
    newNoteCard.classList.add("card-note"); // Menambahkan class untuk styling
    newNoteCard.setAttribute("data-set-color", noteObject.backgroundColor);

    // Mengatur innerHTML kartu catatan menggunakan template literal, termasuk judul, input, daftar tugas, dan tombol tambah
    newNoteCard.innerHTML = `
        <h1 class="title">${noteObject.title}<i class='bx bx-x-circle btnRemove'></i></h1>
        <input type="text" placeholder="enter your task" class="note-input">
        <ul class="list" data-note-id="${noteObject.id}"></ul>
        <button class="add-note-task" data-note-id="${noteObject.id}">add</button>
    `;
    // Menambahkan kartu catatan baru ke dalam container utama
    container.appendChild(newNoteCard);
    // Memanggil fungsi untuk merender tugas-tugas yang ada di dalam daftar tugas catatan ini
    renderNoteTasks(newNoteCard.querySelector(".list"), noteObject.tasks);
}

// Fungsi untuk membuat catatan baru
function addNewNote() {
    // Meminta pengguna memasukkan judul untuk catatan baru
    const title = prompt("Enter your title!");

    // Memastikan judul tidak null dan tidak hanya berisi spasi
    if (title !== null && title.trim() !== "") {
        // Membuat objek catatan baru dengan ID unik (timestamp), judul, dan array tugas kosong
        const newNote = {
            id: Date.now(),
            title: title.trim(),
            tasks: [],
            backgroundColor: backgroundColor(),
        };

        // Mendapatkan daftar catatan yang sudah ada
        const notes = getNotes();
        // Menambahkan catatan baru ke daftar
        notes.push(newNote);
        // Menyimpan daftar catatan yang diperbarui ke localStorage
        saveNotes(notes);
        // Menambahkan representasi DOM dari catatan baru ke tampilan
        addNewNoteToDOM(newNote);
    } else {
        // Jika judul tidak valid, log pesan ke konsol
        console.log("Gagal menambahkan note baru (judul tidak valid).");
    }
}

// Menghasilkan warna latar belakang acak
function backgroundColor() {
    const colors = ["yellow", "green", "pink", "purple", "blue"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

// Fungsi untuk merender semua catatan yang ada dari localStorage ke DOM
function renderAllNotes() {
    // Membersihkan container agar tidak ada duplikasi catatan
    container.innerHTML = "";
    // Mendapatkan semua catatan dari localStorage
    const allNotes = getNotes();
    // Iterasi melalui setiap catatan dan menambahkan representasi DOM-nya
    allNotes.forEach((note) => {
        addNewNoteToDOM(note);
    });
    // Memasang event listeners untuk interaksi dengan catatan (tambah, hapus, selesai, edit)
    addNoteEventListeners();
}

// Fungsi untuk merender tugas-tugas di dalam daftar tugas suatu catatan
function renderNoteTasks(taskListElement, tasks) {
    // Membersihkan daftar tugas sebelum merender ulang
    taskListElement.innerHTML = "";
    // Iterasi melalui setiap tugas dan membuat elemen li untuknya
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.classList.add("itemList");
        // Menambahkan span untuk teks tugas (untuk fitur edit) dan tombol-tombol aksi
        li.innerHTML = `<span class="task-text" data-task-index="${index}">${task}</span>
                         <div class="buttons">
                             <i class='bx bx-check btnComplete'></i>
                             <i class='bx bx-message-alt-minus btnDelete'></i>
                         </div>`;
        // Menambahkan elemen li ke dalam daftar tugas
        taskListElement.appendChild(li);
    });
}

// Fungsi untuk menambahkan tugas baru ke catatan tertentu
function addNoteTask(noteId, taskText) {
    // Mendapatkan semua catatan
    const notes = getNotes();
    // Mencari indeks catatan berdasarkan ID
    const noteIndex = notes.findIndex((note) => note.id === parseInt(noteId));
    // Jika catatan ditemukan
    if (noteIndex !== -1) {
        // Menambahkan tugas baru ke array tugas catatan tersebut
        notes[noteIndex].tasks.push(taskText);
        // Menyimpan perubahan ke localStorage
        saveNotes(notes);
        // Mendapatkan elemen kartu catatan yang sesuai
        const noteCard = container.querySelector(`[data-note-id="${noteId}"]`).closest(".card-note");
        if (noteCard) {
            // Merender ulang hanya daftar tugas pada catatan yang bersangkutan
            const taskListElement = noteCard.querySelector(".list");
            renderNoteTasks(taskListElement, notes[noteIndex].tasks);
            // Mengosongkan input setelah menambahkan tugas
            const inputElement = noteCard.querySelector(".note-input");
            inputElement.value = "";
        }
    }
}

// Fungsi untuk menghapus tugas dari catatan tertentu
function removeNoteTask(noteId, taskTextToRemove, listItemToRemove) {
    // Mendapatkan semua catatan
    const notes = getNotes();
    // Mencari indeks catatan berdasarkan ID
    const noteIndex = notes.findIndex((note) => note.id === parseInt(noteId));
    // Jika catatan ditemukan
    if (noteIndex !== -1) {
        // Memfilter array tugas untuk menghapus tugas yang sesuai
        notes[noteIndex].tasks = notes[noteIndex].tasks.filter((task) => task !== taskTextToRemove);
        // Menyimpan perubahan ke localStorage
        saveNotes(notes);
        // Menghapus elemen li tugas dari DOM
        listItemToRemove.remove();
    }
}

// Fungsi untuk memperbarui status selesai tugas pada catatan tertentu (saat ini hanya log ke konsol)
function updateNoteTaskCompletion(noteId, taskText, isCompleted) {
    // Mendapatkan semua catatan
    const notes = getNotes();
    // Mencari indeks catatan berdasarkan ID
    const noteIndex = notes.findIndex((note) => note.id === parseInt(noteId));
    // Jika catatan ditemukan
    if (noteIndex !== -1) {
        // Mencari indeks tugas dalam array tugas catatan
        const taskIndex = notes[noteIndex].tasks.indexOf(taskText);
        if (taskIndex !== -1) {
            // Log status selesai tugas (Anda bisa menambahkan logika penyimpanan status selesai di sini)
            console.log(`Task "${taskText}" in note ${noteId} is now ${isCompleted ? "completed" : "not completed"}`);
            saveNotes(notes); // Menyimpan perubahan (opsional, tergantung kebutuhan)
        }
    }
}

// Fungsi untuk menangani pengeditan tugas pada catatan tertentu
function editNoteTask(noteId, taskIndexToEdit, newText, listItemToEdit) {
    // Mendapatkan semua catatan
    const notes = getNotes();
    // Mencari indeks catatan berdasarkan ID
    const noteIndex = notes.findIndex((note) => note.id === parseInt(noteId));
    // Jika catatan ditemukan
    if (noteIndex !== -1) {
        // Memastikan indeks tugas valid
        if (notes[noteIndex].tasks[taskIndexToEdit] !== undefined) {
            // Memperbarui teks tugas dalam array tugas catatan
            notes[noteIndex].tasks[taskIndexToEdit] = newText;
            // Menyimpan perubahan ke localStorage
            saveNotes(notes);
            // Memperbarui tampilan teks tugas di elemen li
            listItemToEdit.querySelector(".task-text").textContent = newText;
        }
    }
}

// Fungsi untuk menambahkan event listeners ke container untuk menangani interaksi dengan catatan
function addNoteEventListeners() {
    // Event listener untuk menangani klik di dalam container (delegasi event)
    container.addEventListener("click", function (event) {
        // Menangani klik pada tombol "add" tugas
        const addButton = event.target.closest(".add-note-task");
        if (addButton) {
            const noteId = addButton.dataset.noteId;
            const inputElement = addButton.parentNode.querySelector(".note-input");
            const taskText = inputElement.value.trim();
            if (taskText !== "") {
                addNoteTask(noteId, taskText);
            } else {
                alert("Enter your task for this note!");
            }
        }

        // Menangani klik pada tombol "delete" tugas
        const deleteButton = event.target.closest(".btnDelete");
        if (deleteButton) {
            const listItem = deleteButton.closest(".itemList");
            const taskList = listItem.closest(".list");
            const taskTextToRemove = listItem.querySelector(".task-text").textContent.trim();
            const noteId = taskList.dataset.noteId;
            removeNoteTask(noteId, taskTextToRemove, listItem);
        }

        // Menangani klik pada tombol "complete" tugas
        const completeButton = event.target.closest(".btnComplete");
        if (completeButton) {
            const listItem = completeButton.closest(".itemList");
            listItem.classList.toggle("completed");
            const taskList = listItem.closest(".list");
            const noteId = taskList.dataset.noteId;
            updateNoteTaskCompletion(noteId, listItem.querySelector(".task-text").textContent.trim(), listItem.classList.contains("completed"));
        }

        // Menangani klik pada teks tugas untuk mengeditnya
        const taskTextSpan = event.target.closest(".task-text");
        if (taskTextSpan) {
            const listItem = taskTextSpan.closest(".itemList");
            const taskList = listItem.closest(".list");
            const noteId = taskList.dataset.noteId;
            const taskIndexToEdit = taskTextSpan.dataset.taskIndex;
            const currentText = taskTextSpan.textContent;

            // Membuat input field untuk mengedit teks tugas
            const editInput = document.createElement("input");
            editInput.type = "text";
            editInput.value = currentText;
            editInput.classList.add("edit-input");

            // Mengganti span teks dengan input field
            taskTextSpan.replaceWith(editInput);
            editInput.focus(); // Fokuskan input agar pengguna bisa langsung mengetik

            // Event listener untuk menangani blur (kehilangan fokus) pada input edit
            editInput.addEventListener("blur", function () {
                const newText = this.value.trim();
                // Jika teks baru berbeda dari teks asli, simpan perubahan
                if (newText !== currentText) {
                    editNoteTask(noteId, taskIndexToEdit, newText, listItem);
                } else {
                    // Jika teks tidak berubah, kembalikan ke tampilan span
                    listItem.innerHTML = `<span class="task-text" data-task-index="${taskIndexToEdit}">${currentText}</span>
                                          <div class="buttons">
                                              <i class='bx bx-check btnComplete'></i>
                                              <i class='bx bx-message-alt-minus btnDelete'></i>
                                          </div>`;
                }
            });

            // Event listener untuk menangani tombol Enter dan Escape pada input edit
            editInput.addEventListener("keydown", function (event) {
                if (event.key === "Enter") {
                    this.blur(); // Trigger blur untuk menyimpan perubahan
                } else if (event.key === "Escape") {
                    // Mengembalikan ke tampilan span tanpa menyimpan perubahan
                    listItem.innerHTML = `<span class="task-text" data-task-index="${taskIndexToEdit}">${currentText}</span>
                                          <div class="buttons">
                                              <i class='bx bx-check btnComplete'></i>
                                              <i class='bx bx-message-alt-minus btnDelete'></i>
                                          </div>`;
                }
            });
        }
    });

    // Event listener untuk menangani tombol Enter pada input field catatan baru
    container.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            const inputElement = event.target.closest(".note-input");
            if (inputElement) {
                const addButton = inputElement.parentNode.querySelector(".add-note-task");
                if (addButton) {
                    addButton.click(); // Memicu klik pada tombol add terkait
                }
            }
        }
    });
}

// Event listener untuk tombol "New" yang akan memicu pembuatan catatan baru
btnNewNote.addEventListener("click", addNewNote);

// Memanggil fungsi renderAllNotes saat halaman dimuat untuk menampilkan catatan yang sudah ada
renderAllNotes();

console.log(localStorage.getItem("notesData"));
