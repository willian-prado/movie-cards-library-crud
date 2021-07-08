import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';
import '../App.css';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      showLoading: true,
    };

    this.fetchMovies = this.fetchMovies.bind(this);
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    const movies = await movieAPI.getMovies();
    this.setState({
      movies,
      showLoading: false,
    });
  }

  render() {
    const { movies, showLoading } = this.state;

    if (showLoading) {
      return (
        <Loading />
      );
    }

    return (
      <div>
        <div className="buttons-container">
          <Link className="add-card-link" to="/movies/new">ADICIONAR CARTÃO</Link>
        </div>
        <div className="movie-list" data-testid="movie-list">
          {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        </div>
      </div>
    );
  }
}

export default MovieList;
