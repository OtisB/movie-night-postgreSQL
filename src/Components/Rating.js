import './Rating.css';

function Rating({ rating }) {

    const ratings = () => {
        let stars = [];
        for (let i = 0; i < rating; i++) {
            stars.push(<span className='star-full' key={crypto.randomUUID()}>&#9733;</span>);
        }

        for (let i = 0; i < (5 - rating); i++) {
            stars.push(<span key={crypto.randomUUID()}>&#9734;</span>);
        }
        return stars;
    }
    return (
        <span>{ratings()}</span>
    );
}

export default Rating;