import { useState } from "react";

const baseUrl = "https://api.themoviedb.org/3";
const apiKey = "?api_key=6ed12e064b90ae1290fa326ce9e790ff";

export const useGetMovie = () => {
  const [results, setResults] = useState<TMDB.MovieDetails>();
  const [loading, setLoading] = useState<boolean>(false);

  const getInfo = (id: string, media: "movie" | "tv") => {
    setLoading(true);
    let queryString = `${baseUrl}/${media}/${id}${apiKey}`;

    fetch(queryString)
      .then(response => response.json())
      .then(json => {
        setLoading(false);
        console.log(json);
        setResults((json as unknown) as TMDB.MovieDetails);
      });
  };
  return {
    results,
    loading,
    getInfo
  };
};
