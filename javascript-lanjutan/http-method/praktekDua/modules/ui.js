/**
 * Merender daftar user ke dalam elemen <ul> dengan ID 'user-list'.
 * @param {Array} users - Daftar user dari API yang akan ditampilkan.
 */
export function renderUsers(users) {
  const list = document.getElementById('user-list');
  list.innerHTML = "";

  users.forEach(user => {
    const li = document.createElement("li");
    li.textContent = `${user.first_name} ${user.last_name}`;
    list.appendChild(li);
  });
}
