import "./GenreCards.css";
import MovieCardSmall from "./MovieCardSmall";
import Error from "./Error";
import useDataFetch from "./useDataFetch";
import { useParams } from "react-router-dom";

export default function GenreCards() {
  const { genre } = useParams();
  const movies = useDataFetch();
  let genreMovies = [];

  const checkForMovies = () => {
    if (genre === "all") genreMovies = movies;
    else
      genreMovies = movies.filter(
        (movie) => movie.genre.toLowerCase() === genre
      );

    return genreMovies;
  };

  return (
    <>
      <section className="genre-section">
        <div className="genre-cards-row">
          {checkForMovies() && genreMovies.length ? (
            genreMovies.map((movie) => (
              <MovieCardSmall {...movie} key={movie.movie_id} />
            ))
          ) : (
            <Error text="Nothing to show yet" />
          )}
        </div>
      </section>
    </>
  );
}
