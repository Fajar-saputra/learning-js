/* ​‌‍‌⁡⁢⁣⁢Arrow Functions⁡​ */

// ⁡⁣⁢⁢Arrow function⁡ ⁡⁣⁣⁢adalah cara singkat untuk menulis function expression, diperkenalkan di ES6.⁡

// ⁡⁣⁣⁢contoh arrow function⁡
// Membuat Arrow Function
// let kali_dengan_arrow_function = (a, b) => {
//     return a * b;
// };

// Arrow Function Tanpa Block
let kali_dengan_arrow_function = (a, b) => a * b;

console.log(kali_dengan_arrow_function(3, 5));

// Arrow Function Return Value
const sum = (first, second) => first + second;

console.log(sum(5, 5));

const sayHello = (nama) => {
    const say = `Hello ${nama}`;

    console.log(say);
};

const sayHaii = (nama) => console.log(`Haii ${nama}`);

// Arrow Function Tanpa Kurung Parameter
const sayHaiiTanpaKurung = (nama) => console.log(`Haii ${nama}`);

sayHello("Elvin");
sayHaii("Elvira");
sayHaiiTanpaKurung("Otong");

// Arrow Function Sebagai Parameter
function giveMeName(callback) {
    callback('Elvira')
}

giveMeName((nama) =>  console.info(`Namamu : ${nama}`))
 