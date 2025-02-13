function giveMeName(callback) {
    callback('elvin')
}

giveMeName(function (name) {
    console.info(`Hello ${name}`)
});