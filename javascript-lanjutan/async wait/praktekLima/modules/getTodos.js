// modules/getTodos.js
export async function getTodos() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    if (!res.ok) throw new Error("Gagal memuat");
    const data = await res.json();
    const todos = data.filter(todo => todo.completed);
    localStorage.setItem("todosCompleted", JSON.stringify(todos));
}
