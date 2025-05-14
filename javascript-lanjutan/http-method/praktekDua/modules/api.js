export async function fetchUsers(page) {
    try {
        const res = await fetch(`https://reqres.in/api/users?page=${page}`, {
            method: "GET",
            headers: {
                "x-api-key": "reqres-free-v1",
            },
        });

       return res.json();
    } catch (error) {
        // throw error;
        console.log("Gagal mengambil data : ", error);
        
    }
}
