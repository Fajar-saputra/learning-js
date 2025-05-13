const url = "https://reqres.in/api/users?page=1";
const apiKey = "reqres-free-v1";

async function getUserData() {
    try {
        const res = await fetch(url, {
            method: "GET", // default boleh dihapus
            headers: {
                "x-api-key": apiKey,
            },
        });

        const datas = await res.json();

        renderUser(datas.data)
    } catch (error) {
        console.log("Gagal memuat : ", error);
    }
}

function renderUser(users) {
    const listUser = document.querySelector(".list-user");

    users.forEach((user) => {
        const li = document.createElement("li");
        li.textContent = `👨‍💼 ${user.first_name} ${user.last_name} - ${user.email}`;
        listUser.appendChild(li);
    });
}

getUserData();
