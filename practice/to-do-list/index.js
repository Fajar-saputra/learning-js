document.addEventListener("DOMContentLoaded", () => {

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    function createTasks() {
        const ul = document.querySelector('.tasks')
        const input = document.querySelector('input')

        const li = document.createElement('li')

        li.textContent = input.value;

        ul.appendChild(li)
    }

    function tampil() {
        const listTasks = tasks;

        tasks.array.forEach(element => {
            
        });
    }

    function tasks(tasks) {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }
})