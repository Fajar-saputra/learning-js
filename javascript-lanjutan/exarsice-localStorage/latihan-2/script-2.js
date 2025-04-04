let dataUser = JSON.parse(localStorage.getItem('user')) || {};

// minta user input
let nama = prompt('Enter your name : ', dataUser.nama || "");
let umur = prompt('Enter your old : ', dataUser.umur || "");
let hobby = prompt('Enter your hobby : ', (dataUser.hobby || []).join(','));

umur = parseInt(umur);

hobby = hobby.split(",").map(item => item.trim())

// buat objek

let user = {
    nama: nama,
    umur: umur,
    hobby: hobby
}

// simpan 
localStorage.setItem('user', JSON.stringify(user))

if (user) {
    console.log('data tersimpan!!', user)
} else {
    console.log('error')
}