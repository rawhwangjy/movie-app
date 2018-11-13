import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import Movie from './Movie';
import './App.scss';

class App extends Component {
  state = {}
  componentDidMount(){
    this._getMovies();
    // 큰 didMount 갖고싶지 않아서 따로 함수로 분리
  }

  _renderMovies = () => {
  const movies = this.state.movies.map( (movie, index) => {
     console.log(movie)
    return <Movie title={movie.title} poster={movie.large_cover_image} key={index} />
  })
  return movies
  }

  // _getMovies 함수는 asynchonous function
  _getMovies = async () => {
    // async 할거야
    const movies = await this._callApi() // json.data.movies
    this.setState({
      movies
    })
    // await 는 call api기능이 끝나는 것을 기다리고
    // 성공적 수행이 아니라 끝나는 것을 기다리고
    // call api의 return 값이 무엇이든 movies변수에 저장
    // 저장된 movies변수를 컴포넌트의 set state한다.
    // setState는 _callApi()가 작업 완료될때까지 실행되지 않는다.
  }
  _callApi = () => {
    // fetch라는 이름의 promise return
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }
// didMount 하고 나면, get movies를 할ㄴ다.
// 그리고 이건 asynchronous function인데 movies라는 variable 가지고 있다.
// 그리고 이건 value를 가지고 있다. callApi라는 function을 await모드에서

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
