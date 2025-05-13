async function ambilDataUser() {
    try {
        const res = await fetch("https://reqres.in/api/users?page=1", {
            method : "GET",
            headers: {
                'x-api-key' : 'reqres-free-v1',
            }
        });
        const datas = await res.json();

        console.log("Data user : ", datas);
    } catch (error) {
        console.log("Gagal memuat data : ", error);
    }
}

ambilDataUser();
