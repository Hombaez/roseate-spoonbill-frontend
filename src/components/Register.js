import React, { useContext, useState } from "react";

import { UserContext } from "../context/UserContext";
import ErrorMessage from "./ErrorMessage";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmationPassword, setConfirmationPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [, setToken] = useContext(UserContext);

  const submitRegistration = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email, password: password }),
    };

    const response = await fetch(
      "https://aspen-backend-ca1ab990a9c5.herokuapp.com/auth/register",
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
    if (password === confirmationPassword && password.length > 5) {
      submitRegistration();
    } else {
      setErrorMessage(
        "Ensure that the passwords match and greater than 5 characters"
      );
    }
  };

  return (
    <div className="create_user">
      <h3>Create an Account</h3>

      <form className="create_user" onSubmit={handleSubmit}>
        <input
          type="email"
          //   name="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input_styling"
          required
        />
        <input
          type="password"
          //   name="password"
          placeholder="Enter a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input_styling"
        />
        <input
          type="password"
          //   name="verify_password"
          placeholder="Confirm password"
          value={confirmationPassword}
          onChange={(e) => setConfirmationPassword(e.target.value)}
          className="input_styling"
        />
        <ErrorMessage message={errorMessage} />
        <button type="submit">Create User</button>
      </form>
    </div>
  );
};

export default Register;
