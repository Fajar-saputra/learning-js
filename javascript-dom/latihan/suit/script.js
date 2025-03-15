function rulesGame(player, comp) {
    let h1 = document.querySelector(".result-game h2");
    const outcomes = {
        rock: { scissors: "WIN", paper: "LOSE" },
        scissors: { paper: "WIN", rock: "LOSE" },
        paper: { rock: "WIN", scissors: "LOSE" },
    };

    if (player === comp) return (h1.textContent = "REMIS");
    const result = outcomes[player][comp];

    return (h1.textContent = result);
}

// Menambahkan logika untuk memilih opsi komputer
function compOption() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    const compChoice = choices[randomIndex];

    // Mengubah gambar komputer
    const compImg = document.querySelector(".computer img");
    if (compChoice === "rock") {
        compImg.src = "images/batu_b.jpg";
    } else if (compChoice === "paper") {
        compImg.src = "images/kertas_b.jpg";
    } else {
        compImg.src = "images/gunting_b.jpg";
    }

    return compChoice;
}

let player = document.querySelectorAll(".player-options img");
// Menambahkan logika untuk memilih opsi pemain dan komputer
function playerOption() {
    // Mengambil pilihan pemain dari elemen gambar
    player.forEach((img) => {
        img.addEventListener("click", () => {
            const playerChoice = img.getAttribute("class"); // Misalkan kita menggunakan atribut class
            const compChoice = compOption(); // Memanggil fungsi untuk mendapatkan pilihan komputer
            rulesGame(playerChoice, compChoice); // Memanggil fungsi untuk menentukan hasil
        });
    });
}

// Memanggil fungsi playerOption untuk memulai permainan
playerOption();
