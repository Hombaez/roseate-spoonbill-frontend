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

      try {
        const response = await fetch(
          "https://aspen-backend-ca1ab990a9c5.herokuapp.com/users/me",
          requestOptions
        );

        if (!response.ok) {
          console.log("Response is not okay:", response.status);
          throw new Error("Failed to fetch user data");
        }

        const responseData = await response.json();

        if (!responseData.access_token) {
          console.log("No access token found in response:", responseData);
          throw new Error("Access token not found in response");
        }

        const newToken = responseData.access_token;
        setToken(newToken);
        localStorage.setItem("hubToken", newToken);
        console.log("Token:", newToken);
      } catch (error) {
        console.error("Error fetching user:", error);
        setToken(null);
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
