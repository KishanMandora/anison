import { useState } from "react";
import {
  BottomNavbar,
  HistoryCard,
  SearchNavbar,
  SearchSvg,
} from "~/Components";
import { historyData as data } from "~/data";

function History() {
  const [showDelete, setShowDelete] = useState(null);

  return (
    <div>
      <SearchNavbar />
      <section className="grid-container relative xxs:grid-cols-2 semi-xl:grid-cols-5">
        <div className="col-span-2 semi-xl:col-span-3">
          {data.map((video, i) => {
            return (
              <HistoryCard
                showDelete={showDelete}
                setShowDelete={setShowDelete}
                key={video.id}
                video={video}
              />
            );
          })}
        </div>
        <div className="right-0 col-span-2 mr-14 hidden h-8/10 w-2/6 overflow-y-auto bg-secondary-dark p-8 semi-xl:fixed semi-xl:block">
          <div className="flex w-full">
            <input
              type="text"
              placeholder="Search Watch History"
              className="w-full border-2 border-x-0 border-t-0 border-neutral-600 bg-secondary-extra-light p-4 text-sm font-light text-stone-50 outline-none focus:border-neutral-200"
            />
            <button className="bg-secondary-extra-light p-4">
              <SearchSvg />
            </button>
          </div>
          <h2 className="my-6 text-center text-lg"> History Filters </h2>

          <h3> For Anime </h3>
          <div className="px-4">
            <label htmlFor="dragon" className="flex w-full justify-between">
              <span className="font-medium"> Dragon Ball Z</span>
              <input type="radio" name="dragon" id="dragon" />
            </label>
            <label htmlFor="naruto" className="flex w-full justify-between">
              <span className="font-medium"> Naruto</span>
              <input type="radio" name="naruto" id="naruto" />
            </label>
            <label htmlFor="one piece" className="flex w-full justify-between">
              <span className="font-medium"> One Piece</span>
              <input type="radio" name="one piece" id="one piece" />
            </label>
          </div>

          <h3 className="mt-4"> For Artist </h3>
          <div className="px-4">
            <label htmlFor="musicality" className="flex w-full justify-between">
              <span className="font-medium">Musicality</span>
              <input type="radio" name="musicality" id="musicality" />
            </label>
            <label htmlFor="shinzu" className="flex w-full justify-between">
              <span className="font-medium"> Shinzu Music</span>
              <input type="radio" name="shinzu" id="shinzu" />
            </label>
            <label htmlFor="lezbeepic" className="flex w-full justify-between">
              <span className="font-medium"> Lezbeepic </span>
              <input type="radio" name="lezbeepic" id="lezbeepic" />
            </label>
          </div>
        </div>
      </section>
      <BottomNavbar />
    </div>
  );
}

export { History };
