// Mendapatkan referensi ke elemen container tempat semua catatan akan ditampilkan
const container = document.querySelector(".container");
// Mendapatkan referensi ke tombol "New" untuk membuat catatan baru
const btnNewNote = document.querySelector(".btnNew");

// function save data
function saveNotes(notes) {
    localStorage.setItem("notes", JSON.stringify(notes));
}

// get the data
function getNotes() {
    try {
        const notes = localStorage.getItem("notes");
        return notes ? JSON.parse(notes) : [];
    } catch (error) {
        console.error("Error parsing notes from localStorage:", error); // Use console.error for errors
        return [];
    }
}

function createElementDOM(notes) {
    const noteCard = document.createElement("div");
    noteCard.classList.add("card-note");
    noteCard.setAttribute("data-note-id", notes.id); // Use data-note-id
    noteCard.setAttribute("data-note-color", notes.backgroundColor); 

    noteCard.innerHTML = `
                <h1>${notes.title}</h1>
                <input type="text" placeholder="enter your task" class="note-input">
                <ul class="list" data-task-list-id="${notes.id}"></ul>
                <button class="add" data-note-id="${notes.id}">Add</button>
            `;

    container.appendChild(noteCard);

    renderAllTasks(noteCard.querySelector(".list"), notes.tasks);
}

function addNewNotes() {
    const title = prompt("Enter your title!");

    if (title !== null && title.trim() !== "") {
        const notes = getNotes();
        const color = backgroundColor();
        const newNotes = {
            id: Date.now(),
            title: title.trim(),
            tasks: [],
            backgroundColor: color,
        };
        notes.push(newNotes);
        saveNotes(notes);
        createElementDOM(newNotes);
        addEventListenerDOM(); //call here to make sure event listener is attached to newely created element
    } else {
        alert("Invalid input. Please enter a title."); // Provide user feedback
    }
}

function backgroundColor() {
        const colors = ["yellow", "green", "pink", "purple", "blue"];
        const random = Math.floor(Math.random() * colors.length);
        return colors[random];
}

function addNewTasks(noteId, textInput) {
    const notes = getNotes();
    const noteIndex = notes.findIndex((note) => note.id === noteId); //compare the id

    if (noteIndex !== -1) {
        notes[noteIndex].tasks.push(textInput);
        saveNotes(notes);

        const listElement = document.querySelector(`[data-task-list-id="${noteId}"]`); // Use querySelector with the correct data attribute.

        if (listElement) {
            renderAllTasks(listElement, notes[noteIndex].tasks, noteId);
        }
    }
}

function renderAllNotes() {
    const notes = getNotes();
    notes.forEach((note) => {
        createElementDOM(note);
    });
    addEventListenerDOM(); //call here to make sure event listener is attached after all elements are rendered
}

function renderAllTasks(list, tasks) {
    list.innerHTML = "";
    tasks.forEach((task) => {
        const li = document.createElement("li");
        li.classList.add("itemList")
        li.textContent = task;
        list.appendChild(li);
    });
}

function addEventListenerDOM() {
    container.addEventListener("click", (event) => {
        const addBtn = event.target.closest(".add");
        if (addBtn) {
            const noteId = parseInt(addBtn.dataset.noteId); // Parse the noteId as an integer.
            const input = addBtn.parentNode.querySelector(".note-input");
            const textInput = input.value.trim();

            if (textInput !== "") {
                addNewTasks(noteId, textInput);
                input.value = ""; // Clear the input after adding the task
            }
        }
    });
}

btnNewNote.addEventListener("click", addNewNotes);
window.onload = renderAllNotes;
