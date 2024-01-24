import Footer from "./Footer";
import Header from "./Header";
import MovieGrid from "./cine/MovieGrid";
import SideBar from "./cine/SideBar";

export default function Page({
  isDarkMode,
  onChangeMode,
  cartMovies,
  onAddToCart,
  onRemoveFromCart,
}) {
  return (
    <>
      <Header
        isDarkMode={isDarkMode}
        onChangeMode={onChangeMode}
        cartMovies={cartMovies}
        onRemoveFromCart={onRemoveFromCart}
      />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <SideBar />

          <MovieGrid onAddToCart={onAddToCart} />
        </div>
      </main>
      <Footer />
    </>
  );
}
