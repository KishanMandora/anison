import React from "react";
import { ExploreCard } from "../../Components/Cards/ExploreCard";
import { Dropdown } from "../../Components/Dropdown/Dropdown";
import { BottomNavbar } from "../../Components/Navbar/BottomNavbar";
import { SearchNavbar } from "../../Components/Navbar/SearchNavbar";

const arr = [
  {
    id: "PuorP3K8hXA",
    title: "Tokyo Revengers | AMV | Mask off",
    duration: "2 min 51 sec",
    imageUrl: "https://i.ytimg.com/vi/PuorP3K8hXA/hqdefault.jpg",
  },
  {
    id: "OEZdKA9nffo",
    title: "Naruto Shippuden - Samidare (ksolis Trap Remix)",
    duration: "2 min 52 sec",
    imageUrl: "https://i.ytimg.com/vi/OEZdKA9nffo/hqdefault.jpg",
  },
  {
    id: "h2PJv-qbk1s",
    title: `Naruto - "Blue Bird" Trap Remix`,
    duration: "3 min 31 sec",
    imageUrl: "https://i.ytimg.com/vi/h2PJv-qbk1s/hqdefault.jpg",
  },
  {
    id: "Sft4iB2irc4",
    title: "Go Beyond [My Hero Academia - Hip Hop beat]",
    duration: "1 min 48 sec",
    imageUrl: "https://i.ytimg.com/vi/Sft4iB2irc4/hqdefault.jpg",
  },
  {
    id: "xIrzvcSXl3g",
    title: "TJ Dillashaw: The Most Disgraceful UFC Champion | UFC Documentary",
    duration: "46 min 5 sec",
    imageUrl: "https://i.ytimg.com/vi/xIrzvcSXl3g/hqdefault.jpg",
  },
];

function Explore({ setRoute, route }) {
  return (
    <div className="min-h-screen">
      <SearchNavbar setRoute={setRoute} route={route} />
      <Dropdown />
      <section className="mb-6 grid w-full gap-6 px-14 py-2 pb-8 xs:grid-cols-2 semi-lg:grid-cols-3 3xl:grid-cols-5">
        {arr.map((video) => {
          return <ExploreCard key={video.id} video={video} />;
        })}
      </section>
      <BottomNavbar setRoute={setRoute} route={route} />
    </div>
  );
}

export { Explore };
