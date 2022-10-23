import { animeData as data } from "~/data";

function Dropdown() {
  return (
    <div className="sticky top-[62px] mx-auto flex w-9/10 bg-black  py-2">
      <select className="ml-auto w-full bg-secondary-light py-2 px-4 xs:w-max">
        {data.map(({ id, anime }) => {
          return <option key={id}>{anime}</option>;
        })}
      </select>
    </div>
  );
}

export { Dropdown };
