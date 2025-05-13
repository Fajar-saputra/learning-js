// modules/utils.js
export function renderTodos(todos, containerId = "todo-list", onDelete) {
    const list = document.querySelector(`#${containerId}`);
    list.innerHTML = "";

    todos.forEach((todo) => {
        const li = document.createElement("li");
        li.textContent = todo.title;

        const btn = document.createElement("button");
        btn.textContent = "Hapus";
        btn.style.marginLeft = "1rem";
        btn.addEventListener("click", () => {
            onDelete(todo.id);
        });

        li.appendChild(btn);
        list.appendChild(li);
    });
}

export function hapusTodo(id) {
    let todos = JSON.parse(localStorage.getItem("todosCompleted")) || [];
    todos = todos.filter(todo => todo.id !== id);
    localStorage.setItem("todosCompleted", JSON.stringify(todos));
    return todos;
}


