import {
  ExploreSvg,
  PlaylistSvg,
  HistorySvg,
  SubscriptionsSvg,
} from "../Svg/Svg";

function BottomNavbar() {
  return (
    <div className="fixed bottom-0 w-full bg-secondary py-3 md:hidden">
      <ul className="flex justify-evenly">
        <li>
          <a href="#" className="text-center">
            <ExploreSvg />
          </a>
        </li>
        <li>
          <a href="#">
            <PlaylistSvg />
          </a>
        </li>
        <li>
          <a href="#">
            <HistorySvg />
          </a>
        </li>
        <li>
          <a href="#">
            <SubscriptionsSvg />
          </a>
        </li>
      </ul>
    </div>
  );
}

export { BottomNavbar };
