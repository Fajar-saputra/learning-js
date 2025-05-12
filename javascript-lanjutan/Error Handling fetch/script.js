const searchBtn = document.querySelector(".search-button");
const inputKeyword = document.querySelector(".input-keyword");
const moviesContainer = document.querySelector(".movies-container");
const modalBody = document.querySelector(".modal-body");

// Handle tombol search
searchBtn.addEventListener("click", async function () {
  try {
    const movies = await getMovies(inputKeyword.value);
    updateUI(movies);
  } catch (error) {
    moviesContainer.innerHTML = `<p class="text-danger fw-semibold">❌ ${error.message}</p>`;
  }
});

// Fetch movie list
async function getMovies(keyword) {
  const response = await fetch(`http://www.omdbapi.com/?apikey=3f35f6d6&s=${keyword}`);
  if (!response.ok) throw new Error("Gagal mengambil data dari server.");

  const data = await response.json();
  if (data.Response === "False") throw new Error(data.Error);

  return data.Search;
}

// Render UI list movie
function updateUI(movies) {
  const cards = movies.map((movie) => createCard(movie)).join("");
  moviesContainer.innerHTML = cards;
}

// Event delegation untuk detail modal
document.addEventListener("click", async function (e) {
  if (e.target.classList.contains("modal-detail-button")) {
    try {
      const imdbid = e.target.dataset.imdbid;
      const movieDetail = await getDetailMovie(imdbid);
      updateUIModal(movieDetail);
    } catch (err) {
      modalBody.innerHTML = `<p class="text-danger fw-semibold">❌ Gagal mengambil detail film: ${err.message}</p>`;
    }
  }
});

// Fetch movie detail
async function getDetailMovie(imdbID) {
  const response = await fetch(`http://www.omdbapi.com/?apikey=3f35f6d6&i=${imdbID}`);
  if (!response.ok) throw new Error("Gagal mengambil detail dari server.");

  const data = await response.json();
  if (data.Response === "False") throw new Error(data.Error);

  return data;
}

// Render UI detail movie ke modal
function updateUIModal(movie) {
  modalBody.innerHTML = createModal(movie);
}

// Card template
function createCard(movie) {
  return `
    <div class="col-md-3 col-sm-6 my-3 d-flex align-items-stretch">
      <div class="card shadow-sm h-100 border-0 hover-shadow">
        <img src="${movie.Poster}" class="card-img-top object-fit-cover" alt="${movie.Title}" style="height: 400px;">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title fw-bold">${movie.Title}</h5>
          <p class="card-subtitle text-muted mb-3">${movie.Year}</p>
          <a href="#" class="btn btn-outline-primary mt-auto modal-detail-button"
            data-bs-toggle="modal" data-bs-target="#movieDetails"
            data-imdbid="${movie.imdbID}">
            <i class="bi bi-info-circle-fill me-1"></i> Show Details
          </a>
        </div>
      </div>
    </div>`;
}

// Modal template
function createModal(movie) {
  return `
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-4">
          <img src="${movie.Poster}" alt="${movie.Title}" class="img-fluid rounded shadow-sm">
        </div>
        <div class="col-md-8">
          <h4 class="mb-3">${movie.Title} <span class="text-muted">(${movie.Year})</span></h4>
          <ul class="list-group list-group-flush">
            <li class="list-group-item"><strong>Director:</strong> ${movie.Director}</li>
            <li class="list-group-item"><strong>Actors:</strong> ${movie.Actors}</li>
            <li class="list-group-item"><strong>Writer:</strong> ${movie.Writer}</li>
            <li class="list-group-item"><strong>Plot:</strong><br>${movie.Plot}</li>
          </ul>
        </div>
      </div>
    </div>`;
}
