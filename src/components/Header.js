import { React, useContext } from "react";

import { UserContext } from "../context/UserContext";

const Header = ({ title }) => {
  const [token, setToken] = useContext(UserContext);

  const handleLogout = () => {
    setToken(null);
  };

  return (
    <div>
      <h1>{title}</h1>
      {token && <button onClick={handleLogout}>log out</button>}
    </div>
  );
};

export default Header;
