import { useTempContext } from "~/Context/TempContext";
import { DeleteSvg, PlaylistSvg } from "../Svg/Svg";
import { SINGLEPLAYLIST } from "~/constants";
import { singlePlayListData } from "~/data";

function PlaylistCard({ playlist, setCurrentList }) {
  const { setRoute } = useTempContext();
  const { title, coverLink, videosList } = playlist;

  console.log(videosList);

  return (
    <div
      className="rounded-md"
      onClick={() => {
        setCurrentList(videosList);
        setRoute(SINGLEPLAYLIST);
      }}
    >
      <div className="relative">
        <div>
          {videosList.length > 0 ? (
            <img
              src={videosList[0]?.thumbnails.high || ""}
              alt={title}
              className="rounded"
            />
          ) : (
            <img src={coverLink} alt={title} className="rounded" />
          )}
        </div>
        <div className="absolute top-0 right-0 my-auto flex h-full items-center justify-center bg-secondary-transparent p-4 text-xl">
          <span> {videosList.length} </span>
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
