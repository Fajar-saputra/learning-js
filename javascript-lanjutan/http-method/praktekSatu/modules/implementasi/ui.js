// ui.js
export function renderUsers(users) {
  const list = document.querySelector('#user-list');
  list.innerHTML = '';  // Clear the list

  users.forEach(user => {
    const li = document.createElement('li');
    li.textContent = `👤 ${user.first_name} ${user.last_name} - ${user.email}`;
    list.appendChild(li);
  });
}

export function Testing() {
    console.log("Testing dari ui.js");
}