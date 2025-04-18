const angkaRandom = [3, 6, 7, -3, -6, 1, -7, 3, 8, -7, 6, 3, 2, 5, 10];

// const newNumber = [];

// for
// for (let index = 0; index < angkaRandom.length; index++) {
//     if (angkaRandom[index] > 5) {
//         newNumber.push(angkaRandom[index]);
//     }
// }


// filter
// const newNumber = angkaRandom.filter((isi, index) => {
//     console.log(isi)
//     console.log(index)
// })

// const newNumber = angkaRandom.filter((item => item > 5))

// map
// const newNumber = angkaRandom.map((isi, index) => {
//     console.log(isi)
//     console.log(index)
// })

// const newNumber = angkaRandom.map((item => item > 5))

// method Chaining
// contoh penggunaannya

const hasil = angkaRandom.filter(item => item > 6).map(item => item *3).reduce((acc, cur) => acc  + cur)

