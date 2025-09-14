function MovieCard({movies}) {
  function onFavoriteLike() {
    alert('CLICKED!')
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movies.url} alt={movies.title} />
        <div>
          <button className="favorite-btn" onClick={onFavoriteLike}>
            ♥︎
          </button>
        </div>
      </div>
      <div className="movie-details">
        <h3> {movies.title} </h3>
        <p> {movies.release_year} </p>
      </div>
    </div>
  );
}

export default MovieCard;