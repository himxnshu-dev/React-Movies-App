import '../css/MovieCard.css'

function MovieCard({movies}) {
  function onFavoriteLike() {
    alert('CLICKED!')
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`} alt={movies.title} />
        <div className='movie-btn'>
          <button className="favorite-btn" onClick={onFavoriteLike}>
            ♥︎
          </button>
        </div>
      </div>
      
      <div className="movie-details">
        <h3> {movies.title} </h3>
        <p> {movies.release_date?.split('-')[0]} </p>
      </div>
    </div>
  );
}

export default MovieCard;