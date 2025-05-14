// pagination.js
export function updateStatusBtn(currentPage, totalPages, prevBtn, nextBtn) {
  prevBtn.disabled = currentPage <= 1;
  nextBtn.disabled = currentPage >= totalPages;
}

export function infoPage(currentPage, totalPages, infoCurrent) {
  infoCurrent.textContent = `${currentPage} of ${totalPages}`;
}
