import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import Movie from './Movie';
import './App.scss';

// Render // componentWillMount() → render()  → componentDidMount()
// Update // componentWillReceiveProps() → shouldComponentUpdate()  → componentWillUpdate()  → render()  → componentDidUpdate()

const movies = [
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
class App extends Component {
  // state = {
  //   greeting: 'Hello'
  // }

  componentDidMount(){
    // this.state.greeting = 'Hello World'
    // setTimeout(() => {
    //   this.setState({
    //     greeting: 'Hello Again'
    //   })
    // }, 3000);
  }

  render() {
    return (
      <div className="App">
        {/* {this.state.greeting} */}
        <ul className="movie_list">
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
