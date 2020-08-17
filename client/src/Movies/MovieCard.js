import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch, useParams } from 'react-router-dom'

const MovieCard = ({title, director, metascore, stars}) => {
  const [movie, setMovie] = useState();
  const { id } = useParams();

if (!movie) return (
    <Link to={`/movie/${movie.id}`}>
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
    </Link>
  );
    }

};

export default MovieCard;

