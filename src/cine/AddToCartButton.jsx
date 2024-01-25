import { useContext } from "react";
import { toast } from "react-toastify";
import { CartMoviesContext } from "../contexts/CartMoviesContext";
import { checkMovieInCart } from "../utils/cine-utility";
import tagIcon from "./../assets/tag.svg";

export default function AddToCartButton({ movie }) {
  const { cartMovies, dispatch } = useContext(CartMoviesContext);

  const alreadyInCart = checkMovieInCart(movie, cartMovies);

  function handleAddToCart(e, movie) {
    e.stopPropagation();

    if (alreadyInCart) {
      return toast.error(`"${movie.title}" already added to cart !`);
    }

    dispatch({
      type: "ADD_TO_CART",
      payload: movie,
    });

    toast.success(`Added "${movie.title}" to Cart !`);
  }

  return (
    <>
      <button
        type="button"
        className={
          (alreadyInCart ? "bg-primary/75" : "bg-primary") +
          " w-full rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
        }
        onClick={(e) => handleAddToCart(e, movie)}
      >
        <img src={tagIcon} alt="tag" />
        <span>
          ${movie.price} | {alreadyInCart ? "Added to cart" : "Add to Cart"}
        </span>
      </button>
    </>
  );
}
