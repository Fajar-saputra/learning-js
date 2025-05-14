// handlers.js
export function handleNextClick(currentPage, totalPages) {
  if (currentPage < totalPages) {
    currentPage++;
    getUsers();
  }
}

export function handlePrevClick(currentPage) {
  if (currentPage > 1) {
    currentPage--;
      getUsers();
      console.log('diklik');
      
  }
}

// handlers.js
export function handleSearchInput(filterInput, currentUsers) {
  const keyword = filterInput.value.toLowerCase();
  const filtered = filterUsers(currentUsers, keyword);
  renderUsers(filtered); // Render data yang sudah difilter
}
