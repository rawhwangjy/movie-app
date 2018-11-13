import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import Movie from './Movie';
import './App.scss';

class App extends Component {
  state = {}
  componentDidMount(){
    this._getMovies();
  }

  _renderMovies = () => {
  const movies = this.state.movies.map( (movie, index) => {
    return <Movie 
        title={movie.title_english}
        poster={movie.medium_cover_image}
        key={movie.id}
        genres={movie.genres}
        synopsis={movie.synopsis}
      />
  })
  return movies
  }

  _getMovies = async () => {
    const movies = await this._callApi()
    this.setState({
      movies
    })
  }

  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
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
