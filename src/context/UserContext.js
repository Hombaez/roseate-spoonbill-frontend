import { React, createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [token, setToken] = useState(localStorage.getItem("hubToken"));
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      if (!token) {
        setIsLoading(false);
        return;
      }

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
        console.log("response is not okay");
        setToken(null);
      } else {
        const responseData = await response.json();
        const newToken = responseData.token; // Assuming the token is returned from the server
        setToken(newToken);
        localStorage.setItem("hubToken", newToken);
        console.log("token", newToken);
      }
      setIsLoading(false);
    };
    fetchUser();
  }, [token]);

  return (
    <UserContext.Provider value={[token, setToken]}>
      {props.children}
    </UserContext.Provider>
  );
};
