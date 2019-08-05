import React, { useEffect, useState } from "react";
import { CardGrid } from "../components/card-grid/card-grid";
import { useGetMovies } from "../hooks/use-get-movies";
import { SearchBox } from "../components";
import "./home-scene.css";

const lines = [
  {
    left: -100,
    height: 150,
    top: 0
  },
  {
    left: -50,
    height: 100,
    top: -100
  },
  {
    left: -70,
    height: 100,
    top: -120
  },
  {
    left: 180,
    height: 145,
    top: 5
  },
  {
    left: 150,
    height: 100,
    top: -80
  },
  {
    left: 150,
    height: 100,
    top: -110
  }
];

export const HomeScene = () => {
  const [search, setSearch] = useState();
  const { getMovies, results, loading } = useGetMovies();
  useEffect(() => getMovies(), []);

  return (
    <div>
      <header className="App-header">
        <div className="line-box">
          {lines.map(line => (
            <div
              className="slant-line"
              style={{
                left: `${line.left}px`,
                top: `${line.top}px`,
                height: `${line.height}px`
              }}
            />
          ))}
          <img
            src={
              "https://www.themoviedb.org/assets/2/v4/logos/312x276-primary-green-74212f6247252a023be0f02a5a45794925c3689117da9d20ffe47742a665c518.png"
            }
            className="App-logo"
            alt="logo"
          />
        </div>
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
