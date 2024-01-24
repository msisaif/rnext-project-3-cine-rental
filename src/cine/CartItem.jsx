import movieCover from "./../assets/movie-covers/iron-man.png";
import removeIcon from "./../assets/delete.svg";

export default function CartItem() {
  return (
    <>
      <div className="grid grid-cols-[1fr_auto] gap-4">
        <div className="flex items-center gap-4">
          <img
            className="rounded overflow-hidden w-16"
            src={movieCover}
            alt="Cover"
          />
          <div>
            <h3 className="text-base md:text-xl font-bold">Iron Man</h3>
            <p className="max-md:text-xs text-[#575A6E]">
              Action/Adventure/Sci-fi
            </p>
            <span className="max-md:text-xs">$100</span>
          </div>
        </div>
        <div className="flex justify-between gap-4 items-center">
          <button className="bg-[#D42967] rounded-md p-2 md:px-4 inline-flex items-center space-x-2 text-white">
            <img className="w-5 h-5" src={removeIcon} alt="Remove Icon" />
            <span className="max-md:hidden">Remove</span>
          </button>
        </div>
      </div>
    </>
  );
}
