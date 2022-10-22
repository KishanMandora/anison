import { useTempContext } from "~/Context/TempContext";
import { DeleteSvg, PlaylistSvg } from "../Svg/Svg";
import { SINGLEPLAYLIST } from "~/constants";
import { singlePlayListData } from "~/data";

function PlaylistCard({ playlist, setCurrentList }) {
  const { setRoute } = useTempContext();
  const { title, coverLink, totalSongs } = playlist;

  return (
    <div
      className="rounded-md"
      onClick={() => {
        setCurrentList(singlePlayListData);
        setRoute(SINGLEPLAYLIST);
      }}
    >
      <div className="relative">
        <div>
          <img src={coverLink} alt={title} className="rounded" />
        </div>
        <div className="absolute top-2/4 right-0  my-auto flex h-2/4 w-full items-center justify-center bg-secondary-transparent p-4 text-xl">
          <span> {totalSongs} </span>
          <PlaylistSvg />
        </div>
        <button className="delete bottom">
          <DeleteSvg />
        </button>
      </div>

      <div className="mt-3 flex justify-between">
        <span className="mb-2 block font-bold"> {title} </span>
      </div>
    </div>
  );
}

export { PlaylistCard };
