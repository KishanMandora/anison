import React from "react";
import {
  BottomNavbar,
  Dropdown,
  ExploreCard,
  SearchNavbar,
} from "~/Components";
// import { videosData as data } from "../../data";
import { renderData as data } from "../../finalData";

const useData = data.sort((a, b) => Number(b.views) - Number(a.views));

console.log(useData.length, "is arr length");

function Explore({ setCurrentList }) {
  console.log("data is ", data);

  return (
    <div className="min-h-screen">
      <SearchNavbar />
      <Dropdown />
      <section className="grid-container">
        {useData.map((video) => {
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
