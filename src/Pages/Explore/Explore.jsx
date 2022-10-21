import React from "react";
import {
  BottomNavbar,
  Dropdown,
  ExploreCard,
  SearchNavbar,
} from "~/Components";
import { videosData as data } from "../../data";

console.log("videos", data);

function Explore({ setCurrentVideo }) {
  return (
    <div className="min-h-screen">
      <SearchNavbar />
      <Dropdown />
      <section className="grid-container mt-24">
        {data.map((video) => {
          return (
            <ExploreCard
              key={video.id}
              video={video}
              setCurrentVideo={setCurrentVideo}
            />
          );
        })}
      </section>
      <BottomNavbar />
    </div>
  );
}

export { Explore };
