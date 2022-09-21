import useDataFetch from "./useDataFetch";
import MovieOfTheDay from "./MovieOfTheDay";
import MovieCards from "./MovieCards";
import "./Main.css";

function Main() {
  const movies = useDataFetch();

  const checkForMovies = () => {
    return !movies || movies.length === 0 ? false : true;
  };

  return (
    <div className="main-container">
      {!checkForMovies() && (
        <div className="no-data-message"><h2>There are no Movies yet!</h2></div>
      )}
      {checkForMovies() && <MovieOfTheDay movies={movies} />}
      {checkForMovies() && <MovieCards movies={movies} />}
    </div>
  );
}

export default Main;
