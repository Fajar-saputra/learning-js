async function getDatas() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos");
        if (!res.ok) throw new Error("gagal memuaat");

        const datas = await res.json();
        console.log(datas);
        
    } catch (err ) {
        console.log("error : ", err);
    }
}