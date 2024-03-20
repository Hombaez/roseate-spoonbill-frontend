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
          Authorization: "bearer " + token,
        },
      };
      try {
        const response = await fetch(
          "https://aspen-backend-ca1ab990a9c5.herokuapp.com/users/me",
          requestOptions
        );
        if (!response.ok) {
          throw new Error("Failed to fetch user");
        }
        localStorage.setItem("hubToken", token);
      } catch (error) {
        console.error("There be an error, send help:", error);
        setToken(null);
      }
    };
    fetchUser();
  }, [token]);

  return (
    <UserContext.Provider value={[token, setToken]}>
      {props.children}
    </UserContext.Provider>
  );
};
