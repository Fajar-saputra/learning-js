// main.js
import { renderTodos, hapusTodo } from "./modules/utils.js";
import { getTodos } from "./modules/getTodos.js";

function render() {
    const todos = JSON.parse(localStorage.getItem("todosCompleted")) || [];
    renderTodos(todos, "todo-list", handleDelete);
}

function handleDelete(id) {
    const updated = hapusTodo(id);
    renderTodos(updated, "todo-list", handleDelete); // Rekursif biasa
}


window.addEventListener("DOMContentLoaded", async () => {
    if (!localStorage.getItem("todosCompleted")) {
        try {
            await getTodos();
        } catch (err) {
            console.error("Gagal fetch data:", err);
        }
    }
    render();
});
