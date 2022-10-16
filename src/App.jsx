import { useTempContext } from "./Context/TempContext";
import { Playlists, Home, Explore, Subscriptions } from "./Pages";
import { EXPLORE, HOME, PLAYLISTS, SUBSCRIPTIONS } from "./constants";
import "./App.css";

function App() {
  const { route } = useTempContext();

  return (
    <div className="font-work-sans">
      {route === HOME && <Home />}
      {route === EXPLORE && <Explore />}
      {route === PLAYLISTS && <Playlists />}
      {route === SUBSCRIPTIONS && <Subscriptions />}
    </div>
  );
}

export default App;
