import { useParams } from "react-router-dom";
import useDataFetch from "./useDataFetch";
import './DetailView.css';
import Rating from './Rating';
import Error from "./Error";

function DetailView() {

    const { id } = useParams();
    const movies = useDataFetch();

    const currentMovie = movies.find(movie => id == movie.movie_id);

    const listOf = (arr) => {
        let i = 0;
        const arrLength = arr.length;
        arr = arr.map(item => {
            if (i < arrLength) {
                item += ', ';
            }
            i++;
            return item;
        });

        return arr;
    };

    return (
        <section className="detail-section">
            {currentMovie !== undefined ? <article key={currentMovie.movie_id} className="detail-view-container">
                <img
                    className="detail-view-image"
                    src={currentMovie.picture_big}
                    alt={currentMovie.movie_title}
                />

                <div className="detail-view-info">
                    <h2>{currentMovie.movie_title}</h2>
                    <p>Rating: <Rating rating={currentMovie.rating} /></p>
                    <p>Genre: {currentMovie.genre}</p>
                    <p>Runtime: {currentMovie.runtime} Minutes</p>
                    <p>FSK: {currentMovie.fsk}</p>
                    <p>Production Year: {currentMovie.year_of_publication}</p>
                    <p>Directors: {listOf(currentMovie.director)}</p>
                    <p>Actors: {listOf(currentMovie.actors)}</p>
                    <p>Screenwriter: {listOf(currentMovie.screenwriter)}</p>
                    <div className="description">
                        {currentMovie.description}
                    </div>
                </div>
            </article> : <Error text='Something went wrong!' />}
        </section>
    );
}

export default DetailView;