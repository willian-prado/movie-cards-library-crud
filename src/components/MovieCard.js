import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, storyline, imagePath, id } = movie;

    return (
      <div
        className="movie-card"
        data-testid="movie-card"
      >
        <div
          className="image-card"
          style={ { backgroundImage: `url(${imagePath})` } }
        >
          <h2>
            { title }
          </h2>
        </div>

        <div className="storyline-card">
          <p>
            { storyline }
          </p>
          <Link className="details-link" to={ `/movies/${id}` }>
            VER DETALHES
          </Link>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
