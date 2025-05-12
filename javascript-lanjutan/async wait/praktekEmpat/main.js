// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((res) => {
//         if (!res.ok) throw new Error("Gagal memuat");
//         return res.json();
//     })
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));

async function getData() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");

        if (!res.ok) throw new Error("Error : gagal fetch");

        const data = await res.json();
        console.log(data);
        
    } catch (error) {
        
    }
}

getData();
