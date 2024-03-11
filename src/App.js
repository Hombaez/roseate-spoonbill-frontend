import "./App.css";
import { Route, Switch } from "react-router-dom";

import LogIn from "./components/LogIn";
import Home from "./components/Home";
import DealsTab from "./components/DealsTab";
import ConnectionTab from "./components/ConnectionsTab";
import Territory from "./components/Territory";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={LogIn} />
        <Route path="/home" component={Home} />
        <Route path="/deals" component={DealsTab} />
        <Route path="/connections" component={ConnectionTab} />
        <Route path="/territory" component={Territory} />
        <Route path="/profile" component={Profile} />
      </Switch>
      <div className="App">
        <h1>App</h1>
      </div>
    </>
  );
}

export default App;
