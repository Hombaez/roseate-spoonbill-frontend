import "./App.css";
import { Route, Routes, Link, Navigate, useLocation } from "react-router-dom";
import { useContext, useEffect, React, useState } from "react";

import Home from "./components/Home";
import DealsTab from "./components/DealsTab";
import ConnectionTab from "./components/ConnectionsTab";
import Territory from "./components/Territory";
import Profile from "./components/Profile";
import MainPage from "./components/MainPage";

import Register from "./components/Register";
import Header from "./components/Header";
import { UserContext } from "./context/UserContext";
import Signin from "./components/Signin";

import { isAuthenticated } from "./components/Utils/auth";

//does not allow "secure" pages to be shown when logged in
const PrivateRoute = ({ component: Component, ...rest }) => {
  //checks from auth.js if user is authenticated
  const authenticated = isAuthenticated();

  //if not authenticated, sends them to log in page
  if (!authenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    //if authenticated, send them to home page
    <div>
      <Component />
    </div>
  );
};

function App() {
  //token is the JWT token
  const [token] = useContext(UserContext);

  //locations helps to track the underline onthe nav bar
  const location = useLocation();

  //help to track if user is logged in
  const loggedIn = isAuthenticated();

  return (
    <div className="App">
      <nav>
        <ul>
          <div className="right_side">
            {/* if they are logged in shows home page, conections, etc */}
            {loggedIn && (
              <>
                <li>
                  <Link
                    // if this link is clicked it will underline the title on nav bar
                    className={`links ${
                      location.pathname === "/home" ? "active" : ""
                    }`}
                    to="/home"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className={`links ${
                      location.pathname === "/deals" ? "active" : ""
                    }`}
                    to="/deals"
                  >
                    Deals
                  </Link>
                </li>
                <li>
                  <Link
                    className={`links ${
                      location.pathname === "/connections" ? "active" : ""
                    }`}
                    to="/connections"
                  >
                    Connections
                  </Link>
                </li>
                <li>
                  <Link
                    className={`links ${
                      location.pathname === "/territory" ? "active" : ""
                    }`}
                    to="/territory"
                  >
                    Territory
                  </Link>
                </li>
                <li className="profile_link">
                  <Link
                    className={`links ${
                      location.pathname === "/profile" ? "active" : ""
                    }`}
                    to="/profile"
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <Header />
                </li>
              </>
            )}

            {/* Only show these links when logged out */}
            {!loggedIn && (
              <>
                <li>
                  <Link className="links" to="/">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="links" to="/login">
                    Login
                  </Link>
                </li>
              </>
            )}
          </div>
        </ul>
      </nav>

      <Routes>
        <Route
          path="/login"
          element={
            <>
              <Signin /> <Register />
            </>
          }
        />
        {/* sets the endpoints for each componenet */}
        <Route path="/" element={<MainPage />} />
        <Route path="/home" element={<PrivateRoute component={Home} />} />
        <Route path="/deals" element={<PrivateRoute component={DealsTab} />} />
        <Route
          path="/connections"
          element={<PrivateRoute component={ConnectionTab} />}
        />
        <Route
          path="/territory"
          element={<PrivateRoute component={Territory} />}
        />
        <Route path="/profile" element={<PrivateRoute component={Profile} />} />
      </Routes>
    </div>
  );
}

export default App;
