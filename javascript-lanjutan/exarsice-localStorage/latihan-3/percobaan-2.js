let data = JSON.parse(localStorage.getItem("data")) || [];

const inputUser = document.querySelector("#inputItem");
const listItem = document.querySelector(".list-item");


function tambahList() {
    if (inputUser.value === "") {
        return;
    }

    // save to list
    list.textContent = inputUser.value;
    listItem.appendChild(list);

    //  save to localStorage
    data.push(inputUser.value);

    console.log(listItem);

    localStorage.setItem("data", JSON.stringify(data));

    console.log(`data berhasil ${inputUser.value}`);

    inputUser.value === "";
}

console.log(data);

function showData() {
    for (let index = 0; index < data.length; index++) {
        list.textContent = data[index];
        listItem.appendChild(list);
    }
}

showData();
