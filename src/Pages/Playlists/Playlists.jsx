import { BottomNavbar, PlaylistCard, SearchNavbar } from "~/Components";
import { Bar } from "~/Components/Navbar/Bar";
import { playlistsData as data } from "~/data";

function Playlists() {
  return (
    <div>
      <SearchNavbar />
      <section className="grid-container mt-20">
        {data.map((playlist) => {
          return <PlaylistCard key={playlist.id} playlist={playlist} />;
        })}
      </section>
      <BottomNavbar />
    </div>
  );
}

export { Playlists };
