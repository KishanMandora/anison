import { createContext, useContext, useState } from "react";

const TempContext = createContext();

function TempProvider({ children }) {
  const [route, setRoute] = useState("home");

  return (
    <TempContext.Provider value={{ route, setRoute }}>
      {children}
    </TempContext.Provider>
  );
}

function useTempContext() {
  return useContext(TempContext);
}

export { TempProvider, useTempContext };
