import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import Movie from './Movie';
import './App.scss';

// Render // componentWillMount() → render()  → componentDidMount()
// Update // componentWillReceiveProps() → shouldComponentUpdate()  → componentWillUpdate()  → render()  → componentDidUpdate()

class App extends Component {
  state = {
    movies: [
      {
        title: "Harry Poter",
        poster: "https://images-na.ssl-images-amazon.com/images/I/71oFC5Z1vUL._SY679_.jpg"
      },
      {
        title: "Oldboy",
        poster: "https://images-na.ssl-images-amazon.com/images/I/51NJwqCywVL._SY450_.jpg"
      },
      {
        title: "Okja",
        poster: "https://image.tmdb.org/t/p/original/iNH6pNce3EvVkEoWp7rSzDAvHdB.jpg"
      }
    ]
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        movies: [
          // ...this.state.movies,
          {
            title: "Forrest Gump",
            poster: "https://images-na.ssl-images-amazon.com/images/I/41dkwOlFjYL.jpg"
          }
        ]
      })
    }, 3000);
  }

  render() {
    return (
      <div className="App">
        <ul className="movie_list">
          {/* {this.state.movies.map( (movie, index) => { */}
          {movies.map( (movie, index) => {
              return <Movie title={movie.title} poster={movie.poster} key={index} />
              }
            )
          }
        </ul>
      </div>
    );
  }
}

export default App;
