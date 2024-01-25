export default function cartMoviesReducer(cartMovies, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      return [...cartMovies, action.payload];
    }
    case "REMOVE_FROM_CART": {
      return cartMovies.filter(
        (cartMovie) => cartMovie.id !== action.payload.id
      );
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
