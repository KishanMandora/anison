function DescriptionCard({ currentVideo }) {
  const { title, likes, views, channelName, description } = currentVideo;
  return (
    <div className="p-4">
      <h2 className="mb-4 text-lg font-bold"> {title} </h2>
      <div className="mb-4 flex items-center gap-4">
        <img
          className="inline-block h-8 w-8 rounded-full ring-neutral-300 hover:ring-2"
          src="https://yt3.ggpht.com/su845d81gAvBm-WLD0L-CsYSOvdwbXZWs9yKze1TUVRa_A0P1ejiWmoR5YLEF4EFyXqRu2IHaQ=s88-c-k-c0x00ffffff-no-rj"
          alt={channelName}
        />
        <h3 className="text-sm"> {channelName} </h3>
      </div>
      <div className="my-4 flex justify-evenly border-b p-2 font-bold">
        <div>
          <span> {likes} likes </span>
        </div>
        ||
        <div>
          <span> {views} views </span>
        </div>
      </div>
      <div className="text-sm"> {description} </div>
    </div>
  );
}

export { DescriptionCard };
