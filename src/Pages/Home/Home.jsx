import { HomeNavbar, BottomNavbar, ImgLazyLoad } from "~/Components";
import { EXPLORE } from "~/constants";
import { useTempContext } from "~/Context/TempContext";

function Home() {
  const { setRoute } = useTempContext();
  return (
    <div className="relative min-h-screen md:h-screen">
      <HomeNavbar />
      <section className="mx-auto grid h-9/10 w-9/10 items-center gap-6  sm:grid-cols-2">
        <div className="order-2 mb-16 mt-8 flex  flex-col gap-4  sm:order-1 sm:my-0 md:gap-8">
          <p className="text-sm font-medium uppercase 2xl:text-base">
            <span className="mr-2 font-bold"> 30/10/22 </span> Release Date
          </p>
          <h1 className="text-5xl font-bold lg:text-6xl xl:text-7xl">
            Collection Of Popular Anime Music.
          </h1>
          <button
            className="h-16 w-48 rounded-full bg-primary px-4 text-sm uppercase tracking-wide 2xl:text-base"
            onClick={() => setRoute(EXPLORE)}
          >
            Explore
          </button>
        </div>
        <div className="order-1 my-4 p-0 sm:order-2 sm:my-0  md:py-8 md:px-6">
          <ImgLazyLoad
            imageUrl={"./1061575.jpg"}
            title={"Hero Image"}
            hash={"LJI$XT?vyZDN0ExYM|%J0DIWxubE"}
            height={400}
          />
        </div>
      </section>
      <BottomNavbar />
    </div>
  );
}

export { Home };
