import CartItem from "./CartItem";
import CheckoutButton from "./CheckoutButton";
import ModalCloseButton from "./ModalCloseButton";

export default function CartModal({ onCancel, cartMovies, onRemoveFromCart }) {
  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[790px] p-4 max-h-[90vh] overflow-auto">
          <div className="bg-white shadow-md dark:bg-[#12141D] rounded-2xl overflow-hidden p-5 md:p-9">
            <h2 className="text-2xl lg:text-[30px] mb-10 font-bold">
              Your Carts
            </h2>
            {cartMovies.length ? (
              <div className="space-y-8 lg:space-y-12 max-h-[450px] overflow-auto mb-10 lg:mb-14">
                {cartMovies.map((cartMovie) => (
                  <CartItem
                    key={cartMovie.id}
                    movie={cartMovie}
                    onRemoveFromCart={onRemoveFromCart}
                  />
                ))}
              </div>
            ) : (
              <p className="text-rose-500 text-xl">Cart is empty</p>
            )}

            <div className="flex items-center justify-end gap-2">
              <CheckoutButton />
              <ModalCloseButton onClose={onCancel} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
