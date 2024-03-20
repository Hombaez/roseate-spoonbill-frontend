import React, { useState } from "react";
import axios from "axios";

import "./LogIn.css";

import PrimaryButton from "./UI/buttons/PrimaryButton";

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await axios.post("/auth/login", { email, password });
  //     // Handle successful login (e.g., store token in local storage, redirect)
  //     console.log("Login successful:", response.data);
  //   } catch (error) {
  //     // Handle login error
  //     console.error("Login error:", error);
  //   }
  // };

  return (
    <div className="LogIn">
      <div className="LogIn_Container">
        <div className="header">
          <h1>HōmHub</h1>
          <h3>Mortgage Provider's Internet Marketing Solution</h3>
        </div>
        <div className="login_info">
          <div className="existing_user">
            <h3>User Login</h3>

            <form
              action="your_server_endpoint"
              method="POST"
              className="existing_user"
            >
              <input
                className="input_styling"
                type="email"
                name="email"
                placeholder="Email"
                value={email}
              />
              <input
                className="input_styling"
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <PrimaryButton type="submit">Log in</PrimaryButton>
            </form>
            <a>forgot password?</a>
          </div>
          <div className="line"></div>
          <div className="create_user">
            <h3>Create an Account</h3>

            <form
              action="your_server_endpoint"
              method="POST"
              className="create_user"
            >
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="input_styling"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input_styling"
              />
              <input
                type="password"
                name="verify_password"
                placeholder="Verify Password"
                className="input_styling"
              />
              <PrimaryButton>Create User</PrimaryButton>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
