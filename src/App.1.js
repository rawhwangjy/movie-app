import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import Movie from './Movie';
import './App.scss';

class App extends Component {

  state = {

  }


  // 데이터가 항상 즉시 존재하진 않음
  // 데이터 없이 컴포넌트가 로딩을 하고
  // 데이터를 위해 API를 불러서
  // API가 데이터를  주면
  // 너의 컴포넌트 state를 업데이트 한다.
  // API콜을 타임아웃 기능으로 유사하게 구현할 수 있다.
  componentDidMount(){
    setTimeout(() => {
      this.setState({
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
          },
          {
            title: "Forrest Gump",
            poster: "https://images-na.ssl-images-amazon.com/images/I/41dkwOlFjYL.jpg"
          }
        ]
      })
    }, 3000);
  }

/*
  state는 디폴트 state와 함께 컴포넌트를 로드하는 방법
  컴포넌트가 did mount한 후에는
  5초후 hello->hello again으로 변경
  결론
  state를 변경할 땐 setState를 사용하고,
  업데이트할 때마다 render가 작동한다.
 */

 _renderMovies = () => {
   // 맵기능은 영화 리스트를 가져와서 출력하는것.
  const movies = this.state.movies.map( (movie, index) => {
    return <Movie title={movie.title} poster={movie.poster} key={index} />
  })
  // movies를 출력할 때 정렬된 항목(array)를 보여준다.
  //const movies = [<Movie props />, <Movie props />]
  return movies
 }

  render() {
    // 영화리스트를 불러오는 function을 만든다.
    // 데이터가 없을 때 '로딩'을 띄우고, 있으면 영화정보가 보이도록
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
