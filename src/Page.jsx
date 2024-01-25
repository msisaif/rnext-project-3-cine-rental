import { useReducer } from "react";
import Footer from "./Footer";
import Header from "./Header";
import MovieGrid from "./cine/MovieGrid";
import SideBar from "./cine/SideBar";
import cartMoviesReducer from "./reducers/cartMoviesReducer";

export default function Page({ isDarkMode, onChangeMode }) {
  const [cartMovies, dispatch] = useReducer(cartMoviesReducer, []);

  function handleAddToCart(movie) {
    return dispatch({
      type: "ADD_TO_CART",
      payload: movie,
    });
  }

  function handleRemoveFromCart(movie) {
    return dispatch({
      type: "REMOVE_FROM_CART",
      payload: movie,
    });
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
