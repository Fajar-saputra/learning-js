function setColor(params) {
    document.body.style.backgroundColor = params;
    localStorage.setItem('warnaSimpan', JSON.stringify(params))
}

window.onload = function () {
    const warnaSimpan = JSON.parse(localStorage.getItem('warnaSimpan'))

    if (warnaSimpan) {
        document.body.style.backgroundColor = warnaSimpan
    }
}