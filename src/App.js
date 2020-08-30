import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Todos from "./Components/Todos/Todos";
import Sidebar from "./Components/SideBar/Sidebar";
import Important from "./Components/Important/Important";
import { TodoProvider } from "./Context/TodoContext";
const App = () => {
  return (
    <Router>
      <TodoProvider>
        <div className="main">
          <Sidebar />
          <Route exact path="/todos" component={Todos} />
          <Route path="/important" component={Important} />
        </div>
      </TodoProvider>
    </Router>
  );
};

export default App;
