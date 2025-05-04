$('.search-button').on("click", function() {
    
    $.ajax({
        url: 'http://www.omdbapi.com/?apikey=3f35f6d6&s=' + $(".input-keyword").val(),
        success: results => {
            const movies = results.Search;
    
            let cards = "";
    
            movies.forEach(movie => {
                cards += createCard(movie);
            });
            
            $(".movies-container").html(cards)
            
    
            // ketika modal diklik
            $(".modal-detail-button").on('click', function() {
                $.ajax({
                    url: 'http://www.omdbapi.com/?apikey=3f35f6d6&i=' + $(this).data('imdbid'),
                    
                    success: movie => { 
                        const movieDetail = createModal(movie)
    
                        $(".modal-body").html(movieDetail)
                    },
    
                    error: (e) => {
                        console.log(e.responseText);
                        
                    }
                })
            })
        },
        error: (e) => {
            console.log(e.responseText);
            
        }
    })

})




function createCard(movie) {
    return  `<div class="col-md-3 my-5">
                <div class="card">
                    <img src="${movie.Poster}" class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title">${movie.Title}</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">${movie.Year}</h6>
                        <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieDetails" data-imdbid="${movie.imdbID}">Show Details</a>
                    </div>
                </div>
            </div>`;
}

function createModal(movie) {
    return `<div class="container-fluid">
                        <div class="row">
                            <div class="col-md-3">
                                <img src="${movie.Poster}" alt="" class="img-fluid">
                            </div>
                            <div class="col-md">
                                <ul class="list-group">
                                    <li class="list-group-item">
                                        <h4>${movie.Title} (${movie.Year})</h4>
                                    </li>
                                    <li class="list-group-item"><b>Director: </b> ${movie.Director}</li>
                                    <li class="list-group-item"><b>Actors  : </b> ${movie.Actor}</li>
                                    <li class="list-group-item"><b>Writer  : </b> ${movie.Writer}</li>
                                    <li class="list-group-item"><b>Plot    : </b> ${movie.Plot}</li>
                                </ul>
                            </div>
                        </div>
                    </div>`;
}
