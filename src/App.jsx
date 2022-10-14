import { useState } from "react";
import { Explore } from "./Pages/Explore/Explore";
import { Home } from "./Pages/Home/Home";
import "./App.css";

function App() {
  const [route, setRoute] = useState("home");

  return (
    <div>
      {route === "home" && <Home setRoute={setRoute} route={route} />}
      {route === "explore" && <Explore setRoute={setRoute} route={route} />}
    </div>
  );
}

export default App;
