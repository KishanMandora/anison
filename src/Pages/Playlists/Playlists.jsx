import { BottomNavbar, PlaylistCard, SearchNavbar } from "~/Components";
import { playlistsData as data } from "~/data";

function Playlists({ setCurrentList }) {
  return (
    <div>
      <SearchNavbar />
      <section className="grid-container mt-2">
        {data.map((playlist) => {
          return (
            <PlaylistCard
              key={playlist.id}
              playlist={playlist}
              setCurrentList={setCurrentList}
            />
          );
        })}
      </section>
      <BottomNavbar />
    </div>
  );
}

export { Playlists };
