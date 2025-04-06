function saveData() {
    let userName = document.getElementById("userName").value,
        userUmur = parseInt(document.getElementById("userUmur").value),
        userHobby = document.getElementById("userHobby").value

    let hobby = userHobby.split(",").map((item) => item.trim());

    let user = {
        nama: userName,
        umur: userUmur,
        hobby: hobby,
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("data berhasil disimpan!!");
}

function showData() {
    let data = JSON.parse(localStorage.getItem(user));
    if (data) {
        console.log('ada')
    } else {
        console.log("Data tidak tersimpan!!")
    }
}

document.querySelector("#save").addEventListener('click', saveData)
