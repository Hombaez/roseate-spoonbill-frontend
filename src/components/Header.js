import { React, useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ navigation }) => {
  let navigate = useNavigate();

  const handleLogout = () => {
    console.log("log out button pressed");
    const accessToken = localStorage.getItem("accessToken");
    fetch("https://aspen-backend-ca1ab990a9c5.herokuapp.com/auth/jwt/logout", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + accessToken,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log("Logged out successfully");
          localStorage.removeItem("accessToken");
          navigate("/");
        } else {
          throw new Error("Failed to logout");
        }
      })
      .catch((error) => {
        console.error("Error logging out:", error);
      });
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Header;
