import { EXPLORE, PLAYLISTS } from "../../constants";
import { useTempContext } from "../../Context/TempContext";

function HomeNavbar() {
  const { setRoute } = useTempContext();

  return (
    <>
      <nav className="flex h-1/10 w-full flex-auto items-center justify-between py-7 px-14 uppercase">
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
            <li className="mr-6">
              <a href="#">History</a>
            </li>
            <li className="mr-6">
              <a href="#">Subscriptions</a>
            </li>
          </ul>

          <div className="ml-6 cursor-pointer">
            <img
              className="inline-block h-8 w-8 rounded-full ring-neutral-300 hover:ring-2"
              src="https://lh3.googleusercontent.com/a/ALm5wu19yixxc9hwFSrQMhCLNsoieRlH-g5bNi7x-LuizA=s288-p-rw-no"
              alt="kishan mandora"
            />
          </div>
        </div>
      </nav>
    </>
  );
}

export { HomeNavbar };
