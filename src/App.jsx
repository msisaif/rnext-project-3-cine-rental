import { useState } from "react";
import Page from "./Page";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
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
    <div className={isDarkMode ? "dark" : ""}>
      <div className="bg-white text-dark dark:bg-body dark:text-white">
        <Page
          isDarkMode={isDarkMode}
          onChangeMode={() => setIsDarkMode(!isDarkMode)}
          cartMovies={cartMovies}
          onAddToCart={handleAddToCart}
          onRemoveFromCart={handleRemoveFromCart}
        />
      </div>
    </div>
  );
}

export default App;
