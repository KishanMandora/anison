import { Explore } from "./Pages/Explore/Explore";
import { Home } from "./Pages/Home/Home";
import "./App.css";
import { useTempContext } from "./Context/TempContext";

function App() {
  const { route } = useTempContext();

  return (
    <div className="font-work-sans">
      {route === "home" && <Home />}
      {route === "explore" && <Explore />}
    </div>
  );
}

export default App;
