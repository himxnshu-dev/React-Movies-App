export const getMovies = async () => {
  const response = await fetch(
    `${import.meta.env.VITE_BASE_URL}/movie/popular?api_key=${import.meta.env.VITE_API_KEY}`
  );
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (movieName) => {
  const response = await fetch(
    `${import.meta.env.VITE_BASE_URL}/search/movie?api_key=${
      import.meta.env.VITE_API_KEY
    }&query=${encodeURIComponent(movieName)}`
  );

  const data = await response.json()
  return data.results;
};
