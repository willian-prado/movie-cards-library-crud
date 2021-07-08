import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showLoading: true,
      movie: {},
    };

    this.fetchMovie = this.fetchMovie.bind(this);
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.fetchMovie(id);
  }

  async fetchMovie(id) {
    try {
      const movie = await movieAPI.getMovie(id);
      this.setState({
        movie,
        showLoading: false,
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { movie, showLoading } = this.state;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

    if (showLoading) return <Loading />;

    return (
      <div className="details-card" data-testid="movie-details">
        <p>{ `Title: ${title}` }</p>
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
    }),
  }).isRequired,
};

export default MovieDetails;
