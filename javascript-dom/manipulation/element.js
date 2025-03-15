// element.innerHTML
let paragraf = document.querySelector(".p2");

paragraf.innerHTML = "ini diubah menggunakan HTMLinner";
// apapun bisa dibuah dan ditambahkan dengan menggunakan innerHTML

// element.style.property
let liItem2 = document.querySelector("section#b ul li:nth-child(2)");
paragraf.style.backgroundColor = "orange";
paragraf.style.fontWeight = "bold";
paragraf.style.fontSize = "1rem";

// element.setAttribute("","")
// element.removeAttribute("","")
// element.getAttribute("","")
let itemLi1 = document.querySelector("section#b ul > li");
itemLi1.setAttribute("class", "item1");
itemLi1.setAttribute("id", "second-links");
itemLi1.setAttribute("href", "www.youtube.com");
itemLi1.setAttribute("title", "ini item list utama");
itemLi1.removeAttribute("href", "www.youtube.com");

// element.classList()
let itemLi3 = document.querySelector("section#b ul li:nth-child(3)");

// element.classList.add()
itemLi3.classList.add("satu");
itemLi3.classList.add("dua");
itemLi3.classList.add("tiga");
itemLi3.classList.add("empat");
itemLi3.classList.add("lima");
// element.classList.remove()
itemLi3.classList.add("empat");

// element.classList.toggle()
let btnItemLi3 = document.querySelector("section#b ul li:nth-child(3) button");
// ini boleh
btnItemLi3.addEventListener("click", () => {
    btnItemLi3.classList.toggle("toggle");
});
// ini juga bole
btnItemLi3.addEventListener("click", function (e) {
    btnItemLi3.classList.toggle("toggle");
});

// element.classList.item()
// itemLi3.classList.item(3);
// element.classList.contains()
// itemLi3.classList.contains("empat");

// function untuk button
function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

let button = document.querySelector(".btn-click");

button.addEventListener("click", () => {
    let rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    button.style.backgroundColor = rndCol;
});
