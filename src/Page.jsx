import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import MovieGrid from "./cine/MovieGrid";
import SideBar from "./cine/SideBar";

export default function Page({ isDarkMode, onChangeMode }) {
  const [cartMovies, setCartMovies] = useState([]);

  function handleAddToCart(movie) {
    if (cartMovies.find((cartMovie) => cartMovie.id === movie.id)) {
      return console.error(
        `The movie ${movie.title} has been added to the cart already`
      );
    }

    return setCartMovies([...cartMovies, movie]);
  }

  function handleRemoveFromCart(movie) {
    setCartMovies(cartMovies.filter((cartMovie) => cartMovie.id !== movie.id));
  }

  return (
    <>
      <Header
        isDarkMode={isDarkMode}
        onChangeMode={onChangeMode}
        cartMovies={cartMovies}
        onRemoveFromCart={handleRemoveFromCart}
      />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <SideBar />

          <MovieGrid onAddToCart={handleAddToCart} />
        </div>
      </main>
      <Footer />
    </>
  );
}
