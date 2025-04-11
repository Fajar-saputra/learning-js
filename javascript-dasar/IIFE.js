/* ​‌‍‌⁡⁢⁣⁢IIFE (Immediately Invoked Function Expression)⁡​ */

/* ⁡⁣⁢⁢IIFE⁡ ⁡⁣⁣⁢adalah function yang dipanggil langsung setelah dibuat. Ini berguna untuk mengisolasi 
variabel dan mencegahnya mengganggu kode lain.⁡ */

(function () {
    console.log("tess IIFE dipanggil!!");
})();

const appConfig = (function () {
    const apiKey = "1234";
    const urlKey = "https://api.example.com";

    return {
        getApiKey: function () {
            return apiKey;
        },
        getUrlKey: function () {
            return urlKey;
        },
    };
})();

console.log(appConfig.getApiKey()); // cara panggil variabel dengan function
console.log(appConfig.getUrlKey()); // cara panggil variabel dengan function
