import { React, createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  //token initally set as null
  const [token, setToken] = useState(null);

  useEffect(() => {
    //gets token from local storage and stores it
    const storedToken = localStorage.getItem("accessToken");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  return (
    <UserContext.Provider value={[token, setToken]}>
      {props.children}
    </UserContext.Provider>
  );
};
