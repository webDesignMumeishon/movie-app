// La api que usamos es http://www.omdbapi.com/
// Para obtener alguna película a partir de su ID pueden usar el endpoint:
// http://www.omdbapi.com/?apikey=20dac387&i={idMovie}

// otra para eliminarla de favoritas removeMovieFavorite.
export function removeMovieFavorite(payload) {
    return { type: "REMOVE_MOVIE_FAVORITE", payload };
}

// otra para traer los detalles de la pelicula especifica getMovieDetail, 
export function getMovieDetail(idMovie) {
    return function(dispatch) {
        return fetch("http://www.omdbapi.com/?apikey=20dac387&i=" + idMovie)
        .then(response => response.json())
        .then(json => {
            dispatch({ type: "GET_MOVIE_DETAIL", payload: json });
        });
    };
}

// a otra para agregarlas como Favoritas addMovieFavorite
export function addMovieFavorite(payload) {
    return { type: "ADD_MOVIE_FAVORITE", payload };
}

// Una para hacer la request a la API y traer todas las peliculas getMovies,
export function getMovies(titulo) {
    return function(dispatch) {
        return fetch("http://www.omdbapi.com/?apikey=20dac387&s=" + titulo)
        .then(response => response.json())
        .then(json => {
            // console.log("json response", json)
            dispatch({ type: "GET_MOVIES", payload: json });
        });
    };
}
