import {
  COMMENTS,
  DESCRIPTION,
  SINGLEPLAYLIST,
  SUGGESTIONS,
  PLAYLISTQUEUE,
} from "~/constants";
import { useTempContext } from "~/Context/TempContext";
import {
  DescriptionSvg,
  DislikeSvg,
  ExpandCommentsSvg,
  LikeSvg,
  SaveToPlaylist,
  ShareSvg,
} from "../Svg/Svg";

function VideoCard({ setInfoState, infoState, currentVideo }) {
  const { route } = useTempContext();
  const { id, title, likeStr, viewStr, channelName } = currentVideo;

  const isActive = (btnState) =>
    infoState === btnState ? "bg-white text-black" : "";

  return (
    <div className="semi-xl:sticky semi-xl:top-1/10 semi-xl:col-span-2">
      <div className="h-72 md:h-96 lg:h-120">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${id}?&autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="px-4">
        <h2 className="pt-1 text-lg">{title}</h2>
        <div className="text-xs">
          <span> {viewStr} views </span> •<span> {likeStr} likes </span>
        </div>
        <div className="grid grid-cols-4 items-center md:grid-cols-5">
          <div className="hidden w-full py-2 px-1 md:block">
            <img
              className="inline-block h-8 w-8 rounded-full ring-neutral-300 hover:ring-2"
              src="https://yt3.ggpht.com/su845d81gAvBm-WLD0L-CsYSOvdwbXZWs9yKze1TUVRa_A0P1ejiWmoR5YLEF4EFyXqRu2IHaQ=s88-c-k-c0x00ffffff-no-rj"
              alt={channelName}
            />
            <span className="hidden text-sm md:inline"> {channelName} </span>
          </div>
          <div className="flex w-full flex-col items-center py-2 px-1">
            <LikeSvg />
            <span className="text-xs"> Like </span>
          </div>
          <div className="flex w-full flex-col items-center py-2 px-1">
            <DislikeSvg />
            <span className="text-xs"> Dislike </span>
          </div>
          <div className="flex w-full flex-col items-center py-2 px-1">
            <ShareSvg />
            <span className="text-xs">Share</span>
          </div>
          <div className="flex w-full flex-col items-center py-2 px-1">
            <SaveToPlaylist />
            <span className="text-xs"> Save </span>
          </div>
        </div>

        <div className="mt-2 grid grid-cols-2 border-y py-2">
          <div
            className={`flex flex-col items-center border-r px-4 xxs:flex-row xxs:justify-between ${isActive(
              DESCRIPTION
            )}`}
            onClick={() =>
              infoState === DESCRIPTION
                ? setInfoState(
                    route === SINGLEPLAYLIST ? PLAYLISTQUEUE : SUGGESTIONS
                  )
                : setInfoState(DESCRIPTION)
            }
          >
            <span className="text-sm sm:text-base">Description </span>
            <DescriptionSvg />
          </div>
          <div
            className={`flex flex-col items-center px-4 xxs:flex-row xxs:justify-between ${isActive(
              COMMENTS
            )}`}
            onClick={() =>
              infoState === COMMENTS
                ? setInfoState(
                    route === SINGLEPLAYLIST ? PLAYLISTQUEUE : SUGGESTIONS
                  )
                : setInfoState(COMMENTS)
            }
          >
            <span className="text-sm sm:text-base"> Comments </span>
            <ExpandCommentsSvg />
          </div>
        </div>
      </div>
    </div>
  );
}

export { VideoCard };
