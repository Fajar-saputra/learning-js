export function waktuTunggu(waktu, callback) {
    setTimeout(() => {
        console.log("Waktu telah habis!!!");
        callback();
    }, waktu);
}