import MovieGrid from "./cine/MovieGrid";
import SideBar from "./cine/SideBar";

export default function Page() {
  return (
    <>
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <SideBar />

          <MovieGrid />
        </div>
      </main>
    </>
  );
}
