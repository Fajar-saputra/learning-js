let buttonAdd = document.querySelector(".todo__button");
let inputUser = document.querySelector(".todo__input");

// function crateList() {
    let listItem = document.querySelector(".list__item");
    let liElement = document.createElement("li").classList.add("list__item-todo");
    let paragraf = document.createElement("p");
    let buttonsList = document.createElement("div").classList.add("buttons__list");
    let buttonCoret = document.createElement("span").classList.add("coret__list");
    let buttonHapus = document.createElement("span").classList.add("hapus__list");

console.log(listItem)

    paragraf.textContent = inputUser.value;

    buttonsList.appendChild(buttonHapus);
    buttonsList.appendChild(buttonCoret);

    liElement.appendChild(paragraf);
    liElement.appendChild(buttonsList);

    listItem.appendChild(liElement);
// }


// buttonAdd.addEventListener("click", crateList);
