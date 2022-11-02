function SubscriptionCard({ channel }) {
  const { channelName, channelCoverLink } = channel;

  return (
    <div className="rounded-md">
      <div>
        <img src={channelCoverLink} alt={channelName} className="rounded" />
      </div>
      <div className="mt-3 flex justify-between">
        <span className="mb-2 block font-bold"> {channelName} </span>
      </div>
      <button className="rounded-md bg-primary p-2 font-medium uppercase transition-all hover:scale-105 active:scale-90">
        Unsubscribe
      </button>
    </div>
  );
}

export { SubscriptionCard };
