// array
const angka = [1, 2, 3, 4, 5, 7, 8, 9, 10];

// const [a, b, c, d, ...rest] = angka;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(rest);

// object
// const mahasiswa = {
//     nama: "Elvira",
//     umur: 17,
//     semester: 7,
//     ipk: 4
// }

// const { nama, umur, ...dataLain } = mahasiswa;

// console.log(nama);
// console.log(umur);
// console.log(dataLain);

// const obj = {
//     a: 1,
//     b: { c: 2 }
// };

// const { a } = obj;
// let {
//   b: { c: d },
// } = obj;

// console.log({ c: d });
// console.log(a);
// console.log( {
//     b: { c: d },
//   });

// let satu = 32;
// let dua = 88;

// [satu, dua] = [dua, satu]

// console.log(satu);
// console.log(dua);

// const mahasiswa = {
//         nama: "Elvira",
//         umur: 17,
//         semester: 7,
//         ipk: 4
// }

// const { nama: n, umur: u, semester: s, ipk: i } = mahasiswa;
// console.log(n);

// ({ nama, umur, semester, ipk } = {
//             nama: "Elvira",
//         umur: 17,
//         semester: 7,
//         ipk: 4
// })

// console.log(nama);

// const mahasiswa = {
//     id: 34343147878,
//     nama: "Elvira",
//     umur: 17,
//     semester: 7,
//     ipk: 4,
// };

// function getProperti({ nama, id }) {
//     return [id, nama];
// }

// function duluGet(obj) {
//     return obj.nama;
// }

// console.log(duluGet(mahasiswa));
// console.log(getProperti(mahasiswa));

// function kalkulasi1(a, b) {
//     return [a + b, a - b, a * b, a / b];
// }
// const [tambah, kurang, kali, bagi] = kalkulasi1(5, 7);

// function kalkulasi2(a, b) {
//     return {
//         tambah: a + b,
//         kurang: a - b,
//         kali: a * b,
//         bagi: a / b,
//     };
// }

// const { kurang, tambah, bagi, kali } = kalkulasi2(5, 7);

// console.log(tambah);
// console.log(kurang);
// console.log(kali);
// console.log(bagi);

const mahasiswa = {
    id: 34343147878,
    nama: "Elvira",
    umur: 17,
    semester: 7,
    ipk: 4,
    karakter: {
        sosial: "Murah senyum",
        individu: "disiplin",
    },
};

const infoMahasiswa = ({ nama, semester, karakter: { individu } }) => {
    console.log(`Nama Mahasiswa : ${nama} sudah semester : ${semester} dengan karekter individu : ${individu}`);
};

infoMahasiswa(mahasiswa);
