import { useTempContext } from "./Context/TempContext";
import {
  Playlists,
  Home,
  Explore,
  Subscriptions,
  History,
  Watch,
  Account,
  Auth,
} from "./Pages";
import {
  ACCOUNT,
  EXPLORE,
  HISTORY,
  HOME,
  PLAYLISTS,
  SIGNIN,
  SIGNUP,
  SINGLEPLAYLIST,
  SINGLEVIDEO,
  SUBSCRIPTIONS,
} from "./constants";
import "./App.css";
import { useLayoutEffect, useState } from "react";
import { playlistsData as data } from "./finalData";

function App() {
  const { route } = useTempContext();
  const [currentList, setCurrentList] = useState([]);
  const [playlists, setPlaylists] = useState(data);

  console.log(setPlaylists, "from app");

  useLayoutEffect(() => {
    if (route !== SINGLEVIDEO && route !== SINGLEPLAYLIST) {
      setCurrentList([]);
    }

    return () => {};
  }, [route]);

  return (
    <div className="font-work-sans">
      {route === HOME && <Home />}
      {route === EXPLORE && <Explore setCurrentList={setCurrentList} />}
      {route === PLAYLISTS && (
        <Playlists playlists={playlists} setCurrentList={setCurrentList} />
      )}
      {route === SUBSCRIPTIONS && <Subscriptions />}
      {route === HISTORY && <History />}
      {route === SINGLEVIDEO && (
        <Watch currentList={currentList} setPlaylists={setPlaylists} />
      )}
      {route === SINGLEPLAYLIST && (
        <Watch currentList={currentList} setPlaylists={setPlaylists} />
      )}
      {route === ACCOUNT && <Account />}
      {(route === SIGNIN || route === SIGNUP) && <Auth />}
    </div>
  );
}

export default App;
