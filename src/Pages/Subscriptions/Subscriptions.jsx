import { BottomNavbar, SearchNavbar, SubscriptionCard } from "~/Components";
import { subscriptionsData as data } from "~/data";

function Subscriptions() {
  return (
    <div>
      <SearchNavbar />
      <section className="grid-container">
        {data.map((channel) => {
          return <SubscriptionCard key={channel.id} channel={channel} />;
        })}
      </section>
      <BottomNavbar />
    </div>
  );
}

export { Subscriptions };
