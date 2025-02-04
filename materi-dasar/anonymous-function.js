/* anonymous function */

/* 

Sebelumnya kita selalu membuat function dengan nama

Kita juga bisa membuat function tanpa nama function, atau istilahnya adalah anonymous function

Kita bisa buat anonymous function dalam sebuah variable atau bisa juga kita buat ketika mengisi parameter

*/

// contoh anonymous function di variabel

let say = function (name) {
    console.log(`Hello ${name}`);
};

// contoh anonymous function di parameter
sumNumber(function (...numbers) {
    let sum = 0;
    // numbers != undefined ?
    for (const number of numbers) {
        sum += number;
    }

    return sum;
});

// console.log(sumNumber());
