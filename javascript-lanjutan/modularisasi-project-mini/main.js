import capitalize, { lengthString } from "./modules/string.js";

const input = document.querySelector(".input");
const capitalizeSpan = document.querySelector(".capitalize");
const btn = document.querySelector(".btn");
const lengthSpan = document.querySelector(".length");

btn.addEventListener("click", () => {
    const valueInput = input.value; 
    if (valueInput.trim() !== "") { 
        capitalizeSpan.textContent = capitalize(valueInput); 
        lengthSpan.textContent = lengthString(valueInput);
    } else {
        alert("Please enter your message")
    }

    console.log("diklik");
    console.log("Nilai input saat diklik:", valueInput);
})

console.log("Nilai input awal:", input.value);




