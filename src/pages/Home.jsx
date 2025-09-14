import React from "react";
import MovieCard from "../components/MovieCard";
import '../css/Home.css'
import {useState} from "react";

const Home = () => {
  const [searchInput, setSearchInput] = useState("");

  const movies = [
    {id: 1, title: "Good Will Hunting", release_year: 1998},
    {id: 2, title: "The Departed", release_year: 2005},
    {id: 3, title: "Prisoners", release_year: 2013},
    {id: 4, title: "Children of Men", release_year: 2005},
  ];

  const onFormSubmit = (e) => {
    e.preventDefault()
    alert(searchInput);
  };

  return (
    <div className="home">
      <form onSubmit={onFormSubmit} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button type="submit" className="search-btn">
          Search
        </button>
      </form>

      <div className="movies-grid">
        {movies.map(
          (movie) =>
            movie.title.toLowerCase().startsWith(searchInput) && (
              <MovieCard movies={movie} key={movie.id} />
            )
        )}
      </div>
    </div>
  );
};

export default Home;
