import { getImgUrl } from "../utils/cine-utility";

export default function MovieCoverImage({ movie }) {
  return (
    <>
      <img
        className="w-full object-cover"
        src={getImgUrl(movie.cover)}
        alt={movie.title}
      />
    </>
  );
}
