const countDown = document.querySelector(".countdown"),
    daysElement = document.querySelector("#days"),
    hoursElement = document.querySelector("#hours"),
    minutesElement = document.querySelector("#minutes"),
    secondElement = document.querySelector("#seconds"),
    inputHours = document.querySelector("#inputHours"),
    inputMinutes = document.querySelector("#inputMinutes"),
    inputSeconds = document.querySelector("#inputSeconds"),
    buttonStart = document.querySelector(".btn-start");

function startTimer() {
    let hours = parseInt(inputHours.value) || 0,
        minutes = parseInt(inputMinutes.value) || 0,
        second = parseInt(inputSeconds.value) || 0,
        totalTimesInSecond = hours * 3600 + minutes * 60 + second;

    //  clear the input after the timer starts
    inputHours.value = "";
    inputMinutes.value = "";
    inputSeconds.value = "";

    // function to update the time display every seconds
    countDownInterval = setInterval(() => {
        //  calculate remaining days, hours, minutes, and seconds

        const days = Math.floor(totalTimesInSecond / 86400),
            hours = Math.floor(totalTimesInSecond / 3600),
            minutes = Math.floor((totalTimesInSecond % 3600) / 60),
            second = Math.floor(totalTimesInSecond % 60);

        // update the html element display
        daysElement.textContent = days.toString().padStart(2, "0");
        hoursElement.textContent = hours.toString().padStart(2, "0");
        minutesElement.textContent = minutes.toString().padStart(2, "0");
        secondElement.textContent = second.toString().padStart(2, "0");

        // decrease the total time by one seconds
        totalTimesInSecond--;

        // stop the timer if time runs out
        if (totalTimesInSecond < 0) {
            clearInterval(countDownInterval);
            alert("Time's up!");
        }
    }, 1000);
}

document.querySelector("button").addEventListener("click", startTimer);
