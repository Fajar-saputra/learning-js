// Mendapatkan referensi ke elemen container tempat semua catatan akan ditampilkan
const container = document.querySelector(".container");
// Mendapatkan referensi ke tombol "New" untuk membuat catatan baru
const btnNewNote = document.querySelector(".btnNew");

// simpan
function saveNotes(notes) {
    localStorage.setItem("notes", JSON.stringify(notes));
}

// ambil
function getNotes() {
    try {
        const notes = localStorage.getItem("notes");
        return notes ? JSON.parse(notes) : [];
    } catch (error) {
        console.log("Eror notes : ", error);
        return [];
    }
}

// create DOM
function createNoteCard(notes) {
    const noteCard = document.createElement("div");
    noteCard.classList.add("card-note");
    noteCard.setAttribute("data-note-color", notes.backgroundColor);

    noteCard.innerHTML = `  <h1 class="title">${notes.title}<i class='bx bx-x-circle btnRemove'></i></h1>
                            <input type="text" placeholder="enter your task" class="note-input">
                            <ul class="list" data-note-id="${notes.id}"></ul>
                            <button class="add-note-task" data-note-id="${notes.id}">add</button>`;

    container.appendChild(noteCard);

    // render tasks
    renderAllTasks(noteCard.querySelector(".list"), notes.tasks);
}

// tambah note card baru
function newNoteCard() {
    const titleNote = prompt("Enter your title!!");

    if (titleNote !== null && titleNote.trim() !== "") {
        const notes = getNotes();

        const color = backgroundColor();

        const newNote = {
            id: Date.now(),
            title: titleNote.trim(),
            tasks: [],
            backgroundColor: color,
        };

        notes.push(newNote);

        saveNotes(notes);
    } else {
        alert("Title invalid!!");
    }
}

function backgroundColor() {
    const colors = ["yellow", "green", "pink", "purple", "blue"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

// render note card
function renderAllNotes() {
    const notes = getNotes();

    container.innerHTML = "";

    notes.forEach((note) => createNoteCard(note));

    // tambah addEventListener
    addEventListenerNote();
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

function addNoteTask(noteId, textTask) {
    const notes = getNotes();

    const index = notes.findIndex((note) => note.id === parseInt(noteId));

    if (index !== -1) {
        notes[index].tasks.push(textTask);

        saveNotes(notes);

        const noteCard = container.querySelector(`[data-note-id="${noteId}"]`).closest(".card-note");
        if (noteCard) {
            renderAllTasks(noteCard.querySelector(".list"), notes[index].tasks);
        }
    }
}

function removeNoteTask(noteId, taskTextToRemove, item) {
    const notes = getNotes();

    const index = notes.findIndex((note) => note.id === parseInt(noteId));

    if (index !== -1) {
        
        notes[index].tasks = notes[index].tasks.filter(task => task !== taskTextToRemove);

        saveNotes(notes);

        item.remove()

        console.log("berhasil mengapus item : ", item.textContent);
        
    }
}

function addEventListenerNote() {
    container.addEventListener("click", (event) => {
        const btnAdd = event.target.closest(".add-note-task");
        if (btnAdd) {
            const noteId = btnAdd.dataset.noteId;
            const input = btnAdd.parentNode.querySelector(".note-input");
            const textTask = input.value.trim();

            if (textTask !== "") {
                addNoteTask(noteId, textTask);
            } else {
                alert("Invalid");
            }
        }

        const removeBtn = event.target.closest(".btnDelete");
        if (removeBtn) {
            const listItem = removeBtn.closest(".itemList");
            const list = listItem.closest(".list");

            if (listItem) {
                const noteId = list.dataset.noteId;
                const textContent = listItem.querySelector(".task-text").textContent.trim();          
                
                removeNoteTask(noteId, textContent, listItem);
            }
        }
    });
}

renderAllNotes();

btnNewNote.addEventListener("click", newNoteCard);

console.log(getNotes());
