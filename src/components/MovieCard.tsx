import { useMovieContext } from "../contexts/MovieContext";
import "../css/MovieCard.css";
import type { Movie } from "../Pages/Home";
function MovieCard({ movie }: { movie: Movie }) {
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
  const favorite = isFavorite(movie.id);
  function onFavClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (favorite) {
      removeFromFavorites(movie.id);
    } else {
      addToFavorites(movie);
    }
  }

  // console.log(movie);
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : "https://via.placeholder.com/500x750?text=No+Image"
          }
          alt={movie.title}
        />
        <div className="movie-overlay">
          <button
            className={`favorite-btn ${favorite ? "active" : ""}`}
            onClick={onFavClick}
          >
            ♥
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        {/* <p>{date[2] + "/" + date[1] + "/" + date[0]}</p> */}
        <p>
          {movie.release_date
            ? new Date(movie.release_date).toLocaleDateString("en-IN")
            : "N/A"}
        </p>
      </div>
    </div>
  );
}
export default MovieCard;
