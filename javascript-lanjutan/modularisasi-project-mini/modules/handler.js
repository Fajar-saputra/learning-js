export default function handlerEvent({ input, capitalizeEl, lengthEl, capitalize, lengthString, reverseEl, reverseString }) {
    const valueInput = input.value;

    if (valueInput.trim() !== "") {
        capitalizeEl.textContent = capitalize(valueInput);
        lengthEl.textContent = lengthString(valueInput);
        reverseEl.textContent = reverseString(valueInput);
    } else {
        alert("Please enter your message");
    }

    console.log("diklik");
    console.log("Nilai input saat diklik:", valueInput);
}
