document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector(".todo__input"),
        addButton = document.querySelector(".todo__button"),
        todoList = document.querySelector(".todo__list");

    
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // fungsi untuk save ke localStorage
    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }
});
