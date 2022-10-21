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
  SINGLEPLAYLIST,
  SINGLEVIDEO,
  SUBSCRIPTIONS,
} from "./constants";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const { route } = useTempContext();
  const [currentList, setCurrentList] = useState([]);

  console.log(currentList, "current List");

  return (
    <div className="font-work-sans">
      {route === HOME && <Home />}
      {route === EXPLORE && <Explore setCurrentList={setCurrentList} />}
      {route === PLAYLISTS && (
        <Playlists setCurrentPlaylist={setCurrentPlaylist} />
      )}
      {route === SUBSCRIPTIONS && <Subscriptions />}
      {route === HISTORY && <History />}
      {route === SINGLEVIDEO && <Watch currentList={currentList} />}
      {/* {route === SINGLEPLAYLIST && <Watch currentList={currentPlayList[0]} />} */}
    </div>
  );
}

export default App;
