import React from "react";
import {
  BottomNavbar,
  Dropdown,
  ExploreCard,
  SearchNavbar,
} from "~/Components";
import { exploreData as data } from "../../finalData";

console.log(data, "from new data");

function Explore({ setCurrentList }) {
  return (
    <div className="min-h-screen">
      <SearchNavbar />
      <Dropdown />
      <section className="grid-container">
        {data.map((video) => {
          return (
            <ExploreCard
              key={video.id}
              video={video}
              setCurrentList={setCurrentList}
            />
          );
        })}
      </section>
      <BottomNavbar />
    </div>
  );
}

export { Explore };
