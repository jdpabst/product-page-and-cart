import { createContext, useContext, useState } from "react";
import { UserContextType } from "../types";

const UserContext = createContext<UserContextType>(null);

export const UserStore = ({ children }) => {
 const [menu, setMenu] = useState([])


 return (
  <UserContext.Provider value={{ menu, setMenu }}>
   {children}
  </ UserContext.Provider>
 )
};

export const useUserContext = () => useContext(UserContext);
