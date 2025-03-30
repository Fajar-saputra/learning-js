// ubah objek ke dalam localStorage

let data = {
    nama: "Elvira Maharani",
    kelas: 8,
    umur: 18,
};

const isiData = JSON.stringify(data, null, 2)
console.log(isiData)



for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i)
    let value = localStorage.getItem(key)
    console.log(`${key} : ${value}`)
}

