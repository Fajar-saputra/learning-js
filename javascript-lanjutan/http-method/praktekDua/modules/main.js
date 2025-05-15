import { fetchUsers } from "./api.js";
import { renderUsers } from "./ui.js";
import { updateStatusBtn, infoPage } from "./pagination.js";
import { filterUsers } from "./filter.js";

const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const infoCurrent = document.getElementById("page-info");
const filterInput = document.getElementById("search-input");

let currentPage = 1;
let totalPages = 1;
let currentUsers = [];

async function getUsers() {
  try {
    const user = await fetchUsers(currentPage);
    totalPages = user.total_pages;
    currentUsers = user.data;  // Update currentUsers dengan data terbaru
    renderUsers(currentUsers);  // Render dengan data terbaru
    infoPage(currentPage, totalPages, infoCurrent);
    updateStatusBtn(currentPage, totalPages, prevBtn, nextBtn);
  } catch (error) {
    console.log("error");
  }
}



filterInput.addEventListener("input", () => {
  const keyword = filterInput.value.toLowerCase();
  const filtered = filterUsers(currentUsers, keyword); // ✅ Modular filter
  renderUsers(filtered);
});

nextBtn.addEventListener("click", () => {
  if (currentPage < totalPages) {
    currentPage++;
    getUsers();
  }
});

prevBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    getUsers();
  }
});


getUsers();
