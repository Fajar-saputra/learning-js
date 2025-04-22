const container = document.querySelector(".container");
const buttonNewNote = document.querySelector(".btnNew");

function saveNotes(notes) {
    localStorage.setItem("NotesData", JSON.stringify(notes));
}

function getNotes() {
    try {
        const notesData = localStorage.getItem("NotesData");
        return notesData ? JSON.parse(notesData) : [];
    } catch (error) {
        console.error("Data kosong / rusak ", error);
        return [];
    }
}

// Membuat elemen DOM untuk catatan baru
function addNewNoteDom(noteData) {
    const noteCard = document.createElement("div");
    noteCard.classList.add("card-note");
    noteCard.style.backgroundColor = noteData.backgroundColor; // Setel warna latar belakang langsung

    noteCard.innerHTML = `
        <h1>${noteData.title}</h1>
        <input type="text" class="note-input" placeholder="Enter your task">
        <ul class="task-list" data-note-id="${noteData.id}">
            ${renderTasks(noteData.tasks)}
        </ul>
        <button class="add-note-task" data-note-id="${noteData.id}">Add Task</button>
    `;

    container.appendChild(noteCard);
}

// Menampilkan tugas-tugas dalam catatan
function renderTasks(tasks) {
    return tasks.map(task => `<li>${task}</li>`).join('');
}

// Menambahkan catatan baru
function addNewNote() {
    const title = prompt("Enter your note title!");
    const color = backgroundColor();

    if (title !== null && title.trim() !== "") {
        const newNote = {
            id: Date.now(),
            title: title,
            tasks: [],
            backgroundColor: color,
        };

        const notes = getNotes();
        notes.push(newNote);
        saveNotes(notes);
        addNewNoteDom(newNote);
    } else {
        console.log("Error: Judul catatan tidak boleh kosong.");
    }
}

// Menghasilkan warna latar belakang acak
function backgroundColor() {
    const colors = ["yellow", "green", "pink", "purple", "blue"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

// Merender semua catatan dari localStorage
function renderAllNotes() {
    container.innerHTML = "";
    const allNotes = getNotes();
    allNotes.forEach(note => addNewNoteDom(note));
    addNoteEventListeners(); // Pastikan event listeners ditambahkan setelah elemen DOM ada
}

// Menambahkan tugas ke dalam catatan
function addNoteTask(noteId, taskText) {
    const notes = getNotes();
    const noteIndex = notes.findIndex(note => note.id === parseInt(noteId));

    if (noteIndex !== -1) {
        notes[noteIndex].tasks.push(taskText);
        saveNotes(notes);

        // Setelah menambahkan tugas, render ulang daftar tugas di catatan yang sesuai
        const taskList = container.querySelector(`.task-list[data-note-id="${noteId}"]`);
        if (taskList) {
            taskList.innerHTML = renderTasks(notes[noteIndex].tasks);
        }
    } else {
        console.error("Error: Catatan dengan ID tersebut tidak ditemukan.");
    }
}

// Menambahkan event listeners untuk tombol "Add Task"
function addNoteEventListeners() {
    container.addEventListener("click", (event) => {
        const addButton = event.target.closest(".add-note-task");
        if (addButton) {
            const noteId = addButton.dataset.noteId;
            const inputElement = addButton.parentNode.querySelector(".note-input");
            const taskText = inputElement.value.trim();

            console.log(noteId)

            if (taskText !== "") {
                addNoteTask(noteId, taskText);
                inputElement.value = ""; // Bersihkan input setelah menambahkan tugas
            } else {
                alert("Enter your task for this note!");
            }
        }
    });
}

buttonNewNote.addEventListener("click", addNewNote);
renderAllNotes();

console.table(localStorage);