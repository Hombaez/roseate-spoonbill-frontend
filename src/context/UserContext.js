import { React, createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [token, setToken] = useState(localStorage.getItem("hubToken"));

  useEffect(() => {
    const fetchUser = async () => {
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      };

      const response = await fetch(
        "https://aspen-backend-ca1ab990a9c5.herokuapp.com/users/me",
        requestOptions
      );

      if (!response.ok) {
        setToken(null);
      }
      localStorage.setItem("hubToken", token);
    };
    fetchUser();
  }, [token]);

  return (
    <UserContext.Provider value={[token, setToken]}>
      {props.children}
    </UserContext.Provider>
  );
};
