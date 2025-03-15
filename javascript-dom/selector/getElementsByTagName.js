// document.getElementByTagName
// menghasilkan HTMLcollection

// cara target 1
// const target1 = document.getElementsByTagName("p");

// console.log(target1);
// target1[0].style.color = "white";
// target1[0].style.background = "darkorchid";
// target1[0].style.fontSize = "2rem";

// cara target 2
// const target2 = document.getElementsByTagName("p")[2];

// console.log(target2);
// target2.style.color = "yellow";
// target2.style.background = "darkred";
// target2.style.fontSize = "2.5rem";

// cara target semua
const target3 = document.getElementsByTagName("p");

console.log(target3);

for (let i = 0; i < target3.length; i++) {
    console.log(target3[i]);
    target3[i].style.background = "aqua";
    target3[i].style.fontSize = "1rem";
}
