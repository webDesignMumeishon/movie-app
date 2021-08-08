import React, { Component } from "react";
import { connect } from "react-redux";
// import './Favorites.css';
import {removeMovieFavorite} from '../../actions/index.js'
import styles from './Favorites.module.css'


export class ConnectedList extends Component {
  render() {
    return (
      <div >
        <h2 className={styles.titleBuscador}>Películas Favoritas</h2>
        <ul className={styles.container}>
          {this.props.movies.moviesFavourites.map(movie => 
          <li className={styles.movieItem}>

            <span>{movie.title} </span>
            <button className={styles.btn} onClick={() => this.props.removeMovieFavorite(movie.id)}>X</button> 
              
          </li>)}
        </ul>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    movies: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeMovieFavorite: movie => dispatch(removeMovieFavorite(movie)),
  };
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedList);

