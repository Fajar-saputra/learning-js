import { fetchUsers } from './api.js';
import { renderUsers } from './ui.js';

let currentPage = 1;
let totalPages = 1; // akan diupdate dari API

const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const pageInfo = document.getElementById('page-info');

async function ambilDataUser() {
  try {
    const data = await fetchUsers(currentPage); // data = { page, total_pages, data: [] }
    totalPages = data.total_pages;

    renderUsers(data.data); // render array user
    updatePageInfo();
    updateButtonState();
  } catch (err) {
    console.error('❌ Gagal ambil data:', err);
  }
}

function updatePageInfo() {
  pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
}

function updateButtonState() {
  prevBtn.disabled = currentPage <= 1;
  nextBtn.disabled = currentPage >= totalPages;
}

nextBtn.addEventListener('click', () => {
  if (currentPage < totalPages) {
    currentPage++;
    ambilDataUser();
  }
});

prevBtn.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    ambilDataUser();
  }
});

ambilDataUser(); // jalankan saat pertama kali
