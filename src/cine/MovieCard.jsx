import AddToCartButton from "./AddToCartButton.jsx";
import MovieCoverImage from "./MovieCoverImage.jsx";
import Rating from "./Rating";

export default function MovieCard({ onShowDetails, movie }) {
  return (
    <>
      <figure
        onClick={onShowDetails}
        className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl"
      >
        <MovieCoverImage movie={movie} />
        <figcaption className="pt-4">
          <h3 className="text-xl mb-1">{movie.title}</h3>
          <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
          <div className="flex items-center space-x-1 mb-5">
            <Rating value={movie.rating} />
          </div>
          <AddToCartButton movie={movie} />
        </figcaption>
      </figure>
    </>
  );
}
