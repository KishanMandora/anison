const arr = [
  {
    id: 1,
    anime: "One Piece",
  },
  {
    id: 2,
    anime: "Bleach",
  },
  {
    id: 3,
    anime: "Naruto",
  },
  {
    id: 4,
    anime: "Chainsaw Man",
  },
  {
    id: 5,
    anime: "Mob Psycho",
  },
];

function Dropdown() {
  return (
    <div className="flex w-full px-14">
      <select className="ml-auto w-full bg-secondary-light py-2 px-4 xs:w-max">
        {arr.map(({ id, anime }) => {
          return <option key={id}>{anime}</option>;
        })}
      </select>
    </div>
  );
}

export { Dropdown };
