let angka = [1, 2, 3, 4, 5];

let liat = JSON.parse(localStorage.getItem(angka)) || []


angka.push(8)

localStorage.setItem("angka", JSON.stringify(angka)) 

