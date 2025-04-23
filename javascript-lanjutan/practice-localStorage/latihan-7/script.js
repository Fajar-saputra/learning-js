// Mendapatkan referensi ke elemen container tempat semua catatan akan ditampilkan
const container = document.querySelector(".container");
// Mendapatkan referensi ke tombol "New" untuk membuat catatan baru
const btnNewNote = document.querySelector(".btnNew");

function saveNotes(notes) {
    localStorage.setItem("notesData", JSON.stringify(notes));
}

function getNotes() {
    try {
        const storedNotes = localStorage.getItem("notesData");
        return storedNotes ? JSON.parse(storedNotes) : [];
    } catch (error) {
        console.error("Error getting notes from localStorage:", error);
        return [];
    }
}

// functoin untuk membuat
function createCardNotes(newNote) {
    const cardNotes = document.createElement("div");
    cardNotes.classList.add("card-note");
    cardNotes.setAttribute("data-set-color", backgroundColor());

    cardNotes.innerHTML = ` <h1 class="title">${newNote.title}<i class='bx bx-x-circle btnRemove'></i></h1>
                            <input type="text" placeholder="enter your task" class="note-input">
                            <ul class="list" data-note-id="${newNote.id}"></ul>
                            <button class="add-note-task" data-note-id="${newNote.id}">add</button>
`;
    
    container.appendChild(cardNotes)

    // fungsi render tasks
    // renderNoteTasks(document.querySelector('list'), newNote.tasks)
}


function  backgroundColor() {
    const colors = ["yellow", "green", "pink", "purple", "blue"];
    const random = Math.floor(Math.random() * colors.length); 
    return colors[random];
}

function addNewCardNotes() {
    const title = prompt("Enter your title!!");

    if (title !== null && title.trim() !== "") {
        const newNote = {
            id: Date.now(),
            title: title.trim(),
            tasks: [],
            backgroundColor: backgroundColor(),
        };

        const notes = getNotes();

        notes.push(newNote);

        saveNotes(notes);

        createCardNotes(notes);
    } else {
        alert("Please!! enter your title");
    }
}

btnNewNote.addEventListener('click', addNewCardNotes)


console.log(getNotes());
