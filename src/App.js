import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Todos from "./Components/Todos/Todos";
import Sidebar from "./Components/SideBar/Sidebar";
import Important from "./Components/Important/Important";

const App = () => {
  return (
    <Router>
      <div className="main">
        <Sidebar />
        <Route exact path="/todos" component={Todos} />
        <Route path="/important" component={Important} />
      </div>
    </Router>
  );
};

export default App;
