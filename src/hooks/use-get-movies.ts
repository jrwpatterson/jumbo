import { useState } from "react";

const baseUrl = "https://api.themoviedb.org/3/";
const discover = "discover/movie?sort_by=popularity.desc";
const search = "search/multi?language=en-US&query=";
const apiKey = "&api_key=6ed12e064b90ae1290fa326ce9e790ff";

export const useGetMovies = () => {
  const [results, setResults] = useState<TMDB.Results>();
  const [loading, setLoading] = useState<boolean>(false);

  const getMovies = (searchString?: string) => {
    setLoading(true);
    let queryString = baseUrl;
    if (searchString && searchString.length > 0) {
      queryString = `${queryString}${search}${searchString}${apiKey}`;
    } else {
      queryString = `${queryString}${discover}${apiKey}`;
    }
    fetch(queryString)
      .then(response => response.json())
      .then(json => {
        setLoading(false);
        setResults((json as unknown) as TMDB.Results);
      });
  };
  return {
    results,
    loading,
    getMovies
  };
};
