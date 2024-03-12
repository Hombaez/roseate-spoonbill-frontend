import "./App.css";
import { Route, Routes, Link } from "react-router-dom";

import LogIn from "./components/LogIn";
import Home from "./components/Home";
import DealsTab from "./components/DealsTab";
import ConnectionTab from "./components/ConnectionsTab";
import Territory from "./components/Territory";
import Profile from "./components/Profile";

import profile_icon from "../src/images/profile_icon.png";

function App() {
  return (
    <div className="App">
      {/* write code for if person is logged in or not to change what the nav bar looks like */}
      <ul>
        <div className="right_side">
          <li>
            <Link className="links" to="/home">
              Home
            </Link>
          </li>
          <li>
            <Link className="links" to="/deals">
              Deals
            </Link>
          </li>
          <li>
            <Link className="links" to="/connections">
              Connections
            </Link>
          </li>
          <li>
            <Link className="links" to="/territory">
              Territory
            </Link>
          </li>
          <li className="profile_link">
            <Link className="links" to="/profile">
              Profile
            </Link>
            <img
              src={profile_icon}
              alt="human in a circle with a black background"
              id="profile_icon"
            />
          </li>
        </div>
      </ul>

      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/deals" element={<DealsTab />} />
        <Route path="/connections" element={<ConnectionTab />} />
        <Route path="/territory" element={<Territory />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
