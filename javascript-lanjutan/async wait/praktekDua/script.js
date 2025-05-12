const list = document.querySelector(".list");

async function getPosts() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) throw new Error("gagal memuat");

        const data = await response.json();
        return data.slice(0, 10);
    } catch (error) {
        throw error;
    }
}


function createItem(datas) {
  datas.forEach((data) => {
    const li = document.createElement("li");
    li.textContent = data.title;
    list.appendChild(li);
  });
}

async function render() {
  try {
    const data = await getPosts();
    createItem(data);
  } catch (error) {
    console.log("Terjadi error saat render:", error.message);
  }
}

render();
