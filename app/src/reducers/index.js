const initialState = {
    moviesFavourites: [],
    moviesLoaded: [],
    movieDetail: {}
};


// Tienes que crear los 4 reducers para las 4 acciones que creamos anteriormente que son:
// getMovies, getMovieDetail, removeMovieFavorite,addMovieFavorite
function rootReducer(state = initialState, action) {
    if (action.type === "ADD_MOVIE_FAVORITE") {
        return {
            ...state,
            moviesFavourites: state.moviesFavourites.concat(action.payload)
        }
    }

    if (action.type === "GET_MOVIES") {
        return {
            ...state,
            moviesLoaded: action.payload.Search
        };
    }

    if (action.type === "REMOVE_MOVIE_FAVORITE") {
        return {
            ...state,
            moviesFavourites: state.moviesFavourites.filter((movie) => movie.id !== action.payload)
        };
    }

    if (action.type === "GET_MOVIE_DETAIL") {
        // console.log("inside GET MOVIE DETAIL", state.moviesLoaded)
        return {
            ...state,
            movieDetail: action.payload
        };
    }


    return state;
}
  

export default rootReducer;