import { WATCH } from "~/constants";
import { useTempContext } from "~/Context/TempContext";
import { DotsSvg } from "../Svg/Svg";

function ExploreCard({ video, setCurrentVideo }) {
  const { setRoute } = useTempContext();
  const { imageUrl, duration, title } = video;

  console.log("video from card", video);

  const displayTitle =
    title.trim().length > 40 ? title.substring(0, 40) + "..." : title + "";

  return (
    <div
      className="rounded-md"
      onClick={() => {
        setRoute(WATCH);
        setCurrentVideo(video);
      }}
    >
      <div>
        <img src={imageUrl} alt={title} className="rounded" />
      </div>
      <div className="flex justify-between">
        <span className="mb-2 block font-bold"> {displayTitle} </span>
        <DotsSvg />
      </div>
      <span className="font-medium">{duration}</span>
    </div>
  );
}

export { ExploreCard };
