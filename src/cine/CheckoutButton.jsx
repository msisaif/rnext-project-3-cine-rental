import checkoutIcon from "./../assets/icons/checkout.svg";

export default function CheckoutButton() {
  return (
    <>
      <button
        type="button"
        className="rounded-md p-2 md:px-4 inline-flex items-center space-x-2 bg-primary text-[#171923] text-sm"
      >
        <img src={checkoutIcon} width="24" height="24" alt="Checkout Icon" />
        <span>Checkout</span>
      </button>
    </>
  );
}
