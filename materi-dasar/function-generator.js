function* createNames() {
    yield "elvira";
    yield "elfina";
    yield "elvin";
}

const names = createNames();

for (const name of names) {
    console.log(name);
}

function* buatGanjil(value) {
    for (let i = 1; i <= value; i++) {
        if (i % 2 === 1) {
            yield i;
        }
    }
}

const angkaGanjil = buatGanjil(100);

for (const angka of angkaGanjil) {
    console.info(angka)
}
