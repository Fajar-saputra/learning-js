function save(data) {
    return localStorage.setItem("data", JSON.stringify(data)) || [];
}

function get() {
    return JSON.parse(localStorage.getItem("data"));
}

let data = [1, 2, 3, 4, 5];

save(data);

// let data = get(data);

data.push(7)
data.push(8)
data.push(9)
data.push(10)

save(data)

// let dataAkhir = get(data);
console.log(data);
