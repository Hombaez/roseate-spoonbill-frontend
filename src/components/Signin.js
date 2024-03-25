import { React, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import ErrorMessage from "./ErrorMessage";
import { UserContext } from "../context/UserContext";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [token, setToken] = useContext(UserContext);

  let navigate = useNavigate();

  const submitLogin = async () => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify(
        `grant_type=&username=${email}&password=${password}&scope=&client_id=&client_secret=`
      ),
    };

    try {
      const response = await fetch(
        "https://aspen-backend-ca1ab990a9c5.herokuapp.com/auth/jwt/login",
        requestOptions
      );

      if (!response.ok) {
        const data = await response.json();
        setErrorMessage(data.detail);
        console.log("Oops, something went wrong:", data.detail);
      } else {
        const data = await response.json();
        console.log("Data received:", data);
        // Store the access token in local storage
        localStorage.setItem("accessToken", data.access_token);
        console.log("Access token stored in local storage");
        navigate("/home");
      }
    } catch (error) {
      console.error("Error occurred while fetching:", error);
      setErrorMessage("An unexpected error occurred. Please try again later.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitLogin();
  };

  return (
    <div className="create_user">
      <h3>Login</h3>

      <form className="create_user" onSubmit={handleSubmit}>
        <input
          type="email"
          //   name="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input_styling"
        />
        <input
          type="password"
          //   name="password"
          placeholder="Enter a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input_styling"
        />
        <ErrorMessage message={errorMessage} />
        <button type="submit">Log In</button>
      </form>
      {!token ? null : <div>Logged in</div>}
    </div>
  );
};

export default Signin;
