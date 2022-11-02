import { DeleteSvg } from "../Svg/Svg";

function HistoryCard({ video, showDelete, setShowDelete }) {
  const { id, medium, title, channelName, views, description } = video;

  const showBtn = id === showDelete ? "block" : "hidden";

  const displayTitle =
    title.trim().length > 40 ? title.substring(0, 40) + "..." : title + "";

  const displayDescription =
    description.trim().length > 110
      ? description.substring(0, 110) + "..."
      : description + "";

  const smallScreenTitle =
    title.trim().length > 30 ? title.substring(0, 30) + "..." : title + "";

  return (
    <div
      className="relative mb-6 flex"
      onMouseEnter={() => setShowDelete(id)}
      onMouseLeave={() => setShowDelete(null)}
    >
      <div className="basis-1/3">
        <img src={medium} alt={title} className="h-full" />
      </div>
      <div className="flex basis-2/3 flex-col pl-4">
        <span className="mb-3 hidden sm:text-xl xxs:block">{displayTitle}</span>
        <span className="mb-3 block sm:text-xl xxs:hidden">
          {smallScreenTitle}
        </span>
        <div className="mb-2 text-xs sm:text-sm">
          <span> {channelName} </span> •<span> {views} </span>
        </div>
        <span className="hidden text-sm md:block"> {displayDescription} </span>
      </div>
      <button className={`delete bottom ${showBtn}`}>
        <DeleteSvg />
      </button>
    </div>
  );
}

export { HistoryCard };
