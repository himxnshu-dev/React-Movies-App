import "dotenv/config";

export const getMovies = async () => {
  const response = await fetch(
    `${process.env.REACT_APP_BASE_URL}/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`
  );
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (movieName) => {
  const response = await fetch(
    `${process.env.REACT_APP_BASE_URL}/search/movie?api_key=${
      process.env.REACT_APP_API_KEY
    }&query=${encodeURIComponent(movieName)}`
  );

  const data = await response.json()
  return data.results;
};
