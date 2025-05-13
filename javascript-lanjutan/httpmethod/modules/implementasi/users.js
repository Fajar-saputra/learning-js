// user.js
export function filterUsers(users, searchTerm) {
    return users.filter((user) => user.first_name.toLowerCase().includes(searchTerm.toLowerCase()));
}

export function paginateUsers(page, data) {
    // Logic untuk handling pagination (optional, jika dibutuhkan)
    return data;
}

export function Testing() {
    console.log("Testing dari users.js");
}
