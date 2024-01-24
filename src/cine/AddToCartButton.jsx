import tagIcon from "./../assets/tag.svg";

export default function AddToCartButton({ movie, onAddToCart }) {
  function handleAddToCart(e, movie) {
    e.stopPropagation();

    console.log(movie);

    onAddToCart(movie);
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
