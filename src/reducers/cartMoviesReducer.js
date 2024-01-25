export default function cartMoviesReducer(cartMovies, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      if (cartMovies.find((cartMovie) => cartMovie.id === action.payload.id)) {
        return console.error(
          `The movie ${action.payload.title} has been added to the cart already`
        );
      }

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
