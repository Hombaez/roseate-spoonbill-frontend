import { React, useState, useContext } from "react";

import ErrorMessage from "./ErrorMessage";
import { UserContext } from "../context/UserContext";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [, setToken] = useContext(UserContext);

  const submitLogin = async () => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify(`{
                "email": ${email},
                "password": ${password}
              }`),
    };

    const response = await fetch(
      "https://aspen-backend-ca1ab990a9c5.herokuapp.com/auth/request-verify-token",
      requestOptions
    );
    const data = await response.json();

    if (!response.ok) {
      setErrorMessage(data.detail);
    } else {
      setToken(data.access_token);
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
    </div>
  );
};

export default Signin;
