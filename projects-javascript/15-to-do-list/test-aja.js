document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector(".todo__input"),
        addButton = document.querySelector(".todo__button"),
        todoList = document.querySelector(".todo__list");

    // ambil data dari localStorage
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // fungsi untu menyimpan ke localStorage
    function saveTasks() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    // fungsi menampilkan daftar tugas dari localStorage
    function renderTasks() {
        todoList.innerHTML = ""; // hapus isi list sebelum render ulnag
        tasks.forEach((task, index) => {
            createTaskElement(task, index);
        });
    }

    // fungsi menambahkan tugas
    function createTaskElement(task, index) {
        // buat elemen list li
        const li = document.createElement("li");
        li.classList.add("list__item-todo");

        // bungkus
        const buttonsList = document.createElement("div");
        buttonsList.classList.add("buttons__list");

        //  button coret
        const buttonCoret = document.createElement("span");
        buttonCoret.classList.add("coret__list");

        // button edit
        const buttonEdit = document.createElement("span");
        buttonEdit.classList.add("edit__list");

        // tambahkan event listener untuk edit tugas
        buttonEdit.addEventListener("click", () => {
            let newText = prompt("Edit Tugas: ", paragraf.textContent);
            if (newText !== null && newText.trim() !== "") {
                tasks[index] = newText;
                saveTasks();
                renderTasks();
            }
        });

        // paragraf
        let paragraf = document.createElement("p");
        paragraf.textContent = input.value;

        //  button hapus
        const buttonHapus = document.createElement("span");
        buttonHapus.classList.add("hapus__list");

        //  tambahkan even listener untuk hapus tugas
        buttonHapus.addEventListener("click", () => {
            tasks.splice(index, 1);
            saveTasks();
            renderTasks();
        });

        li.appendChild(paragraf);
        buttonsList.appendChild(buttonCoret);
        buttonsList.appendChild(buttonHapus);
        buttonsList.appendChild(buttonEdit);
        li.appendChild(buttonsList);

        todoList.appendChild(li);

        // tambahkan event listener untuk coret tugas
        buttonCoret.addEventListener("click", () => {
            li.style.textDecoration = "line-through";
        });
    }

    function addTask() {
        if (input.value.trim() === "") {
            alert("Add Task please!!");
            return;
        }

        tasks.push(input.value);
        saveTasks();
        renderTasks();

        // kosongkan input setelah menambahkan tuas
        input.value = "";
    }

    // Event listner tombol tambah
    addButton.addEventListener("click", addTask);

    // event listener untuk enter key
    input.addEventListener("keypress", function (event) {
        if (event.key === "enter") {
            addTask();
            alert("test");
        }
    });

    renderTasks();
});
