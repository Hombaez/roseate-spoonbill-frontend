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

const PrivateRoute = ({ component: Component, ...rest }) => {
  const authenticated = isAuthenticated();

  console.log("is authenticated?!", authenticated);

  if (!authenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div>
      <Component />
    </div>
  );
};

function App() {
  const [token] = useContext(UserContext);
  const location = useLocation();
  const loggedIn = isAuthenticated();

  return (
    <div className="App">
      <nav>
        <ul>
          <div className="right_side">
            {loggedIn && (
              <>
                <li>
                  <Link
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

      {token ? (
        <div>
          <h1>woo! logged in</h1>
        </div>
      ) : (
        <div>
          <h1>you are NOTTTTT logged in</h1>
        </div>
      )}

      <Routes>
        <Route
          path="/login"
          element={
            <>
              <Signin /> <Register />
            </>
          }
        />

        <Route path="/" element={<MainPage />} />
        <Route
          path="/home"
          // element={<Home />}
          element={<PrivateRoute component={Home} />}
        />
        <Route
          path="/deals"
          // element={<DealsTab />}
          element={<PrivateRoute component={DealsTab} />}
        />
        <Route
          path="/connections"
          // element={<ConnectionTab />}
          element={<PrivateRoute component={ConnectionTab} />}
        />
        <Route
          path="/territory"
          // element={<Territory />}
          element={<PrivateRoute component={Territory} />}
        />
        <Route
          path="/profile"
          // element={<Profile />}
          element={<PrivateRoute component={Profile} />}
        />
      </Routes>
    </div>
  );
}

export default App;
