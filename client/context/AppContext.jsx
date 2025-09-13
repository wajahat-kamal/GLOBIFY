import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios"

const AppContext = createContext();

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL

export const AppProvider = ({ children }) => {

   const navigate = useNavigate();
  const value = {};

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const UseAppContext = () => {
    return useContext(AppContext)
}