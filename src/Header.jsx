import { useState } from "react";
import logo from "./assets/logo.svg";
import ring from "./assets/ring.svg";
import CartModal from "./cine/CartModal";
import CartModalToggleButton from "./cine/CartModalToggleButton";
import ThemeModeToggle from "./cine/ThemeModeToggle";

export default function Header({
  isDarkMode,
  onChangeMode,
  cartMovies,
  onRemoveFromCart,
}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal && (
        <CartModal
          onCancel={() => setShowModal(false)}
          cartMovies={cartMovies}
          onRemoveFromCart={onRemoveFromCart}
        />
      )}
      <header>
        <nav className="container flex items-center justify-between space-x-10 py-6">
          <a href="index.html">
            <img src={logo} width="139" height="26" alt="logo" />
          </a>

          <ul className="flex items-center space-x-5">
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={ring} width="24" height="24" alt="ring" />
              </a>
            </li>
            <li>
              <ThemeModeToggle
                isDarkMode={isDarkMode}
                onChangeMode={onChangeMode}
              />
            </li>
            <li className="relative">
              {cartMovies.length > 0 && (
                <span className="rounded-full absolute -top-2 left-5 bg-primary text-white text-center p-0.5 size-6 text-sm z-10">
                  {cartMovies.length}
                </span>
              )}
              <CartModalToggleButton onCartClick={() => setShowModal(true)} />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
