async function getTodos() {
    try {
        // fetch ke url
        const res = await fetch("https://jsonplaceholder.typicode.com/todos");
        if (!res.ok) throw new Error("Gagal memuat");

        const data = await res.json();
        const todos = data.filter((item) => item.completed);

        // simpan   ke localstorage
        localStorage.setItem("todosCompleted", JSON.stringify(todos));

        // render
        renderTodos();
    } catch (error) {
        console.log("Gagal mengambil data : ", error);
    }
}

function renderTodos() {
    const todos = JSON.parse(localStorage.getItem("todosCompleted")) || [];

    const list = document.querySelector("#todo-list");

    todos.forEach((todo) => {
        const li = document.createElement("li");
        li.textContent = todo.title;

        const btn = document.createElement("button");
        btn.textContent = "Hapus";
        btn.style.marginLeft = "1rem";

        btn.addEventListener("click", () => {
            hapusTodo(todo.id);
        });

        li.appendChild(btn);
        list.appendChild(li);
    });
}

function hapusTodo(id) {
    let todos =JSON.parse( localStorage.getItem("todosCompleted")) || [];

    todos = todos.filter(todo => todo.id !== id)

    localStorage.setItem("todosCompleted", JSON.stringify(todos))

    console.log("Item telah dihapus : ", id);
    
    renderTodos();
}

window.addEventListener("DOMContentLoaded", () => {
    if (!localStorage.getItem("todosCompleted")) {
        getTodos();
    } else {
        renderTodos();
    }
});
