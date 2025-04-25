// Mendapatkan referensi ke elemen container tempat semua catatan akan ditampilkan
const container = document.querySelector(".container");
// Mendapatkan referensi ke tombol "New" untuk membuat catatan baru
const btnNewNote = document.querySelector(".btnNew");

function saveNotes(notes) {
    localStorage.setItem("notesData", JSON.stringify(notes));
}

function getNotes() {
    try {
        const notes = localStorage.getItem("notesData");
        return notes ? JSON.parse(notes) : [];
    } catch (error) {
        console.log("gagal ,", error);
        return [];
    }
}

function renderAllNotes() {
    container.innerHTML = "";

    const notes = getNotes();

    // notes? notes.forEach(note => createElementDOM(note)) : console.log('data kosong');

    notes.forEach((note) => {
        createElementDOM(note);
    });

    addEventListenerDOM();
}

function createElementDOM(note) {
    const noteCard = document.createElement("div");
    noteCard.classList.add("card-note");
    noteCard.setAttribute("data-set-color", note.backgroundColor);

    noteCard.innerHTML = `  <h1>${note.title}</h1>
                            <input type="text" placeholder="enter your task" class="note-input">
                            <ul class="list" data-note-id="${note.id}"></ul>
                            <button class="add-note-task" data-note-id="${note.id}">add</button>`;

    container.appendChild(noteCard);

    renderAllTasks(noteCard.querySelector(".list"), note.tasks);
}

function backgroundColor() {
    const colors = ["yellow", "green", "pink", "purple", "blue"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

function addNewNotes() {
    const titleNote = prompt("Enter your title!");

    const color = backgroundColor();

    if (titleNote !== null && titleNote.trim !== "") {
        const note = {
            id: Date.now(),
            title: titleNote.trim(),
            tasks: [],
            backgroundColor: color,
        };

        const storedNotes = getNotes();

        storedNotes.push(note);

        saveNotes(storedNotes);

        createElementDOM(note);
    } else {
        alert("Please Enter your title!");
    }
}

function addNewTasks(noteId, taskContent) {
    const notes = getNotes();

    const noteIndex = notes.findIndex((note) => note.id === parseInt(noteId));

    console.log(noteIndex);

    if (noteIndex !== -1) {
        notes[noteIndex].tasks.push(taskContent);

        saveNotes(notes);

        const noteCard = container.querySelector(`[data-note-id="${noteId}"]`).closest(".card-note");
        if (noteCard) {
            const listItem = noteCard.querySelector(".list");

            renderAllTasks(listItem, notes[noteIndex].tasks);

            const input = noteCard.querySelector(".note-input");
            input.value = "";
        } else {
            console.log("eror");
        }
    }
}

function renderAllTasks(list, tasks) {
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.classList.add("itemList");

        li.innerHTML = `<span class="task-text" data-task-index="${index}">${task}</span>
        <div class="buttons">
            <i class='bx bx-check btnComplete'></i>
            <i class='bx bx-message-alt-minus btnDelete'></i>
        </div>`;

        list.appendChild(li);
    });
}

function addEventListenerDOM() {
    container.addEventListener("click", (event) => {
        const addButton = event.target.closest(".add-note-task");
        if (addButton) {
            const noteId = addButton.dataset.noteId;
            const inputElement = addButton.parentNode.querySelector(".note-input");
            const text = inputElement.value.trim();

            if (text !== "") {
                addNewTasks(noteId, text);
            } else {
                alert("Enter your tasks!");
            }
        }
    });
}

btnNewNote.addEventListener("click", addNewNotes);

renderAllNotes();

console.log(getNotes());
