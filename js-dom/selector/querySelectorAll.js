// document.querySelectorAll()
// menghasilkan nodeList

const paragraf = document.querySelectorAll("p");
paragraf.forEach((Element) => {
    Element.style.backgroundColor = "orange";
    console.log(Element);
});
