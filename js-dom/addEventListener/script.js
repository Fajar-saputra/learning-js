const p4 = document.querySelector("section#b p");

// p4.addEventListener("click", () => {
//     p4.classList.toggle("toggle");
// });

// let isToggel = false;
// p4.addEventListener("click", function () {
//     if (isToggel) {
//         p4.style.backgroundColor = "";
//     } else {
//         p4.style.backgroundColor = "aqua";
//     }
//     isToggel = !isToggel;
// });

p4.addEventListener("click", function () {
    p4.classList.toggle("toggle");
    const liBaru = document.createElement("li");
    const isiLi = document.createTextNode("item baru");
    liBaru.appendChild(isiLi);
    const ul = document.querySelector("section#b ul");
    ul.appendChild(liBaru);
});
