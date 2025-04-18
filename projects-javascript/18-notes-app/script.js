// get element
const actionAdd = document.querySelector(".action-add"),
    actionDelete = document.querySelector(".action-clear"),
    notesWrapper = document.querySelector(".notes-wrapper"),
    noteCard = document.querySelector(".note-card"),
    noteTitle = document.querySelector(".note-title"),
    noteList = document.querySelector(".note-list"),
    noteItem = document.querySelector(".note-item");

console.log(notesWrapper);

function saveData(data) {
    localStorage.setItem("notes", JSON.stringify(data));
}

function getNotes() {
    try {
        return JSON.parse(localStorage.getItem("notes")) || {};
    } catch (e) {
        console.error("Data rusak, reset localStorage");
        localStorage.removeItem("notes");
        return [];
    }
}

function addNotes() {
    const Judul = prompt("Enter Title Note!")
    const noteList = prompt("Enter Title Note!")
    


    const noteCardElement = `<div class="note-card">
                <h3 class="note-title">${Judul}</h3>
                <ul class="note-list">
                    <li class="note-item">
                        ${noteList}
                        <span class="note-actions">
                            <i class='bx bx-task note-complete'></i>
                            <i class='bx bx-task-x note-delete'></i>
                        </span>
                    </li>
                    </ul>
            </div>`;

    notesWrapper.insertAdjacentHTML("beforeend", noteCardElement);
}

function clearAll() {
    notesWrapper.remove();
}

actionAdd.addEventListener("click", addNotes);

actionDelete.addEventListener("click", clearAll);
