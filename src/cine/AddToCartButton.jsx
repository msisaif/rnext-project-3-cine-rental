import { useContext } from "react";
import { CartMoviesContext } from "../contexts/CartMoviesContext";
import tagIcon from "./../assets/tag.svg";

export default function AddToCartButton({ movie }) {
  const { dispatch } = useContext(CartMoviesContext);

  function handleAddToCart(e, movie) {
    e.stopPropagation();

    console.log(movie);

    dispatch({
      type: "ADD_TO_CART",
      payload: movie,
    });
  }

  return (
    <>
      <button
        type="button"
        className="w-full bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
        onClick={(e) => handleAddToCart(e, movie)}
      >
        <img src={tagIcon} alt="tag" />
        <span>${movie.price} | Add to Cart</span>
      </button>
    </>
  );
}
