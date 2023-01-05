import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { TempProvider } from "./Context/TempContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TempProvider>
      <App />
    </TempProvider>
  </React.StrictMode>
);
