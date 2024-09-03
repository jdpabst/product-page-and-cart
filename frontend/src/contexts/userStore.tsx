import { createContext, useContext, useState } from "react";
import { UserContextType } from "../types";

const UserContext = createContext<UserContextType>(null);

export const UserStore = ({ children }) => {
 const [menu, setMenu] = useState([]);
 const [cart, setCart] = useState({});
 const [submitted, setSubmitted] = useState('');
 // const [cartItem, setCartItem] = useState([]);


 return (
  <UserContext.Provider value={{ menu, setMenu, cart, setCart, submitted, setSubmitted }}>
   {children}
  </ UserContext.Provider>
 )
};

export const useUserContext = () => useContext(UserContext);
