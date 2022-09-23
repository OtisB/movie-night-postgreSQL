import { useEffect, useState } from "react";

function useDataFetch() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getMovies() {
    try {
      const response = await fetch("https://your-movie-night-api.onrender.com/");
      const data = await response.json();

      const moviesArray = Array.from(data);
      setMovies(moviesArray);
      console.log(moviesArray);
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
  return movies;
}
export default useDataFetch;
