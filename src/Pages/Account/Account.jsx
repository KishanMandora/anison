import React from "react";
import { BottomNavbar, SearchNavbar } from "~/Components";
import { SIGNIN } from "~/constants";
import { useTempContext } from "~/Context/TempContext";

function Account() {
  const { setRoute } = useTempContext();
  return (
    <div>
      <SearchNavbar />
      <div className="mt-24 flex w-full flex-col items-center justify-center p-4 px-14">
        <div className="flex flex-col items-center justify-center xs:flex-row">
          <img
            className="inline-block h-20 w-20 rounded-full ring-neutral-300 hover:ring-2"
            src="https://lh3.googleusercontent.com/a/ALm5wu19yixxc9hwFSrQMhCLNsoieRlH-g5bNi7x-LuizA=s288-p-rw-no"
            alt="kishan mandora"
          />
          <span className="mt-2 text-2xl font-medium xs:ml-2">
            Kishan Mandora
          </span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="mt-2 text-lg"> kishanmandora7@gmail.com </span>
        </div>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 text-base xs:flex-row">
          <button className="rounded-md bg-secondary-light p-2 transition-transform hover:scale-105 active:scale-90">
            Edit
          </button>
          <button className="delete" onClick={() => setRoute(SIGNIN)}>
            Sign out
          </button>
        </div>
      </div>

      <BottomNavbar />
    </div>
  );
}

export { Account };
