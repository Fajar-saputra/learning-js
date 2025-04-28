// Mendapatkan referensi ke elemen container tempat semua catatan akan ditampilkan
const container = document.querySelector(".container");
// Mendapatkan referensi ke tombol "New" untuk membuat catatan baru
const btnNewNote = document.querySelector(".btnNew");

// save
function saveNotes(notes) {
    localStorage.setItem("notes", JSON.stringify(notes));
}

// get
function getNotes() {
    try {
        const notesAll = localStorage.getItem("notes");
        return notesAll ? JSON.parse(notesAll) : [];
    } catch (error) {
        console.log("Data error :  ", error);
    }
}

// create Element note card by DOM
function createNoteCard(notes) {
    const newNoteCard = document.createElement("div");
    newNoteCard.classList.add("card-note");
    newNoteCard.setAttribute("data-note-id", notes.id);
    newNoteCard.setAttribute("data-note-color", notes.backgroundColor);

    newNoteCard.innerHTML = `<h1 class="title">${notes.title}<i class='bx bx-x-circle btnRemove'></i></h1>
                            <input type="text" placeholder="enter your task" class="note-input">
                            <ul class="list" data-note-id="${notes.id}"></ul>
                            <button class="add-note-task" data-note-id="${notes.id}">add</button>`;

    container.appendChild(newNoteCard);

    // rendering tasks
    renderNoteTasks(newNoteCard.querySelector(".list"), notes.tasks);
}

function addNewNote() {
    const title = prompt("Enter title note!");

    const color = backgroundColor();

    if (title !== null && title.trim() !== "") {
        const newNote = {
            id: Date.now(),
            title: title.trim(),
            tasks: [],
            backgroundColor: color,
        };

        const notes = getNotes();

        notes.push(newNote);

        saveNotes(notes);

        createNoteCard(newNote);
    } else {
        alert("Please enter title!!");
    }
}

function addNewTask(nodeId, textContent) {
    const notes = getNotes();

    const noteIndex = notes.findIndex((note) => note.id === parseInt(nodeId));

    if (noteIndex !== -1) {
        notes[noteIndex].tasks.push(textContent);

        saveNotes(notes);

        const noteCard = container.querySelector(`[data-note-id="${nodeId}"]`).closest(".card-note");
        if (noteCard) {
            const list = noteCard.querySelector(".list");

            renderAllNotes(list, notes[noteIndex.tasks]);

            const input = noteCard.querySelector(".note-input");
            input.value = "";
        }
    }
}

function renderNoteTasks(itemList, tasks) {
    itemList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.classList.add("itemList");

        li.innerHTML = `<span class="task-text" data-task-index="${index}">${task}</span>
                         <div class="buttons">
                             <i class='bx bx-check btnComplete'></i>
                             <i class='bx bx-message-alt-minus btnDelete'></i>
                         </div>`;

        itemList.appendChild(li);
    });
}

function backgroundColor() {
    const colors = ["yellow", "green", "pink", "purple", "blue"];
    const random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function renderAllNotes() {
    container.innerHTML = "";

    const notes = getNotes();

    notes.forEach((note) => createNoteCard(note));

    addEventListenerDOM();
}

function noteTaskComplete(noteId, taskText, isCompleted) {
    const notes = getNotes();

    // cari index pada card note
    const noteIndex = notes.findIndex(note => note.id === parseInt(noteId))

    if (noteIndex !== -1) {
        // cari index pada array tasks
        const taskIndex = notes[noteIndex].tasks.indexOf(taskText);
        
        if (taskIndex !== -1) {
            console.log(`Task "${taskText}" in note ${noteId} is now ${isCompleted ? "completed" : "not completed"}`);
            saveNotes(notes); 
        }
        
    }
}

function noteTaskRemove(noteId, taskText) {
    const notes = getNotes()


}

function addEventListenerDOM() {
    container.addEventListener("click", (event) => {
        // add new tasks
        const addbtn = event.target.closest(".add-note-task");
        if (addbtn) {
            const noteId = addbtn.dataset.noteId;
            const inputTask = addbtn.parentNode.querySelector(".note-input");
            const text = inputTask.value.trim();
            if (text !== "") {
                addNewTask(noteId, text);
            } else {
                alert("Enter your task!");
            }
        }

        const completeBtn = event.target.closest(".btnComplete");
        if (completeBtn) {
            const list = completeBtn.closest(".list");
            const noteId = list.dataset.noteId;
            const itemList = completeBtn.closest(".itemList")
            itemList.classList.toggle("completed");

            noteTaskComplete(noteId, itemList.querySelector(".task-text").textContent.trim(), itemList.classList.contains("completed"));
        }
    
        const removeBtn = event.target.closest(".btnDelete");
        if (removeBtn) {
            const list = completeBtn.closest(".list");
            const noteId = list.dataset.noteId;


            noteTaskRemove(noteId, list)
        }
    });
}

renderAllNotes();

btnNewNote.addEventListener("click", addNewNote);
