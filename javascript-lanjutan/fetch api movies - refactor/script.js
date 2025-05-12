const searchBtn = document.querySelector(".search-button");
searchBtn.addEventListener("click", async function () {
    const inputKeyword = document.querySelector(".input-keyword");
    const movies = await getMovies(inputKeyword.value);
    updateUI(movies);
});

function getMovies(keyword) {
    return fetch("http://www.omdbapi.com/?apikey=3f35f6d6&s=" + keyword)
        .then((res) => res.json())
        .then((res) => res.Search)
        .catch((err) => console.log(err));
}

function updateUI(movies) {
    let cards = [];     
    movies.map((movie) => (cards += createCard(movie)));
    document.querySelector(".movies-container").innerHTML = cards;
}

document.addEventListener("click", async function (e) {
    const button = e.target.classList.contains("modal-detail-button");
    if (button) {
        const imdbid = e.target.dataset.imdbid;
        const detailModal = await getDetailMovie(imdbid);
        updateUIModal(detailModal)
    }
});

function getDetailMovie(imdbID) {
    return fetch("http://www.omdbapi.com/?apikey=3f35f6d6&i=" + imdbID)
        .then((res) => res.json())
        .then((m) => m);
}

function updateUIModal(m) {
    const detailModal = createModal(m);
    document.querySelector(".modal-body").innerHTML = detailModal;
}

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
