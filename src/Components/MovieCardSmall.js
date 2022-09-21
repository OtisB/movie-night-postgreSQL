import { Link } from "react-router-dom";
import "./MovieCardSmall.css";
import Rating from "./Rating";

function MovieCardSmall({
  movie_id,
  picture_small,
  movie_title,
  fsk,
  runtime,
  rating,
  genre,
}) {
  let mainTitle = movie_title;
  let additionalTitle;
  if (mainTitle.includes(" - ")) {
    const titleParts = mainTitle.split(" - ");
    mainTitle = titleParts[0];
    additionalTitle = titleParts[1];
  }
  return (
    <Link to={`/detail/${movie_id}`}>
      <div className="movie-card" key={movie_id}>
        <div className="card-image-container">
          <img src={picture_small} alt={movie_title} />
        </div>
        <div className="card-content">
          <div className="card-title">
            <h2>{mainTitle}</h2>
            <h4>{additionalTitle}</h4>
          </div>
          <div className="card-text">
            <p>FSK: {fsk}</p>
            <p>Runtime: {runtime} min</p>
          </div>
          <div className="rating-container">
            <Rating rating={rating} />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default MovieCardSmall;
