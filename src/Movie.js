import React from 'react';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis'
//import logo from './logo.svg';
//import './App.css';
import './App.scss';

/*class Movie extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
  }
  render() {
    return (
      <li>
        <MoviePoster poster={this.props.poster} />
        <h1>{this.props.title}</h1>
      </li>
    );
  }
}*/
function Movie({title, poster, genres, synopsis}){
  return (
    <li>
      <MoviePoster poster={poster} alt={title} />
      <h1>{title}</h1>
      <div className="genres">
        <ul>
          {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
        </ul>
      </div>
      <p className="synopsis">
        <LinesEllipsis
          text={synopsis}
          maxLine='3'
          ellipsis='...'
          trimRight
          basedOn='letters'
        />
      </p>
    </li>
  )
}
Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  synopsis: PropTypes.string.isRequired
}
/*class MoviePoster extends Component {
  static PrpropTypes = {
    poster: PropTypes.string.isRequired
  } 
  render() {
    return (
      <img src={this.props.poster} alt="Movie Poster" />
    );
  }
}*/
function MovieGenre({genre}){
  return (
    <li className="genre">{genre}</li>
  )
}
MovieGenre.propTypes = {
  genre: PropTypes.string.isRequired
}
function MoviePoster({poster, alt}){
  return (
    <img src={poster} alt={alt} title={alt} className="poster" />
  )
}
MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}
export default Movie;
