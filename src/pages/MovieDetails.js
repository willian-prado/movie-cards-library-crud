import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      showLoading: true,
      movie: {},
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    const { match: { params: { id } } } = this.props;
    const movie = await movieAPI.getMovie(id);
    this.setState({
      movie,
      showLoading: false,
    });
  }

  render() {
    const { movie, showLoading } = this.state;

    if (showLoading) {
      return (
        <Loading />
      );
    }
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

    return (
      <div className="details-card" data-testid="movie-details">
        <h1>
          { title }
        </h1>
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
        <div className="buttons-container">
          <Link className="edit-btn" to={ `/movies/${id}/edit` }>EDITAR</Link>
          <Link className="return-btn" to="/">VOLTAR</Link>
        </div>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default MovieDetails;
