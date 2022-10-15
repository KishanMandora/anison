import { useTempContext } from "./Context/TempContext";
import { Playlists, Home, Explore } from "./Pages";
import { EXPLORE, HOME, PLAYLISTS } from "./constants";
import "./App.css";

function App() {
  const { route } = useTempContext();

  return (
    <div className="font-work-sans">
      {route === HOME && <Home />}
      {route === EXPLORE && <Explore />}
      {route === PLAYLISTS && <Playlists />}
    </div>
  );
}

export default App;
