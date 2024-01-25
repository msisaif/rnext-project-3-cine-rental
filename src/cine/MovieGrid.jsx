import { useState } from "react";
import { getAllMovies } from "./../data/movies.js";
import MovieCard from "./MovieCard";
import MovieDetailsModal from "./MovieDetailsModal";

export default function MovieGrid() {
  const [showMovie, setShowMovie] = useState(null);

  const movies = getAllMovies();

  return (
    <>
      {showMovie && (
        <MovieDetailsModal
          movie={showMovie}
          onCancel={() => setShowMovie(null)}
        />
      )}
      <div className="content">
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onShowDetails={() => setShowMovie(movie)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
