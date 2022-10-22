import { animeData as data } from "~/data";

function Dropdown() {
  return (
    <div className="fixed top-1/10 flex w-full bg-black px-14 py-2">
      <select className="ml-auto w-full bg-secondary-light py-2 px-4 xs:w-max">
        {data.map(({ id, anime }) => {
          return <option key={id}>{anime}</option>;
        })}
      </select>
    </div>
  );
}

export { Dropdown };
