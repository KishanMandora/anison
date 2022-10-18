import { BottomNavbar, PlaylistCard, SearchNavbar } from "~/Components";
import { playlistsData as data } from "~/data";

function Playlists() {
  return (
    <div>
      <SearchNavbar />
      <section className="grid-container">
        {data.map((playlist) => {
          return <PlaylistCard key={playlist.id} playlist={playlist} />;
        })}
      </section>
      <BottomNavbar />
    </div>
  );
}

export { Playlists };