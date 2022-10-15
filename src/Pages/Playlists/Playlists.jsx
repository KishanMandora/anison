import { BottomNavbar, PlaylistCard, SearchNavbar } from "~/Components";
import { playlistsData as data } from "~/data";

function Playlists() {
  return (
    <div>
      <SearchNavbar />
      <section className="mb-6 grid w-full gap-6 px-14 py-2 pb-8 xs:grid-cols-2 semi-lg:grid-cols-3 3xl:grid-cols-5">
        {data.map((playlist) => {
          return <PlaylistCard key={playlist.id} playlist={playlist} />;
        })}
      </section>
      <BottomNavbar />
    </div>
  );
}

export { Playlists };
