import React, { useEffect } from "react";
import { useGetMovie } from "../hooks/use-get-movie";
import { RouteComponentProps } from "react-router-dom";
import "./details-scene.css";

const baseImage = "https://image.tmdb.org/t/p/original";
type TParams = { id: string; type: "tv" | "movie" };

export const DetailsScene = (props: RouteComponentProps) => {
  const { results, getInfo } = useGetMovie();

  const params = props.match.params as TParams;
  useEffect(() => getInfo(params.id, params.type), []);

  if (results == null) {
    return null;
  }

  console.log(props.match.params);
  console.log("test");

  return (
    <div className="outer-container">
      <div className="container upper-container">
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
          <div className="movie-title">{results.title}</div>
        </div>
      </div>
      <div>
        <div>{results.title}</div>
        <div>{results.overview}</div>
      </div>
    </div>
  );
};
