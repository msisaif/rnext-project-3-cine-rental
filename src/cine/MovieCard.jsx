import { useState } from "react";
import Rating from "./Rating";
import movieCover from "./../assets/movie-covers/iron-man.png";
import MovieDetailsModal from "./MovieDetailsModal";

export default function MovieCard() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal && (
        <MovieDetailsModal onCancel={() => setShowModal(false)} />
      )}
      <figure
        onClick={() => setShowModal(true)}
        className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl"
      >
        <img className="w-full object-cover" src={movieCover} alt="cover" />
        <figcaption className="pt-4">
          <h3 className="text-xl mb-1">Iron Man</h3>
          <p className="text-[#575A6E] text-sm mb-2">Action/Adventure/Sci-fi</p>
          <div className="flex items-center space-x-1 mb-5">
            <Rating />
          </div>
          <a
            className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
            href="#"
          >
            <img src="./assets/tag.svg" alt="" />
            <span>$100 | Add to Cart</span>
          </a>
        </figcaption>
      </figure>
    </>
  );
}
