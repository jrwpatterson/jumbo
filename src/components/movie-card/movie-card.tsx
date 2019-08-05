import React from "react";
import "./movie-card.css";

export const MovieCard = (props: { movie: TMDB.Movie }) => (
  <div
    className="movie-card"
    style={{
      backgroundImage: `url(https://image.tmdb.org/t/p/w185_and_h278_bestv2${props
        .movie.poster_path || props.movie.backdrop_path})`
    }}
  >
    {props.movie.vote_count > 0 ? (
      <MovieCardRating rating={props.movie.vote_average} />
    ) : null}
  </div>
);

const isMoviePopular = (rating: number) => {
  if (rating >= 8) {
    return "good";
  }
  if (rating >= 6) {
    return "ok";
  }
  return "bad";
};

export const MovieCardRating = (props: { rating: number }) => {
  return (
    <div className={`movie-card-rating ${isMoviePopular(props.rating)}`}>
      {(props.rating * 10).toFixed(0)}%
    </div>
  );
};
