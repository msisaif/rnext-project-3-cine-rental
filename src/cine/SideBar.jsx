import comingSoon from "./../assets/icons/commingSoon.svg";
import favorites from "./../assets/icons/favourite.svg";
import newRelease from "./../assets/icons/newRelease.svg";
import trending from "./../assets/icons/trending.svg";
import watchLater from "./../assets/icons/watchLater.svg";

export default function SideBar() {
  return (
    <>
      <aside>
        <ul className="space-y-2">
          <li>
            <a
              className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black"
              href="#"
            >
              <img src={trending} width="24" height="24" alt="Trending" />
              <span>Trending</span>
            </a>
          </li>
          <li>
            <a
              className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
              href="#"
            >
              <img src={newRelease} width="24" height="24" alt="New Release" />
              <span>New Releases</span>
            </a>
          </li>
          <li>
            <a
              className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
              href="#"
            >
              <img src={comingSoon} width="24" height="24" alt="Coming Soon" />
              <span>Coming Soon</span>
            </a>
          </li>
          <li>
            <a
              className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
              href="#"
            >
              <img src={favorites} width="24" height="24" alt="Favorites" />
              <span>Favorites</span>
            </a>
          </li>
          <li>
            <a
              className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
              href="#"
            >
              <img src={watchLater} width="24" height="24" alt="Watch Later" />
              <span>Watch Later</span>
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
}
