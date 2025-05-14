export function updateStatusBtn(currentPage, totalPages, prevBtn, nextBtn) {
  prevBtn.disabled = currentPage <= 1;
  nextBtn.disabled = currentPage >= totalPages;
}

export function infoPage(currentPage, totalPages, infoElement) {
  infoElement.textContent = `${currentPage} of ${totalPages}`;
}
