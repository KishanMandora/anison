import { BottomNavbar } from "../../Components/Navbar/BottomNavbar";
import { HomeNavbar } from "../../Components/Navbar/HomeNavbar";

function Home() {
  return (
    <div className="relative min-h-screen bg-black font-work-sans text-white">
      <BottomNavbar />
      <HomeNavbar />
      <section className="grid w-full items-center gap-6 px-14 sm:grid-cols-2 md:h-9/10">
        <div className="order-2 mb-16 mt-8 flex  flex-col gap-4  sm:order-1 sm:my-0 md:gap-8">
          <p className="text-sm font-medium uppercase 2xl:text-base">
            <span className="mr-2 font-bold"> 30/10/22 </span> Release Date
          </p>
          <h1 className="text-5xl font-bold lg:text-6xl xl:text-7xl">
            Collection Of Popular Anime Music.
          </h1>
          <button className="h-16 w-48 rounded-full bg-primary px-4 text-sm uppercase tracking-wide 2xl:text-base">
            Explore
          </button>
        </div>
        <div className="order-1 my-4 p-0 sm:order-2 sm:my-0  md:py-8 md:px-6">
          <img
            className="rounded-lg"
            src="../../public/1061575.jpg"
            alt=""
            srcset=""
          />
        </div>
      </section>
    </div>
  );
}

export default Home;