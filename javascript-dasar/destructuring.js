const names = ["Elvira", "Elfita", "Elvin", "Otong", "Asep"];

names.forEach((element) => {
    console.log(element);
});

// ambil data array
// const firstName = names[0];
// const secondName = names[1];
// const thirdName = names[2];
// const fourtName = names[3];
// const fiveName = names[4];

console.log("\n");
//  destructing array
const [firstName, secondName, thirdName, ...others] = names;

// ambil data biasa
console.info(firstName);
console.info(secondName);
console.info(thirdName);
console.info(others);

// mengambil data object
const person = {
    firstNamee: "Elvira",
    lastNamee: "Maharani",
    address: {
        street: "Jln Pasar Batukambing",
        city: "Padang",
        west: "Indonesia",
    },
    hobby: "Belajar",
    prodi: "Teknik Informatika",
};

// destructuring objeck
const { firstNamee, lastNamee, address, ...dataLain } = person;

console.info(firstNamee);
console.info(lastNamee);
console.info(address);
console.info(dataLain);

// destructuring objeck nested
const mobil = {
    nama: "Ferrari",
    tahun: "2000",
    warna: "Blue",

    asset: {
        mesin: "v12",
        model: "air dinamika",
        body: "fyber",
    },

    harga: 300000000,
    pajak: 2000000,
};

const {
    nama,
    tahun,
    warna,
    asset: { mesin, model, body },
    ...other
} = mobil;

console.log(nama)
console.log(tahun)
console.log(warna)
console.log(mesin)
console.log(model)
console.log(body)
console.log(other)