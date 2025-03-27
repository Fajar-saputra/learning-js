document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector(".todo__input"),
        addButton = document.querySelector(".todo__button"),
        todoList = document.querySelector(".todo__list");

    // fungsi menambahkan tugas
    function addTask() {
        if (input.value.trim() === "") {
            alert("Add Task please!!");
            return;
        }

        // buat elemen li
        const li = document.createElement("li");
        li.classList.add("list__item-todo");
        // buat button hapus
        const buttonHapus = document.createElement("span");
        buttonHapus.classList.add("hapus__list");

        // paragraf
        let paragraf = document.createElement("p");
        paragraf.textContent = input.value;

        //  tambahkan even listener untuk hapus tugas
        buttonHapus.addEventListener("click", () => {
            li.remove();
        });

        li.appendChild(paragraf);
        li.appendChild(buttonHapus);

        todoList.appendChild(li);

        // kosongkan input setelah menambahkan tuas
        input.value = "";
    }

    // Event listner tombol tambah
    addButton.addEventListener("click", addTask);

    // event listener untuk enter key
    input.addEventListener("keydown", (event) => {
        if (event.key === "enter") {
            addTask();
            alert('test');
        }
    });
});
