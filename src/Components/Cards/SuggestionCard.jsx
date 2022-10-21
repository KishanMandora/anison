function SuggestionCard({ suggestion }) {
  const { title, imageUrl, channelName, views, mediumImage } = suggestion;

  const displayTitle =
    title.length > 60 ? title.substring(0, 60) + "..." : title;

  return (
    <div className="my-2 grid w-full grid-cols-3 gap-3 bg-secondary-light p-3">
      <div>
        <img
          className=" hidden h-full semi-xl:block"
          src={imageUrl}
          alt={title}
        />
        <img
          className=" block h-full semi-xl:hidden"
          src={mediumImage}
          alt={title}
        />
      </div>
      <div className="col-span-2">
        <h3 className="text-sm"> {displayTitle} </h3>
        <span className="text-xs"> {channelName} </span>
        <br />
        <span className="text-xs"> {views} </span>
      </div>
    </div>
  );
}

export { SuggestionCard };
