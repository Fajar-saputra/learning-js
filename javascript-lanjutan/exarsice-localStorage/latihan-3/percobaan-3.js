let ul = document.querySelector(".list-item");
let li = document.createElement("li");
let addButton = document.querySelector(".tambahList");
let input = document.querySelector("#inputItem");
let hapus = document.querySelector(".hapusList");

let data = JSON.parse(localStorage.getItem("data")) || [];

function saveData() {
    localStorage.setItem("data", JSON.stringify(data));
}

console.log(data);

function render() {
    ul.innerHTML = "";

    data.forEach((element) => {
        createElement(element);
        console.log(element);
    });
}

function createElement(element,index) {
    let spanElement = document.createElement("span");
    spanElement.classList.add("hapusList");
    let li = document.createElement("li");
    li.classList.add("item");

    li.textContent = element;
    li.appendChild(spanElement);
    ul.appendChild(li);


}



saveData()

function add() {
    if (input.value.trim() === "") {
        alert("Add Task please!!");
        return;
    }

    data.push(input.value);
    saveData();
    render();

    // kosongkan input setelah menambahkan tuas
    input.value = "";
}

addButton.addEventListener("click", add);

render();
