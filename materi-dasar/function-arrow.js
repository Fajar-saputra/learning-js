/* ​‌‍‌⁡⁢⁣⁢Arrow Functions⁡​ */

// ⁡⁣⁢⁢Arrow function⁡ ⁡⁣⁣⁢adalah cara singkat untuk menulis function expression, diperkenalkan di ES6.⁡

// contoh function deklarasion
function kali_dengan_function_deklarasion(a, b) {
    return a * b;
}

// ⁡⁣⁣⁢contoh function expression ⁡
let kali_dengan_function_expression = function (a, b) {
    return a * b;
};

// ⁡⁣⁣⁢contoh arrow function⁡
// let kali_dengan_arrow_function = (a, b) => {
//     return a * b;
// };

let kali_dengan_arrow_function = (a, b) => a * b;

// panggil
console.log(kali_dengan_function_deklarasion(3, 5));
console.log(kali_dengan_function_expression(3, 5));
console.log(kali_dengan_arrow_function(3, 5));
