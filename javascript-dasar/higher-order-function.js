/* ​‌‍‌⁡⁢⁣⁢Higher-Order Functions dan Callback Functions⁡​ */

// ⁡⁣⁢⁢Higher-order functions⁡ ⁡⁣⁣⁢adalah function yang menerima function lain sebagai argumen atau mengembalikan function lain sebagai hasil.⁡

// ⁡⁣⁢⁢Callback function⁡ ⁡⁣⁣⁢adalah function yang dikirim sebagai argumen ke function lain dan dipanggil di dalam function tersebut.⁡

function selesaikanTugas(tugas, callback) {
    console.log(`Menyelesaikan tugas ${tugas}`);
    callback();
}

tugasSelesai = () => console.log("Tugas  selesai!!");

// function tugasSelesai() {
//     console.log("Tugas  selesai!!");
// }

selesaikanTugas("javaScript", tugasSelesai);
