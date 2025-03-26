let buttonAdd = document.querySelector(".todo__button"),
    inputUser = document.querySelector(".todo__input"),
    hapusBtn = document.querySelector(".hapus__list"),
    // coretBtn = document.querySelector(".coret__list"),
    li = document.querySelector(".list__item-todo");

let listItem = document.querySelector(".list__item");
let liElement = document.createElement("li");
let paragraf = document.createElement("p");
let buttonsList = document.createElement("div");
let buttonCoret = document.createElement("span");
let buttonHapus = document.createElement("span");

liElement.classList.add("list__item-todo");
buttonsList.classList.add("buttons__list");
buttonCoret.classList.add("coret__list");
buttonHapus.classList.add("hapus__list");

function crateList() {
    console.log(listItem);

    if (!inputUser.value) {
        alert("Tambah kegiatan dulu!!");
        return;
    }

    paragraf.textContent = inputUser.value;

    buttonsList.appendChild(buttonCoret);
    buttonsList.appendChild(buttonHapus);

    liElement.appendChild(paragraf);
    liElement.appendChild(buttonsList);

    listItem.appendChild(liElement);
}

let coretBtn = document.querySelectorAll(".coret__list");

coretBtn.forEach((element) => {
    element.addEventListener("click", () => {
        li.classList.toggle("coret");
    });
});

// coretBtn.addEventListener('click', () => {
//     li.classList.toggle('coret');
// })

buttonAdd.addEventListener("click", () => {
    crateList();
});
