const timer = document.querySelector(".timer"),
    startEl = document.querySelector(".start"),
    stopEl = document.querySelector(".stop"),
    resetEl = document.querySelector(".reset");

let intervalid;
let waktu = 1500;

startEl.addEventListener("click", startTimer);
resetEl.addEventListener("click", resetTimer);
stopEl.addEventListener("click", stopTimer);

function formatWaktu() {
    let menit = Math.floor(waktu / 60);
    let detik = waktu % 60;

    return `${menit.toString().padStart(2, "0")}:${detik.toString().padStart(2, "0")}`;
}

function startTimer() {
    intervalid = setInterval(() => {
        waktu--;
        console.log(waktu);
        timer.textContent = formatWaktu(waktu);
        if (waktu === 0) {
            clearInterval(intervalid);
            alert("waktu habis");
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(intervalid);
    waktu = 1500;
    timer.textContent = formatWaktu(waktu);
}

function stopTimer() {
    clearInterval(intervalid);
}
