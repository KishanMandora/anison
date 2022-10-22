import { useState } from "react";
import {
  BottomNavbar,
  CloseSvg,
  CommentsCard,
  DescriptionCard,
  QueueCard,
  SearchNavbar,
  SuggestionCard,
  VideoCard,
} from "~/Components";
import {
  COMMENTS,
  DESCRIPTION,
  PLAYLISTQUEUE,
  SINGLEPLAYLIST,
  SINGLEVIDEO,
  SUGGESTIONS,
} from "~/constants";
import { useTempContext } from "~/Context/TempContext";
import { suggestionsData as data } from "~/data";

function Watch({ currentList }) {
  const { route } = useTempContext();
  const [infoState, setInfoState] = useState(() =>
    route === SINGLEPLAYLIST ? PLAYLISTQUEUE : SUGGESTIONS
  );
  const currentVideo = currentList[0] ?? {};
  const { comments } = currentVideo;

  return (
    <div className="relative">
      <SearchNavbar />
      <section className="mt-20 mb-10 grid min-h-screen w-full grid-cols-1 gap-6 px-14 py-2 pb-8 semi-xl:h-screen semi-xl:grid-cols-3">
        <VideoCard
          setInfoState={setInfoState}
          infoState={infoState}
          currentVideo={currentVideo}
        />

        <div className="no-scrollbar w-full overflow-auto bg-secondary-extra-dark semi-xl:sticky semi-xl:top-1/10 semi-xl:h-9/10">
          {route === SINGLEVIDEO && infoState === SUGGESTIONS && (
            <div>
              <h3 className="py-2 text-center text-lg"> Suggestions </h3>
              {data.map((suggestion) => (
                <SuggestionCard key={suggestion.id} suggestion={suggestion} />
              ))}
            </div>
          )}

          {route === SINGLEPLAYLIST && infoState === PLAYLISTQUEUE && (
            <div>
              <h3 className="py-2 text-center text-lg">From Playlist</h3>
              {currentList.map((video) => (
                <QueueCard
                  key={video.id}
                  video={video}
                  currentList={currentList}
                />
              ))}
            </div>
          )}

          {infoState === DESCRIPTION && (
            <div>
              <h3 className="py-2 text-center text-lg"> Description </h3>
              <span
                className="absolute top-1 right-1 hidden cursor-pointer rounded-full bg-secondary-light p-2 semi-xl:block"
                onClick={() =>
                  setInfoState(
                    route === SINGLEPLAYLIST ? PLAYLISTQUEUE : SUGGESTIONS
                  )
                }
              >
                <CloseSvg />
              </span>
              <DescriptionCard currentVideo={currentVideo} />
            </div>
          )}
          {infoState === COMMENTS && (
            <div>
              <h3 className="py-2 text-center text-lg"> Comments </h3>
              <span
                className="absolute top-1 right-1 hidden cursor-pointer rounded-full bg-secondary-light p-2 semi-xl:block"
                onClick={() =>
                  setInfoState(
                    route === SINGLEPLAYLIST ? PLAYLISTQUEUE : SUGGESTIONS
                  )
                }
              >
                <CloseSvg />
              </span>
              <CommentsCard comments={comments} />
            </div>
          )}
        </div>
      </section>
      <BottomNavbar />
    </div>
  );
}

export { Watch };
