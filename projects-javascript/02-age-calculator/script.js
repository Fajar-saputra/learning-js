const birthdateInput = document.getElementById("birthdate"),
    calculateBtn = document.getElementById("calculate-btn"),
    resultEl = document.getElementById("result");

console.log(birthdateInput);
console.log(calculateBtn);
console.log(resultEl);

calculateBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const birthdate = new Date(birthdateInput.value);

    const toDay = new Date();
    const umur = toDay.getFullYear() - birthdate.getFullYear();
    const bulan = toDay.getMonth() - birthdate.getMonth();

    if (bulan < 0 || (bulan === 0 && toDay.getDate() < birthdate.getDate)) {
        resultEl.textContent = `You are ${umur - 1} years old`;
    } else {
        resultEl.textContent = `You are ${umur} years old`;
    }
});
