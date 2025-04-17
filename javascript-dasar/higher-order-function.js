/* ​‌‍‌⁡⁢⁣⁢Higher-Order Functions dan Callback Functions⁡​ */

// ⁡⁣⁢⁢Higher-order functions⁡ ⁡⁣⁣⁢adalah function yang menerima function lain sebagai argumen atau mengembalikan function lain sebagai hasil.⁡

// ⁡⁣⁢⁢Callback function⁡ ⁡⁣⁣⁢adalah function yang dikirim sebagai argumen ke function lain dan dipanggil di dalam function tersebut.⁡

// contoh 1
// function selesaikanTugas(tugas, callback) {
//     console.log(`Menyelesaikan tugas ${tugas}`);
//     callback();
// }

// tugasSelesai = () => console.log("Tugas  selesai!!");

// function tugasSelesai() {
//     console.log("Tugas  selesai!!");
// }

// selesaikanTugas("javaScript", tugasSelesai);

// contoh 2 saat kita menggunakan addEventLisenner, setTimeout, setInterval, dan lain-lain

// contoh 3

function showAngka(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
        
    }
}
// showAngka(2, alert);
// showAngka(10, console.log);
