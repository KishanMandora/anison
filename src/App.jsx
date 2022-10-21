import { useTempContext } from "./Context/TempContext";
import {
  Playlists,
  Home,
  Explore,
  Subscriptions,
  History,
  Watch,
} from "./Pages";
import {
  EXPLORE,
  HISTORY,
  HOME,
  PLAYLISTS,
  SUBSCRIPTIONS,
  WATCH,
} from "./constants";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const { route } = useTempContext();
  const [currentVideo, setCurrentVideo] = useState(null);

  useEffect(() => {
    if (route !== WATCH) {
      setCurrentVideo(null);
    }
  }, [route]);

  console.log(currentVideo, "current video");

  return (
    <div className="font-work-sans">
      {route === HOME && <Home />}
      {route === EXPLORE && <Explore setCurrentVideo={setCurrentVideo} />}
      {route === PLAYLISTS && <Playlists />}
      {route === SUBSCRIPTIONS && <Subscriptions />}
      {route === HISTORY && <History />}
      {route === WATCH && <Watch currentVideo={currentVideo} />}
    </div>
  );
}

export default App;
