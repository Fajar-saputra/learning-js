function bilRekursif(n) {
    if (n === 1) return 1;
    return n * bilRekursif(n - 1);
}

function segitiga(x) {
    if (x === 0) {
        return;
    }
    let baris = "";
    for (let i = 0; i < x; i++) {
        baris += "*";
    }

    segitiga(x - 1);
    console.log(baris);
}

console.log(bilRekursif(5));
console.log(segitiga(3));
