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

function App() {
  const { route } = useTempContext();
  const [currentList, setCurrentList] = useState([]);

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
      {route === PLAYLISTS && <Playlists setCurrentList={setCurrentList} />}
      {route === SUBSCRIPTIONS && <Subscriptions />}
      {route === HISTORY && <History />}
      {route === SINGLEVIDEO && <Watch currentList={currentList} />}
      {route === SINGLEPLAYLIST && <Watch currentList={currentList} />}
      {route === ACCOUNT && <Account />}
      {(route === SIGNIN || route === SIGNUP) && <Auth />}
    </div>
  );
}

export default App;
