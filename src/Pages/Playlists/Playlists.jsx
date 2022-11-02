import { BottomNavbar, PlaylistCard, SearchNavbar } from "~/Components";

function Playlists({ setCurrentList, playlists }) {
  return (
    <div>
      <SearchNavbar />
      <section className="grid-container mt-2">
        {playlists.map((playlist) => {
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
