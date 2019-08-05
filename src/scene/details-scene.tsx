import React, { useEffect } from "react";
import { useGetMovie } from "../hooks/use-get-movie";
import { RouteComponentProps } from "react-router-dom";
import "./details-scene.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import { DateTime } from "luxon";

const baseImage = "https://image.tmdb.org/t/p/original";
type TParams = { id: string; type: "tv" | "movie" };

export const DetailsScene = (props: RouteComponentProps) => {
  const { results, getInfo } = useGetMovie();

  const params = props.match.params as TParams;
  useEffect(() => getInfo(params.id, params.type), []);

  if (results == null) {
    return null;
  }

  console.log(results);

  const dateToUse = results.release_date || results.first_air_date;

  const date = DateTime.fromISO(dateToUse).toFormat("yyyy");

  return (
    <div className="container details-outer-container">
      <div className="container upper-container">
        <a className="go-back" onClick={() => window.history.back()}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </a>
        <img
          className="container"
          src={`${baseImage}${results.backdrop_path}`}
        />
        <div className="container poster-container">
          <img
            width={125}
            className="poster"
            src={`${baseImage}${results.poster_path}`}
          />
          <div className="movie-title-area">
            <div className="movie-title-area-title">{results.title}</div>
            <div className="date-line-holder">
              <div className="movie-title-area-body">{date}</div>
              <div className="date-line-seperator">{"\u00b7"}</div>
              <div className="movie-title-area-body">
                {(results.vote_average * 10).toFixed(0)}% User Score
              </div>
            </div>
            {results.runtime ? (
              <div className="movie-title-area-body">
                {timeConvert(results.runtime)}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <hr />
      <div className="container">
        <div className="movie-title-title">{results.title}</div>
        <div className="movie-title-body">{results.overview}</div>
      </div>
    </div>
  );
};

const timeConvert = (mins: number) => {
  var num = mins;
  var hours = num / 60;
  var rhours = Math.floor(hours);
  var minutes = (hours - rhours) * 60;
  var rminutes = Math.round(minutes);
  return rhours + "h " + rminutes + " min";
};
