import React from "react";
import { useEffect } from "react";
import {
  BottomNavbar,
  Dropdown,
  ExploreCard,
  SearchNavbar,
} from "~/Components";
import { exploreData as data } from "../../finalData";

console.log(data, "from new data");

function Explore({ setCurrentList }) {
  const fetchData = async () => {
    const resp = await fetch("http://localhost:3000/explore");
    console.log(resp, " is resp");
  };

  useEffect(() => {
    fetchData();
  });

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
