import cart from "./../assets/shopping-cart.svg";

export default function CartModalToggleButton({ onCartClick }) {
  return (
    <>
      <button
        className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
        type="button"
        onClick={onCartClick}
      >
        <img src={cart} width="24" height="24" alt="cart" />
      </button>
    </>
  );
}
