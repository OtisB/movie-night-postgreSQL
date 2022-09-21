import { Link } from 'react-router-dom';
import "./MovieCardSmall.css";
import Rating from "./Rating";

function MovieCardSmall({
  id,
  fieldImage,
  fieldTitle,
  fieldFsk,
  fieldRuntime,
  fieldRating,
  fieldGenre
}) {

  let mainTitle = fieldTitle;
  let additionalTitle;
  if (mainTitle.includes(" - ")) {
    const titleParts = mainTitle.split(' - ');
    mainTitle = titleParts[0];
    additionalTitle = titleParts[1];
  }
  return (
    <Link to={`/detail/${id}`}>
      <div className="movie-card" key={id}>
        <div className="card-image-container">
          <img
            src={fieldImage}
            alt={fieldTitle}
          />
        </div>
        <div className="card-content">
          <div className="card-title">
            <h2>{mainTitle}</h2>
            <h4>{additionalTitle}</h4>
          </div>
          <div className="card-text">
            <p>FSK: {fieldFsk}</p>
            <p>Runtime: {fieldRuntime} min</p>
          </div>
          <div className="rating-container">
            <Rating rating={fieldRating} /></div>
        </div>
      </div>
    </Link>
  );
}

export default MovieCardSmall;
