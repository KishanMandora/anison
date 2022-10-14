import React from "react";
import {
  BottomNavbar,
  Dropdown,
  ExploreCard,
  SearchNavbar,
} from "../../Components";
import { videosData as data } from "../../data";

function Explore() {
  return (
    <div className="min-h-screen">
      <SearchNavbar />
      <Dropdown />
      <section className="mb-6 grid w-full gap-6 px-14 py-2 pb-8 xs:grid-cols-2 semi-lg:grid-cols-3 3xl:grid-cols-5">
        {data.map((video) => {
          return <ExploreCard key={video.id} video={video} />;
        })}
      </section>
      <BottomNavbar />
    </div>
  );
}

export { Explore };
