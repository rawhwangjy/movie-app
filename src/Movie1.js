import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import logo from './logo.svg';
//import './App.css';
import './App.scss';

class Movie extends Component {
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
}
class MoviePoster extends Component {
  static PrpropTypes = {
    poster: PropTypes.string.isRequired
  }
  render() {
    return (
      <img src={this.props.poster} alt="Movie Poster" />
    );
  }
}
export default Movie;
