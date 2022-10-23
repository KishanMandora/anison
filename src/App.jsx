import { useTempContext } from "./Context/TempContext";
import {
  Playlists,
  Home,
  Explore,
  Subscriptions,
  History,
  Watch,
  Account,
} from "./Pages";
import {
  ACCOUNT,
  EXPLORE,
  HISTORY,
  HOME,
  PLAYLISTS,
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

  console.log(route, "route");
  console.log(currentList, "current List");

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
    </div>
  );
}

export default App;
