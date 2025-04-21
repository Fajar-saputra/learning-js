const container = document.querySelector(".container"),
    btnNew = document.querySelector(".btnNew");

function saveNotes(Notes) {
    localStorage.setItem("NotesData", JSON.stringify(Notes));
}

function getNotes() {
    try {
        const Notes = localStorage.getItem("NotesData");
        return Notes ? JSON.parse(Notes) : [];
    } catch (e) {
        console.error("Data kosong / rusak ", e);
        return [];
    }
}

// create dom new note
function addNewNoteDom(objekData) {
    const noteCard = document.createElement("div");
    noteCard.classList.add("card-note");
    noteCard.setAttribute("data-set-color", `${objekData.backgroundColor}`);

    noteCard.innerHTML = `
        <h1>${objekData.title}</h1>
        <input type="text" placeholder="enter your task">
        <ul class="list" data-set-id="${objekData.id}">
                
        </ul>
        <button class="add" data-set-id="${objekData.id}">add</button>
    `;

    container.appendChild(noteCard);
}

// add new note
function addNewNote() {
    // minta judul
    const title = prompt("Enter your note title!");
    const warna = backgroundColor();

    // kondisi
    if (title !== null && title.trim() !== "") {
        const data = {
            id: Date.now(),
            title: title,
            tasks: [],
            backgroundColor: warna,
        };

        const notes = getNotes();

        notes.push(data);

        saveNotes(notes);

        addNewNoteDom(data);
    } else {
        console.log("Eror");
    }
}

// background color function
function backgroundColor() {
    const warna = ["yellow", "green", "pink", "purple", "blue"];
    // Menghasilkan indeks acak antara 0 (inklusif) dan panjang array (eksklusif)
    const randomIndex = Math.floor(Math.random() * warna.length);
    return warna[randomIndex]; // Mengembalikan warna pada indeks acak
}

// render notes
function renderAllNotes() {
    container.innerHTML = "";

    const notesAll = getNotes();

    notesAll.forEach((note) => {
        addNewNoteDom(note);
    });

    addNoteEventListeners()
}

// add tasks
function addNotesTask(noteId, textContent) {
    const notes = getNotes();

    const noteIndex = notes.findIndex((note) => note.id === parseInt(noteId));

    if (noteIndex !== -1) {
        notes[noteIndex].tasks.push(textContent);

        saveNotes(notes);
    } else {
        console.log("Terjadi eror di function addNotesTask()");
    }
}

// render tasks
function renderNotesTasks() {}

btnNew.addEventListener("click", addNewNote);

function addNoteEventListeners() {
    container.addEventListener("click", (event) => {
        const addButton = event.target.closest(".add");

        if (addButton) {
            const noteId = addButton.dataset.noteId;
            
            console.log(noteId)
        }
    });
}



renderAllNotes();

console.log(localStorage.NotesData);
