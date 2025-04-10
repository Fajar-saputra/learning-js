let randomNumber = Math.floor(Math.random() * 10) + 1;
// let randomNumber =2;

let attemps = 0

// get element
const starBtn = document.querySelector(".star");
const userInput = document.querySelector("#userInput");
const message = document.querySelector(".message");



function gameplay() {
    let guess = parseInt(userInput.value);

    attemps++;
    

    if (guess === randomNumber) {
        alert(`Selamat Tebakan Kamu benar ${randomNumber} dalam ${attemps} percobaan`);

        message.textContent = message.textContent;
        message.style.color = "green";

        resetAttemps()
    } else if (guess > randomNumber) {
        console.log(`Tebakan Kamu Salah!`);

        message.textContent = message.textContent;
        message.style.color = "red";
    }  else if (guess < randomNumber) {
        console.log(`Tebakan Kamu Salah!`);

        message.textContent = message.textContent;
        message.style.color = "red";
    }

    userInput.value = ""
}

function resetAttemps() {
    let attemps = 1;
    let randomNumber = Math.floor(Math.random() * 10) + 1;
}

starBtn.addEventListener('click', gameplay)

