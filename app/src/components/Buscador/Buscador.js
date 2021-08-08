import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Buscador.css';
import {addMovieFavorite, getMovies} from '../../actions/index.js'



export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }

  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  
  handleSubmit(event) {
    event.preventDefault();
    //agragar la accion getMovies pasandole el valor que guardamos en nuestro estado con el valor title en 
    //nuestra funcion handleSubmit para tener una referencia del valor ingresado en el input
    this.props.getMovies(this.state.title)
  }


  render() {
    console.log(this.props.movies)
    const { title } = this.state;
    return (
      <div>
        <h2 className="title-buscador">Movie App</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">Película: </label>
            <input
              className="inputMovie"
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          <button className="btn"  type="submit">BUSCAR</button>
          </div>
        </form>
        <ul className="ul-movies-container">
         {this.props.movies ? this.props.movies.map(movie => 
          <>
            {this.props.favMovies.filter((fav) => fav.id === movie.imdbID).length 
              ? "" 
              : <li className="movie-item">
                  <img src={movie.Poster} alt="Poster" />
                  <Link to={`/movie/${movie.imdbID}`}>
                    <span>{movie.Title}</span>
                  </Link>
                  <button className="btn" onClick={() => this.props.addMovieFavorite({title: movie.Title, id: movie.imdbID}) }>Fav</button>
                </li>
            }
              
          </>) : ""
          }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded,
    favMovies: state.moviesFavourites
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
    getMovies: title => dispatch(getMovies(title))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buscador);
