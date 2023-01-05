import { Blurhash } from "react-blurhash";
import { SINGLEVIDEO } from "~/constants";
import { useTempContext } from "~/Context/TempContext";
import { ImgLazyLoad } from "../index";
import { DotsSvg } from "../Svg/Svg";

function ExploreCard({ video, setCurrentList }) {
  const { setRoute } = useTempContext();
  const {
    thumbnails: { high: imageUrl },
    duration,
    title,
    hash,
  } = video;

  const displayTitle =
    title.trim().length > 40 ? title.substring(0, 40) + "..." : title + "";

  return (
    <div
      className="min-h-80 flex flex-col rounded-md"
      onClick={() => {
        setRoute(SINGLEVIDEO);
        setCurrentList((prev) => [video]);
      }}
    >
      <div className="">
        <ImgLazyLoad imageUrl={imageUrl} title={title} hash={hash} />
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
