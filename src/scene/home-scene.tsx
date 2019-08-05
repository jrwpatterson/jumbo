import React, { useEffect, useState } from "react";
import { CardGrid } from "../components/card-grid/card-grid";
import { useGetMovies } from "../hooks/use-get-movies";
import { SearchBox } from "../components";
import "./home-scene.css";

export const HomeScene = () => {
  const [search, setSearch] = useState();
  const { getMovies, results, loading } = useGetMovies();
  useEffect(() => getMovies(), []);

  return (
    <div>
      <header className="App-header">
        <img
          src={
            "https://www.themoviedb.org/assets/2/v4/logos/312x276-primary-green-74212f6247252a023be0f02a5a45794925c3689117da9d20ffe47742a665c518.png"
          }
          className="App-logo"
          alt="logo"
        />
      </header>
      <SearchBox
        onChange={(searchString: string) => {
          getMovies(searchString);
          setSearch(searchString);
        }}
      />
      <div className="search-title">
        {search && search.length > 0 ? "Search Results" : "Popular Movies"}
      </div>
      <CardGrid response={results} />
    </div>
  );
};
