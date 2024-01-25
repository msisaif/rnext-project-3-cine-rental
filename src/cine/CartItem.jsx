import { useContext } from "react";
import { CartMoviesContext } from "../contexts/CartMoviesContext";
import MovieCoverImage from "./MovieCoverImage";
import RemoveButton from "./RemoveButton";

export default function CartItem({ movie }) {
  const { dispatch } = useContext(CartMoviesContext);

  return (
    <>
      <div className="grid grid-cols-[1fr_auto] gap-4">
        <div className="flex items-center gap-4">
          <div className="w-16">
            <MovieCoverImage movie={movie} />
          </div>
          <div>
            <h3 className="text-base md:text-xl font-bold">{movie.title}</h3>
            <p className="max-md:text-xs text-[#575A6E]">{movie.genre}</p>
            <span className="max-md:text-xs">${movie.price}</span>
          </div>
        </div>
        <div className="flex justify-between gap-4 items-center">
          <RemoveButton
            onRemove={() => {
              dispatch({
                type: "REMOVE_FROM_CART",
                payload: movie,
              });
            }}
          />
        </div>
      </div>
    </>
  );
}
