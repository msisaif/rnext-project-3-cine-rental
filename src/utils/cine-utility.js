function getImgUrl(name) {
  return new URL(`../assets/movie-covers/${name}`, import.meta.url).href;
}

function checkMovieInCart(movie, cartMovies) {
  return cartMovies.findIndex((cartMovie) => cartMovie.id === movie.id) > -1;
}

export { checkMovieInCart, getImgUrl };
