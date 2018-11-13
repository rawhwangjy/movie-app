import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import Movie from './Movie';
import './App.scss';

class App extends Component {
  state = {}
  componentDidMount(){
    fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => console.log(err))

    // fetch 완료하면 then()을 실행해
    // 그런데 fetch(윗라인)에 에러가 나면 catch로 잡아서 알려줘
    // then 함수는 1개의 attribute만 준다. => 오브젝트. fetch의 결과물. response
    // response를 통해서 성공적이었고, 바디 확인하고, 아직 사용하지 않았다는 것까지 알 수 있다.
    
    // response.json()
    // 첫번째 response object 를 우리가 확인할 수 있는 제이슨으로 바꾸자

    // fetch가 좋은 이유는 url을 에이작스로 아주 심플하게 불러올 수 있다.
    // xml http request
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
