const input = document.querySelector("input"),
    colorCode = document.querySelector(".colorCode"),
    body = document.querySelector("body");

input.addEventListener("input", (Event) => {
    let selectValue = Event.target.value;

    body.style.backgroundColor = selectValue;

    colorCode.textContent = selectValue;
});
