const notesWrapper = document.querySelector(".notes-wrapper");
const btnNewNote = document.querySelector(".action-add");

function saveNotes(notes) {
    localStorage.setItem("notes", JSON.stringify(notes));
}

function getNotes() {
    try {
        const notes = localStorage.getItem("notes");
        return notes ? JSON.parse(notes) : [];
    } catch (error) {
        console.log("Notes error: ", error);
        return [];
    }
}

function createNotes(notes) {
    const noteCard = document.createElement("div");
    noteCard.classList.add("note-card");
    noteCard.setAttribute("data-note-id", notes.id);

    noteCard.innerHTML = `  <div class="heading-card">
                                <h3 class="note-title">${notes.title}</h3>
                                <div class="buttons-heading">
                                    <i class='bx bx-message-alt-add add-note'></i>
                                    <i class='bx bx-message-alt-minus'></i>
                                </div>
                            </div>
                            <ul class="note-list">
                    
                    
                            </ul>`;

    notesWrapper.appendChild(noteCard);

    renderAllTasks(noteCard.querySelector(".note-list"), notes.tasks)
}

function renderAllNotes() {
    notesWrapper.innerHTML = "";

    const notes = getNotes();

    notes.forEach((note) => createNotes(note));
}

function addNewNotes() {
    const titleNote = prompt("Enter your title note!");

    if (titleNote !== null && titleNote.trim() !== "") {
        const notes = getNotes();
        const color = backgroundColor();

        const newNote = {
            id: Date.now(),
            title: titleNote.trim(),
            tasks: [],
            background: color,
        };

        notes.push(newNote);

        saveNotes(notes);

        createNotes(newNote);
    } else {
        alert("Invalid title!!");
    }
}

function backgroundColor() {
    const colors = ["yellow", "green", "pink", "purple", "blue"];
    const random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function renderAllTasks(noteLIst, tasks) {
    console.log("function sedang berjalan");
    
    

    noteLIst.innerHTML = "";

    tasks.forEach((task) => {
        const noteItem = document.createElement("li");
        noteItem.classList.add("note-item");

        noteItem.innerHTML = `  <span class="note-task">${task}</span>
                                    <span class="note-actions">
                                        <i class='bx bx-task note-complete'></i>
                                        <i class='bx bx-task-x note-delete'></i>
                                </span>`;
        
                                console.log("sedang dibuat");
    });
}

function addNewTasks() {
    
}

function addEventListenerNote() {
    notesWrapper.addEventListener("click", (event) => {
        // add tasks
        const addTask = event.target.closest(".add-note")
        if (addTask) {
            console.log(addTask);
            
        } else {
            console.log("gagal target");
            
        }
    })
}

renderAllNotes();

addEventListenerNote()

btnNewNote.addEventListener("click", addNewNotes);

console.log(getNotes());
