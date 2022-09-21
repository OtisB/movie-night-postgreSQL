import { useState, useEffect } from "react";
import MovieCardSmall from "./MovieCardSmall";
import "./MovieCards.css";

function MovieCards({ movies }) {
  const [firstMovieIndex, setFirstMovieIndex] = useState(0);
  const [lastMovieIndex, setLastMovieIndex] = useState(1);
  const [shownRange, setShownRange] = useState(lastMovieIndex - firstMovieIndex);
  const [shownMovies, setShownMovies] = useState(movies.slice(firstMovieIndex, lastMovieIndex + 1));
  //const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const screenWidth = window.innerWidth;

  const checkScreenWidth = () => {
    if (screenWidth >= 1400) {
      setLastMovieIndex(firstMovieIndex + 3);
    } else if (screenWidth >= 1200) {
      setLastMovieIndex(firstMovieIndex + 2);
    } else {
      setLastMovieIndex(firstMovieIndex + 1);
    }
    setShownRange(lastMovieIndex - firstMovieIndex);
  }

  const handleClickPrev = () => {
    if ((firstMovieIndex - shownRange) <= 0) {
      setFirstMovieIndex(0);
      setLastMovieIndex(4);
    } else {
      setFirstMovieIndex(firstMovieIndex - shownRange - 1);
      setLastMovieIndex(lastMovieIndex - shownRange - 1);
    }
  };

  const handleClickNext = () => {
    if ((lastMovieIndex + shownRange) >= movies.length - 1) {
      setFirstMovieIndex(((movies.length - 1)) - shownRange);
      setLastMovieIndex(movies.length - 1);
    } else {
      setFirstMovieIndex(firstMovieIndex + shownRange + 1);
      setLastMovieIndex(lastMovieIndex + shownRange + 1);
    }
  };

  useEffect(() => {
    checkScreenWidth();
    setShownMovies(movies.slice(firstMovieIndex, lastMovieIndex + 1));
  }, [firstMovieIndex, lastMovieIndex]);

  return (
    <section id="cards-section">
      <div className="card-navigation">
        <button disabled={firstMovieIndex === 0} onClick={handleClickPrev}>Prev</button>
        <button disabled={lastMovieIndex === movies.length - 1} onClick={handleClickNext}>Next</button>
      </div>
      <div className="cards-container">
        {shownMovies.map(shownMovie => {
          return (
            <MovieCardSmall {...shownMovie} key={shownMovie.id} />
          )
        })}
      </div>
    </section>
  );
}

export default MovieCards;
