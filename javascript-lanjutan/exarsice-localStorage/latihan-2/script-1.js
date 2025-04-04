let user = {
    nama: 'Elvira',
    umur: 18,
    hobby: ['baca', 'game', 'makan']
}


//  simpan
localStorage.setItem('user', JSON.stringify(user))

if (user !== null) {
    console.log(user)
} else {
    console.error('eror')
}

// ambil

let takeDate = JSON.parse(localStorage.getItem('user'));

if (takeDate) {
    console.log(`Name : ${takeDate.nama}`  )
    console.log(`Name : ${takeDate.umur}`  )
    console.log(`Name : ${takeDate.hobby}`  )
} else {
    console.error('error ketika ambil')
}