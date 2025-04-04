const userName = document.querySelector("#userName"),
    userUmur = document.querySelector("#userUmur"),
    userHobby = document.querySelector("#userHobby"),
    save = document.querySelector("button");

console.log(userName);
console.log(userUmur);
console.log(userHobby);

let dataUser = JSON.parse(localStorage.getItem("user")) || {};

// // minta user input
// let nama = userName.value;
// let umur = userUmur.value;
// let hobby = userHobby.value;

// console.log(nama)
// console.log(umur)
// console.log(hobby)

// umur = parseInt(umur);

// hobby = hobby.split(",").map(item => item.trim())

// // buat objek

let user = {
    nama: userName.value,
    umur: userUmur.value,
    hobby: userHobby.value
};

// simpan

save.addEventListener("click", () => {
    localStorage.setItem("user", JSON.stringify(user));

    userName.value = "";
    userUmur.value = "";
    userHobby.value = "";
});

if (user) {
    console.log("data tersimpan!!", user);
} else {
    console.log("error");
}
