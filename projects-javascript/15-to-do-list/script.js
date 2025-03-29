document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector(".todo__input"),
        addButton = document.querySelector(".todo__button"),
        todoList = document.querySelector(".todo__list");

    // fungsi menambahkan tugas
    function addTask() {
        if (!input.value.trim()) {
            alert("add tasks");
            return;
        }

        // buat elemen list li
        const li = document.createElement("li");
        li.classList.add("list__item-todo");

        // bungkus
        const buttonsList = document.createElement("div");
        buttonsList.classList.add("buttons__list");

        //  button hapus
        const buttonHapus = document.createElement("span");
        buttonHapus.classList.add("hapus__list");

        //  button coret
        const buttonCoret = document.createElement("span");
        buttonCoret.classList.add("coret__list");

        // button edit
        const buttonEdit = document.createElement("span");
        buttonEdit.classList.add("edit__list");

        // paragraf
        let paragraf = document.createElement("p");
        paragraf.textContent = input.value;

        li.appendChild(paragraf);
        buttonsList.appendChild(buttonCoret);
        buttonsList.appendChild(buttonHapus);
        buttonsList.appendChild(buttonEdit);
        li.appendChild(buttonsList);

        todoList.appendChild(li);

        buttonCoret.addEventListener("click", () => {
            li.style.textDecoration = "line-through";
        });

        buttonEdit.addEventListener("click", () => {
            let newText = prompt("Edit Task: ", paragraf.textContent);
            if (paragraf !== null && newText.trim() !== "") {
                paragraf.textContent = newText;
                console.log(newText);
            }
        });

        buttonHapus.addEventListener("click", () => {
            li.remove()
        })

        input.value = "";
    }

    // Event listner tombol tambah
    addButton.addEventListener("click", addTask);

    // event listener untuk enter key
    input.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    });
});
// document.addEventListener("DOMContentLoaded", () => {
//     const input = document.querySelector(".todo__input"),
//         addButton = document.querySelector(".todo__button"),
//         todoList = document.querySelector(".todo__list");

//     // fungsi menambahkan tugas
//     function addTask() {
//         if (input.value.trim() === "") {
//             alert("Add Task please!!");
//             return;
//         }

//         // buat elemen list li
//         const li = document.createElement("li");
//         li.classList.add("list__item-todo");

//         // bungkus
//         const buttonsList = document.createElement("div");
//         buttonsList.classList.add('buttons__list')

//         //  button hapus
//         const buttonHapus = document.createElement("span");
//         buttonHapus.classList.add("hapus__list");

//         //  button coret
//         const buttonCoret = document.createElement("span");
//         buttonCoret.classList.add("coret__list");

//         // button edit
//         const buttonEdit = document.createElement('span')
//         buttonEdit.classList.add('edit__list')

//         // paragraf
//         let paragraf = document.createElement("p");
//         paragraf.textContent = input.value;

//         li.appendChild(paragraf);
//         buttonsList.appendChild(buttonCoret);
//         buttonsList.appendChild(buttonHapus);
//         buttonsList.appendChild(buttonEdit);
//         li.appendChild(buttonsList)

//         todoList.appendChild(li);

//         //  tambahkan even listener untuk hapus tugas
//         buttonHapus.addEventListener("click", () => {
//             li.remove();
//         });

//         // tambahkan event listener untuk coret tugas
//         buttonCoret.addEventListener("click", () => {
//             li.style.textDecoration = "line-through";
//         });

//         // tambahkan event listener untuk edit tugas
//         buttonEdit.addEventListener('click', () => {
//             let newText = prompt('Edit Tugas: ', paragraf.textContent);
//             if (paragraf !== null && paragraf.trim() !== '') {
//                 paragraf.textContent = newText;
//             }
//         })

//         // kosongkan input setelah menambahkan tuas
//         input.value = "";
//     }

//     // Event listner tombol tambah
//     addButton.addEventListener("click", addTask);

//     // event listener untuk enter key
//     input.addEventListener("keydown", (event) => {
//         if (event.key === "enter") {
//             addTask();
//             alert("test");
//         }
//     });
// });
