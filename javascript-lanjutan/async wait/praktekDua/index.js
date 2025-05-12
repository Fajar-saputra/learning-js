const list = document.querySelector(".list");

async function getPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) throw new Error("Gagal memuat");

    const datas = await response.json();
    const data = datas.slice(0, 10)
    render(data);
  } catch (error) {
    throw (error)
  }
}

function render(datas) {
  datas.forEach(data => {
    const item = document.createElement('li');
    item.textContent = data;
    list.appendChild(item)
  });
}

getPosts()