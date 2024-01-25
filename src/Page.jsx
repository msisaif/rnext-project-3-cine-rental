import { useReducer } from "react";
import Footer from "./Footer";
import Header from "./Header";
import MovieGrid from "./cine/MovieGrid";
import SideBar from "./cine/SideBar";
import { CartMoviesContext } from "./contexts/CartMoviesContext";
import cartMoviesReducer from "./reducers/cartMoviesReducer";

export default function Page() {
  const [cartMovies, dispatch] = useReducer(cartMoviesReducer, []);

  return (
    <>
      <CartMoviesContext.Provider value={{ cartMovies, dispatch }}>
        <Header />
        <main>
          <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
            <SideBar />

            <MovieGrid />
          </div>
        </main>
      </CartMoviesContext.Provider>
      <Footer />
    </>
  );
}
