// document.querySelector()
// menghasilkan 1 element
const itemLi = document.querySelector("li:nth-child(2)");
itemLi.style.color = "white";
itemLi.style.backgroundColor = "orange";

// KETIKA KITA MENGGUNAKAN querySelector() INI HANYA AKAN MENARGET
// 1 BUAH SELECTOR JIKA KITA INGIN MENARGETKAN SEMUA TAG P MAKA MENGGUNAKAN
// querySelectorAll()
const paragraf = document.querySelector("p");
paragraf.innerHTML = "INI DIUBAH";
paragraf.style.fontSize = "2rem";
paragraf.style.fontWeight = "bold";
