let singleTitik = "Hello world";
let doubleTitik = "   Hello world   ";
let dopTik = `Hello world`;
console.log(singleTitik);

// manipulasi string
console.log(singleTitik[3]); // akses string melalui index
console.log(singleTitik.length); // mengetahui panjang dari string
console.log(singleTitik.toUpperCase()); // ubah string menjadi uppercase
console.log(singleTitik.toLowerCase()); // ubah string menjadi lowercase
console.log(doubleTitik.trim()); // menghilangkan spasi yang berlebih

// gabung string
// 1. tradisional
let firstName = "Elvin";
let lastName = "Rahmatullah";
let result = firstName + " " + lastName;
console.log(result);

// 2. modern
let resultBastics = `${firstName} ${lastName}`;
console.log(resultBastics);


// ambil kata dalam string
console.log(result.slice(0, 6)) // ambil dari index 0 ke index end
console.log(resultBastics.substring(5)) // ambil dari index ke berapa

// ganti string
console.log(dopTik.replace("world", "kamy"))

// ubah string ke string
let rupiah = 6000000;
console.log(rupiah.toString())
console.log(typeof (rupiah))

// digit 
let angkaRandom = 1.34415
console.log(angkaRandom.toFixed(2))

// join()
let array = ['apple', 'mangga', 'durian', 'duku', 'rambutan'];

console.log(array.join('-'))
console.log(array.join(' '))
console.log(array.join(','))

// split()
let contohSplit1 = 'test-array-di-string'
let contohSplit2 = 'test array di string'
console.log(contohSplit1.split('-'))
console.log(contohSplit2.split(' '))