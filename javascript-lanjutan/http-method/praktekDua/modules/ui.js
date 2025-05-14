export function TestingUI() {
  console.log("Testing dari UI");
}

export function renderUsers(users) {
  const list = document.getElementById('user-list');
  list.innerHTML = "";

  users.forEach(user => {
    const li = document.createElement("li");
    li.textContent = `${user.first_name} ${user.last_name}`;
    list.appendChild(li);
  });
}