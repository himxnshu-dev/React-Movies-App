import React from "react";
import MovieCard from "../components/MovieCard";
import "../css/Home.css";
import {useState, useEffect} from "react";
import {getMovies, searchMovies} from "../services/api";

const Home = () => {
  const [searchInput, setSearchInput] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  // It is considered to be a good practice to make the above two states when we're fetching something from somewhere

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const showMovies = await getMovies();
        setMovies(showMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to load the movies!");
      } finally {
        setLoading(false);
      }
    };

    loadMovies();
  }, []);

  const onFormSubmit = async(e) => {
    e.preventDefault();

    if (!searchInput.trim()) return 
    if (loading) return

    setLoading(true)

    try {
        const searchMovie = await searchMovies(searchInput)
        setMovies(searchMovie)
        setError(null)
    } catch (err) {
        console.log(err)
        setError('Failed to load the searched movie...')
    } finally {
        setLoading(false)
    }
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

      {error && <div className="error-msg">{error}</div>}

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {movies.map(
            (movie) =>
              movie.title.toLowerCase().startsWith(searchInput) && (
                <MovieCard movies={movie} key={movie.id} />
              )
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
