// BUTTON
const btn = document.querySelector(".btn");

function random() {
    return Math.floor(Math.random() * 255);
}

btn.addEventListener("click", () => {
    let r = random();
    let g = random();
    let b = random();
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

// input type="range"
const range = document.querySelectorAll("input");

for (let i = 0; i < range.length; i++) {
    range[i].addEventListener("input", function () {
        const r = range[0].value;
        const g = range[1].value;
        const b = range[2].value;

        document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        console.log(r, g, b);
    });
}

// mousemove
document.body.addEventListener("mousemove", function (event) {
    xPos = Math.floor((event.clientX / innerHeight) * 255);
    yPos = Math.floor((event.clientY / innerWidth) * 255);
    document.body.style.backgroundColor = `rgb(${xPos}, ${yPos}, 100)`;
    console.log(xPos, yPos);
});
