import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';
import './Movie.css';
import { FcClapperboard } from "react-icons/fc";
import { FcShare } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import { BsListUl } from "react-icons/bs";
import { MdHighQuality } from "react-icons/md";








// En nuestro componente Movie tenemos que usar ese parametro para usarlo en nuestra getMovieDetail function. 
// Podemos acceder a este valor gracias a las props que nos da react-router de la siguientes maneras:

// manera convencional
// const movieId = this.props.match.params.id;
// this.props.getMovieDetail(movieId)



class Movie extends React.Component {

    componentDidMount() {
        const movieId = this.props.match.params.id;
        this.props.getMovieDetail(movieId)
    }

    render() {
        // console.log(this.props.movieDetail)
        return (
            <div className="container">               
                <h2 className="text">Movie Details<BsListUl className="iconTitleStyling"/></h2>     
                <div className="container2">
                    <img src={this.props.movieDetail.Poster} className="imgBackgroung" alt="" />
                    <section className="movieSection">
                        <h3>
                            {this.props.movieDetail.Title} <FcClapperboard/><MdHighQuality style={{color:"yellow"}}/>
                        </h3>
                        <div className="iconsClass">
                            <FcShare/>
                            <a href="#"><span>Compartir</span></a>
                            <AiFillFacebook className="icons"/>
                            <FiTwitter className="icons"/>
                        </div>
                        <p>
                            {this.props.movieDetail.Title}
                        </p>
                        <p>
                            {this.props.movieDetail.Plot}
                        </p>
                        <div className="additinalInfo">
                            <p>Director: {this.props.movieDetail.Director}</p>
                            <p>Genre: {this.props.movieDetail.Genre}</p>
                            <p>Actors: {this.props.movieDetail.Actors}</p>
                            <p>Awars: {this.props.movieDetail.Awars}</p>
                        </div>
                      
                    </section>
                </div>

                <footer>
                    <ul className="footerStyling">
                        <li>
                            <p>Production: {this.props.movieDetail.Production}</p>  
                        </li>
                        <li>
                            <p>Language: {this.props.movieDetail.Language}</p>
                        </li>
                    </ul>
                </footer>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        movieDetail: state.movieDetail
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
        getMovieDetail: movie => dispatch(getMovieDetail(movie)),
    };
  }



  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Movie);