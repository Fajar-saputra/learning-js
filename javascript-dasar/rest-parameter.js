function sum(name, ...data) {
    let total = 0;

    for (const item of data) {
        total += item;
    }

    console.log(`Total ${name} is ${total}`);
}

sum("Drance", 2, 4, 5, 7, 2, 7);
sum("mangga", 1, 1, 1, 1, 1, 1);

const totalNilai = function (siswa, ...nilai) {
    let total = 0;

    for (const item of nilai) {
        total += item;
    }

    console.log(`Total nilai siswa ${siswa} adalah ${total}`);
};

totalNilai("Elvin", 9, 6, 8, 8, 8, 7, 9, 9);

// spread syntax di rest parameter

function averageSum(nameSiswa, ...nilai) {
    let total = 0;

    for (const item of nilai) {
        total += item;
    }

    rata = total / nilai.length;

    console.log(`Rata-rata nilai ${nameSiswa} adalah ${rata}`);
}

averageSum("Elvira", ...[90, 89, 83, 85, 80, 81]);
