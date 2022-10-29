import React from "react";
import {
  BottomNavbar,
  Dropdown,
  ExploreCard,
  SearchNavbar,
} from "~/Components";
import { exploreData as data } from "../../finalData";

function Explore({ setCurrentList }) {
  console.log("data is ", data);

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
