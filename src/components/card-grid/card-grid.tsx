import React from "react";
import "./card-grid.css";
import { MovieCard } from "../movie-card/movie-card";
import { DateTime } from "luxon";
import { Link } from "react-router-dom";

export const CardGrid = (props: {
  loading?: boolean;
  response?: TMDB.Results;
}) => {
  if (!props.response || !props.response.results) {
    return null;
  }

  return (
    <div className="movie-container">
      {props.response.results.map(movie => {
        const date = movie.release_date || movie.first_air_date;
        let stringDate = "";

        if (date) {
          stringDate = DateTime.fromISO(date).toFormat("LLLL yyyy");
        }
        return (
          <Link
            key={movie.id}
            to={`/details/${movie.media_type || "movie"}/${movie.id}`}
          >
            <div className="movie-container-child">
              <MovieCard movie={movie} />
              <div className="movie-title">
                {movie.title ||
                  movie.original_title ||
                  movie.name ||
                  movie.original_name}
              </div>
              <div className="movie-date">{stringDate}</div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
