import {
  ACCOUNT,
  EXPLORE,
  HISTORY,
  PLAYLISTS,
  SUBSCRIPTIONS,
} from "../../constants";
import { useTempContext } from "../../Context/TempContext";
import { AccountSvg } from "../Svg/Svg";

function HomeNavbar() {
  const { setRoute } = useTempContext();

  return (
    <>
      <nav className="sticky top-0 mx-auto flex h-16 w-9/10 flex-auto items-center justify-between bg-black py-7 uppercase">
        <h1 className="cursor-pointer font-bold tracking-wide lg:text-lg xl:text-xl">
          Anison
        </h1>
        <div className="flex items-center text-sm font-medium 2xl:text-base">
          <ul className="hidden justify-between md:flex">
            <li className="mr-6">
              <a href="#" onClick={() => setRoute(EXPLORE)}>
                Explore
              </a>
            </li>
            <li className="mr-6" onClick={() => setRoute(PLAYLISTS)}>
              <a href="#">Playlists</a>
            </li>
            <li className="mr-6" onClick={() => setRoute(HISTORY)}>
              <a href="#">History</a>
            </li>
            <li className="mr-6" onClick={() => setRoute(SUBSCRIPTIONS)}>
              <a href="#">Subscriptions</a>
            </li>
          </ul>

          <div
            className="ml-6 cursor-pointer"
            onClick={() => setRoute(ACCOUNT)}
          >
            <img
              className="inline-block h-8 w-8 rounded-full ring-neutral-300 hover:ring-2"
              src="https://lh3.googleusercontent.com/a/ALm5wu19yixxc9hwFSrQMhCLNsoieRlH-g5bNi7x-LuizA=s288-p-rw-no"
              alt="kishan mandora"
            />
            {/* <div className="rounded-full border-2 p-1">
              <AccountSvg />
            </div> */}
          </div>
        </div>
      </nav>
    </>
  );
}

export { HomeNavbar };
