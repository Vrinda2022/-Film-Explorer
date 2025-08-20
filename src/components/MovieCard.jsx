import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";
import { motion } from "framer-motion";

function MovieCard({movie}){

    const {isFavorite, addToFavorites, removeFromFavorites} = useMovieContext();
    const favorite = isFavorite(movie.id);

    function onFavClick(e){
        e.preventDefault();
        if(favorite) removeFromFavorites(movie.id);
        else addToFavorites(movie);
    }

    return (
    <motion.div
      className="movie-card"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
    <div className="movie-card">
        <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
            <div className="movie-overlay">
                <button className={`fav-btn ${favorite ? "active" : ""}`} onClick={onFavClick}>
                    ♥
                </button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date?.split("-")[0]}</p>
        </div>
    </div>
    </motion.div>);
}

export default MovieCard;