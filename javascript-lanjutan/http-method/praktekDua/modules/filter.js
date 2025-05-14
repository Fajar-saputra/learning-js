// filter.js

/**
 * Melakukan penyaringan data user berdasarkan keyword pencarian.
 * @param {Array} users - Data user dari API per halaman
 * @param {string} keyword - Kata kunci untuk menyaring
 * @returns {Array} - Daftar user yang cocok
 */
export function filterUsers(users, keyword) {
  return users.filter(user =>
    user.first_name.toLowerCase().includes(keyword) ||
    user.last_name.toLowerCase().includes(keyword)
  );
}
