import "./LogIn.css";

import React from "react";

import PrimaryButton from "./UI/buttons/PrimaryButton";

function LogIn() {
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
                type="text"
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
              <PrimaryButton>Log in</PrimaryButton>
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
