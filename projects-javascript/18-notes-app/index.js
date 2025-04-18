// get element
const actionAdd = document.querySelector(".action-add"),
    actionDelete = document.querySelector(".action-clear"),
    notesWrapper = document.querySelector(".notes-wrapper"),
    noteCard = document.querySelector(".note-card"),
    noteTitle = document.querySelector(".note-title"),
    noteList = document.querySelector(".note-list"),
    noteItem = document.querySelector(".note-item");

function saveData(data) {
    localStorage.setItem("notes", JSON.stringify(data));
}

function getNotes() {
    try {
        return JSON.parse(localStorage.getItem("notes")) || [];
    } catch (e) {
        console.error("Data rusak, reset localStorage");
        localStorage.removeItem("notes");
        return [];
    }
}

function addTaks() {
    const noteItem = document.createElement("li");
}
