import { DeleteSvg, PlaylistSvg } from "../Svg/Svg";

function PlaylistCard({ playlist }) {
  const { title, coverLink, totalSongs } = playlist;

  return (
    <div className="rounded-md">
      <div className="relative">
        <div>
          <img src={coverLink} alt={title} className="rounded" />
        </div>
        <div className="absolute top-2/4 right-0  my-auto flex h-2/4 w-full items-center justify-center bg-secondary-transparent p-4 text-xl">
          <span> {totalSongs} </span>
          <PlaylistSvg />
        </div>
        <button className="absolute bottom-1 right-1 rounded-md bg-error p-2 transition-all hover:scale-105 active:scale-90">
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