import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import Movie from './Movie';
import './App.scss';

class App extends Component {
  state = {}
  componentDidMount(){
    fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
  }

 _renderMovies = () => {
  const movies = this.state.movies.map( (movie, index) => {
    return <Movie title={movie.title} poster={movie.poster} key={index} />
  })
  return movies
 }

  render() {
    return (
      <div className="App">
        <ul className="movie_list">
          {this.state.movies ? this._renderMovies() : 'Loading'}
        </ul>
      </div>
    );
  }
}

export default App;
