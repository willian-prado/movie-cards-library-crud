import React, { Component } from 'react';
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

    this.fetchMovie = this.fetchMovie.bind(this);
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
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
      <div className="movie-list" data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
