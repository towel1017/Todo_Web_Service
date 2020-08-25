import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Todos from "./Components/Todos/Todos";
import Sidebar from "./Components/SideBar/Sidebar";
import Important from "./Components/Important/Important";
import reducers from "./Redux/Reducers/index";
import { createStore } from "redux";

const store = createStore(reducers);
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="main">
          <Sidebar />
          <Route exact path="/todos" component={Todos} />
          <Route path="/important" component={Important} />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
