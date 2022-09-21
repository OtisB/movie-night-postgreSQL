import { Link } from "react-router-dom";
import "./MovieOfTheDay.css";
import Rating from "./Rating";

function MovieOfTheDay({ movies }) {
  let randomMovie = movies[Math.floor(Math.random() * movies.length)];

  return (
    <section className="movie-of-the-day-section">
      <Link to={`/detail/${randomMovie.movie_id}`}>
        <div key={randomMovie.movie_id} className="MovieOfTheDayWrapper">
          <div className="MovieOfTheDayImageContainer">
            <img
              className="MovieOfTheDayImage"
              src={randomMovie.picture_big}
              alt={randomMovie.movie_title}
            />
          </div>
          <div className="SectionWrapper">
            <h2>{randomMovie.movie_title}</h2>
            <div className="InfoSectionWrapper">
              <p>FSK: {randomMovie.fsk}</p>{" "}
              <Rating rating={randomMovie.rating} />
              <p>Runtime: {randomMovie.runtime} min</p>
              <p>Production Year: {randomMovie.year_of_publication}</p>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}

export default MovieOfTheDay;
