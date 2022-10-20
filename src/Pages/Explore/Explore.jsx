import React from "react";
import {
  BottomNavbar,
  Dropdown,
  ExploreCard,
  SearchNavbar,
} from "~/Components";
import { videosData as data } from "../../data";

function Explore() {
  return (
    <div className="min-h-screen">
      <SearchNavbar />
      <Dropdown />
      <section className="grid-container mt-24">
        {data.map((video) => {
          return <ExploreCard key={video.id} video={video} />;
        })}
      </section>
      <BottomNavbar />
    </div>
  );
}

export { Explore };
