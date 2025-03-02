const buttonClick = document.querySelector(".btn-ul"),
    hapusLi = document.querySelector(".btn-hapus-li"),
    elementli = document.querySelectorAll("li");

let itemNumber = 4;

buttonClick.addEventListener("click", function () {
    buttonClick.classList.toggle("toggle");

    const elementLi = document.createElement("li");
    const elementContent = document.createTextNode(`item baru ${itemNumber}`);
    elementLi.appendChild(elementContent);

    const elementUl = document.querySelector(".list-item");
    elementUl.appendChild(elementLi);
    itemNumber++;
});

hapusLi.forEach(itemLi => {
    hapusLi.addEventListener('click', () => {
        itemLi.remove()
    })
});


const paragraf = document.querySelectorAll("p"),
    buttonParagraf = document.querySelector(".btn-p");

paragraf.forEach((element) => {
    element.addEventListener("click", function () {
        element.style.color = "red";
    });
});

console.log(paragraf);
