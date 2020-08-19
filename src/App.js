import React, { Component } from "react";
import "./App.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Todos from "./Components/Todos/Todos";
import Sidebar from "./Components/SideBar/Sidebar";
import Important from "./Components/Important/Important";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="main">
        <Router>
          <Sidebar />
          <Route exact path="/todos" component={Todos} />
          <Route exact path="/important" component={Important} />
        </Router>
      </div>
    );
  }
}

export default App;
