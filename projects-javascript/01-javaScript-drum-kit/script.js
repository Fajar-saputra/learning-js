// fungsi untuk menghapus class playing ketika propertyName sudah tidak transform lagi
function removeTransition(e) {
    // periksa apakah propertiName e tidak transfom lagi
    if (e.propertyName !== 'transform') {
        // keluar jika tidak transform maka keluar dari function
        return
    } else {
        // tambahkan kelas playing
        e.target.classList.remove('playing');
    }
}

// funciton untuk play sound
function playSound(e) {
    // target audio keyCode
    // keyCode adalah numerik pada keyboard
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

    console.log(audio)
    console.log(key)

    if (!audio) {
        return;
    }
    else {
        key.classList.add('playing');
        audio.currentTime = 0;
        audio.play();

    }

}

// document.addEventListener('keydown', (e) => {
//     console.log(`Tombol yang ditekan ${e.key}`)
//     console.log(`Numberik yang ditekan ${e.keyCode}`)
// })


const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);

