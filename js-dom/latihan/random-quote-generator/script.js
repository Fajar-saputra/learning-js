// array that store a list of quotes and their author

const arrayQuote = [
    { text: "ini kalimat quote pertama", author: "Elvin" },
    { text: "ini kalimat quote kedua", author: "Elvira" },
    { text: "ini kalimat quote ketiga", author: "Elfita" },
    { text: "ini kalimat quote keempat", author: "Otong" },
    { text: "ini kalimat quote kelima", author: "Asep" },
    { text: "ini kalimat quote keenam", author: "Sepuh" },
    { text: "ini kalimat quote ketujuh", author: "Tono" },
    { text: "ini kalimat quote kedelapan", author: "Adik Tono" },
    { text: "ini kalimat quote kesembilan", author: "Marjan" },
    { text: "ini kalimat quote kesepulh", author: "Kecap ABC" },
];

const elementQuote = document.querySelector(".quote"),
    ElementAuthor = document.querySelector(".author"),
    newQuote = document.querySelector(".new-quote");

function generatorQuete() {
    let randomIndex = Math.round(Math.random() * 10),
        randomQuotoe = arrayQuote[randomIndex];

    elementQuote.textContent = `" ${randomQuotoe.text} "`;
    ElementAuthor.textContent = `~ ${randomQuotoe.author} ~`;
}

newQuote.addEventListener("click", generatorQuete)

generatorQuete();
