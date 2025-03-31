let userName = document.querySelector("userName"),
userUmur = document.querySelector("userUmur"),
userHobby = document.querySelector("userHobby");

let saveData = JSON.parse(localStorage.getItem(" saveData")) || [];

let user = {
    name: userName,
    umur: userUmur,
    hobby: userHobby,
};

localStorage.setItem("saveData", JSON.stringify(saveData));

const dislayData = JSON.stringify(user, null, 3);

console.log(dislayData);

// console.log(user)
