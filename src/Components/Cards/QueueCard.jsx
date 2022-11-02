import { DeleteSvg } from "../Svg/Svg";

function QueueCard({ video, currentList }) {
  const {
    title,
    channelName,
    thumbnails: { default: small, medium },
  } = video;

  const displayTitle =
    title.length > 60 ? title.substring(0, 60) + "..." : title;

  const mobileDisplayTitle =
    title.length > 35 ? title.substring(0, 35) + "..." : title;

  const isCurrentSong =
    currentList[0].id === video.id ? "bg-zinc-700" : "bg-secondary-light";

  return (
    <div
      className={`relative my-2 grid w-full grid-cols-3 gap-3 rounded-md p-3 ${isCurrentSong}`}
    >
      <div>
        <img className=" hidden h-full semi-xl:block" src={small} alt={title} />
        <img
          className=" block h-full semi-xl:hidden"
          src={medium}
          alt={title}
        />
      </div>
      <div className="col-span-2">
        <h3 className="hidden text-sm xs:block"> {displayTitle} </h3>
        <h3 className="block text-sm xs:hidden"> {mobileDisplayTitle} </h3>
        <span className="text-xs"> {channelName} </span>
      </div>
      <button className="delete absolute right-1 bottom-1">
        <DeleteSvg />
      </button>
    </div>
  );
}

export { QueueCard };
