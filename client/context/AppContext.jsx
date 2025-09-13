import { createContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const value = {};

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

