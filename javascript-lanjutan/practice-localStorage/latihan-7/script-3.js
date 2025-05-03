// Mendapatkan referensi ke elemen container tempat semua catatan akan ditampilkan
const container = document.querySelector(".container");
// Mendapatkan referensi ke tombol "New" untuk membuat catatan baru
const btnNewNote = document.querySelector(".btnNew");

function saveNotes(notes) {
    localStorage.setItem("notes", JSON.stringify(notes));
}

function getNotes() {
    try {
        const notes = localStorage.getItem("notes");
        return notes ? JSON.parse(notes) : [];
    } catch (error) {
        console.log("Notes error : ", error);
        return [];
    }
}

function createNoteCard(notes) {
    const noteCard = document.createElement("div");
    noteCard.classList.add("card-note");
    noteCard.setAttribute("data-note-color", notes.backgroundColor);

    noteCard.innerHTML = `  <h1 class="title">${notes.title}<i class='bx bx-x-circle btnRemove'></i></h1>
                            <input type="text" placeholder="enter your task" class="note-input">
                            <ul class="list" data-note-id="${notes.id}"></ul>
                            <button class="add-note-task" data-note-id="${notes.id}">add</button>`;

    container.appendChild(noteCard);

    renderAllTasks(noteCard.querySelector(".list"), notes.tasks);
}

function addNewNote() {
    const title = prompt("Enter your title note!!!");

    if (title !== null && title.trim() !== " ") {
        const notes = getNotes();

        const color = backgroundColor();

        const newNote = {
            id: Date.now(),
            title: title.trim(),
            tasks: [],
            backgroundColor: color,
        };

        notes.push(newNote);

        saveNotes(notes);

        createNoteCard(newNote);
    }
}

function backgroundColor() {
    const colors = ["yellow", "green", "pink", "purple", "blue"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

function renderAllNotes() {
    container.innerHTML = "";

    const notes = getNotes();

    notes.forEach((note) => createNoteCard(note));

    addEventListenerNote();
}

function renderAllTasks(taskList, tasks) {
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.classList.add("item-list");
        // Menambahkan span untuk teks tugas (untuk fitur edit) dan tombol-tombol aksi
        li.innerHTML = `<span class="task-text" data-task-index="${index}">${task}</span>
                         <div class="buttons">
                             <i class='bx bx-check btnComplete'></i>
                             <i class='bx bx-message-alt-minus btnRemove'></i>
                         </div>`;
        // Menambahkan elemen li ke dalam daftar tugas
        taskList.appendChild(li);
    });
}

function addNewTask(noteId, textContent) {
    const notes = getNotes();

    const index = notes.findIndex((note) => note.id === parseInt(noteId));

    if (index !== -1) {
        notes[index].tasks.push(textContent);

        saveNotes(notes);

        const noteCard = container.querySelector(`[data-note-id="${noteId}"]`).closest(".card-note");
        if (noteCard) {
            const list = noteCard.querySelector(".list");
            renderAllTasks(list, notes[index].tasks);

            const input = noteCard.querySelector(".note-input");
            input.value = "";
        }
    }
}

function removeTaskNote(noteId, taskTextToRemove, listItemToRemove) {
    const notes = getNotes();

    const index = notes.findIndex((note) => note.id === parseInt(noteId));

    if (index !== -1) {
        notes[index].tasks = notes[index].tasks.filter((task) => task !== taskTextToRemove);

        saveNotes(notes);

        listItemToRemove.remove();

        console.log("Removing task:", taskTextToRemove, "from note:", noteId);
    }
}

function addEventListenerNote() {
    container.addEventListener("click", (event) => {
        // add tasks
        const addTask = event.target.closest(".add-note-task");
        if (addTask) {
            const noteId = addTask.dataset.noteId;
            const input = addTask.parentNode.querySelector(".note-input");
            const textContent = input.value.trim();

            if (textContent !== "") {
                addNewTask(noteId, textContent);
            } else {
                alert("Invalid tasks!!");
            }
        }

        // remove tasks
        const removeTask = event.target.closest(".btnRemove");
        if (removeTask) {
            const listItem = removeTask.closest(".item-list");
            const list = listItem.closest(".list");

            if (listItem) {
                const noteId = list.dataset.noteId;
                const taskTextToRemove = listItem.querySelector(".task-text").textContent.trim();

                removeTaskNote(noteId, taskTextToRemove, listItem);
            } else {
                console.log("eror");
            }
        }

        // complete task
        const completeTask = event.target.closest(".btnComplete");
        if (completeTask) {
            // const list = completeTask.parentNode.closest(".list")
            const listItem = completeTask.previousElementSibling;
            // const noteId = listItem.dataset.noteId;
            // const listItem = completeTask.parentNode.parentNode;
            console.log(listItem);
            // console.log(noteId);
        }
    });
}

btnNewNote.addEventListener("click", addNewNote);

renderAllNotes();

console.log(getNotes());
