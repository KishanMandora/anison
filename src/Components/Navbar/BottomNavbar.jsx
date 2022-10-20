import {
  EXPLORE,
  HISTORY,
  HOME,
  PLAYLISTS,
  SUBSCRIPTIONS,
} from "../../constants";
import { useTempContext } from "../../Context/TempContext";
import {
  ExploreSvg,
  PlaylistSvg,
  HistorySvg,
  SubscriptionsSvg,
  HomeSvg,
} from "../Svg/Svg";

function BottomNavbar() {
  const { route, setRoute } = useTempContext();

  const visbilityFunc = () => (route === HOME ? "md:hidden" : "semi-xl:hidden");

  const isActive = (path) =>
    path === route ? "rounded-md bg-white text-black" : "";

  const showIcon = () => (route === HOME ? "hidden" : "block");

  return (
    <div
      className={`fixed bottom-0 w-full bg-secondary-extra-dark ${visbilityFunc()}`}
    >
      <ul className="flex justify-evenly">
        <li className={`p-1 sm:p-3  xxs:p-2 xs:hidden ${showIcon()}`}>
          <a href="#" onClick={() => setRoute(HOME)}>
            <HomeSvg />
          </a>
        </li>
        <li className={`p-1 sm:p-3  xxs:p-2 ${isActive(EXPLORE)}`}>
          <a href="#" onClick={() => setRoute(EXPLORE)}>
            <ExploreSvg />
          </a>
        </li>
        <li className={`p-1 sm:p-3  xxs:p-2 ${isActive(PLAYLISTS)}`}>
          <a href="#" onClick={() => setRoute(PLAYLISTS)}>
            <PlaylistSvg />
          </a>
        </li>
        <li className={`p-1 sm:p-3  xxs:p-2 ${isActive(HISTORY)}`}>
          <a href="#" onClick={() => setRoute(HISTORY)}>
            <HistorySvg />
          </a>
        </li>
        <li className={`p-1 sm:p-3  xxs:p-2 ${isActive(SUBSCRIPTIONS)}`}>
          <a href="#" onClick={() => setRoute(SUBSCRIPTIONS)}>
            <SubscriptionsSvg />
          </a>
        </li>
        <li className={`block p-1 sm:p-3 xxs:hidden xxs:p-2 ${showIcon()}`}>
          <a href="#">
            <img
              className="inline-block h-6 w-6 rounded-full ring-neutral-300 hover:ring-1"
              src="https://lh3.googleusercontent.com/a/ALm5wu19yixxc9hwFSrQMhCLNsoieRlH-g5bNi7x-LuizA=s288-p-rw-no"
              alt="kishan mandora"
            />
          </a>
        </li>
      </ul>
    </div>
  );
}

export { BottomNavbar };
