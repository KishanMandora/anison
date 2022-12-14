import {
  EXPLORE,
  HISTORY,
  HOME,
  PLAYLISTS,
  SUBSCRIPTIONS,
  ACCOUNT,
} from "../../constants";
import { useTempContext } from "../../Context/TempContext";
import { SearchSvg } from "../Svg/Svg";

function SearchNavbar() {
  const { route, setRoute } = useTempContext();

  const isActive = (path) =>
    path === route ? "rounded-md bg-white px-4 text-black" : "";

  return (
    <nav className="sticky top-[-1px] z-10 mx-auto flex h-16 w-9/10 items-center  justify-between bg-black py-3  uppercase">
      <h1 className="hidden cursor-pointer font-bold tracking-wide lg:text-lg xl:text-xl xs:block">
        <a href="#" onClick={() => setRoute(HOME)}>
          Anison
        </a>
      </h1>
      <div className="flex w-full xxs:w-fit">
        <input
          type="text"
          placeholder="Search Anime"
          className="w-full border-2 border-neutral-600 bg-secondary-extra-light px-2 text-sm font-light text-stone-50 outline-none focus:border-neutral-200 sm:w-72 md:w-80 xl:w-96"
        />
        <button className="bg-secondary-dark px-4 py-2 transition-all active:scale-90 ">
          <SearchSvg />
        </button>
      </div>
      <div className="hidden items-center text-sm font-medium 2xl:text-base semi-xl:flex">
        <ul className="flex justify-between">
          <li className={`mr-6 py-2 ${isActive(EXPLORE)}`}>
            <a href="#" onClick={() => setRoute(EXPLORE)}>
              Explore
            </a>
          </li>
          <li className={`mr-6 py-2 ${isActive(PLAYLISTS)}`}>
            <a href="#" onClick={() => setRoute(PLAYLISTS)}>
              Playlists
            </a>
          </li>
          <li className={`mr-6 py-2 ${isActive(HISTORY)}`}>
            <a href="#" onClick={() => setRoute(HISTORY)}>
              History
            </a>
          </li>
          <li className={`mr-6 py-2 ${isActive(SUBSCRIPTIONS)}`}>
            <a href="#" onClick={() => setRoute(SUBSCRIPTIONS)}>
              Subscriptions
            </a>
          </li>
        </ul>
      </div>
      <div
        className="hidden cursor-pointer xxs:block"
        onClick={() => setRoute(ACCOUNT)}
      >
        <img
          className="inline-block h-8 w-8 rounded-full ring-neutral-300 hover:ring-2"
          src="https://lh3.googleusercontent.com/a/ALm5wu19yixxc9hwFSrQMhCLNsoieRlH-g5bNi7x-LuizA=s288-p-rw-no"
          alt="kishan mandora"
        />
      </div>
    </nav>
  );
}

export { SearchNavbar };
