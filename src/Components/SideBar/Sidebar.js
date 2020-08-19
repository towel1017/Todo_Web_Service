import React, { Component } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="sidebar-wrapper">
        <div className="link router-link">
          <Link style={{ textDecoration: "none" }} to="/todos">
            <span role="img" aria-label="today">
              ⏰ 오늘 할 일
            </span>
          </Link>
        </div>
        <div className="link important-link">
          <Link style={{ textDecoration: "none" }} to="/important">
            <span role="img" aria-label="important">
              🔆중요
            </span>
          </Link>
        </div>
        <div className="link calender-link">
          <Link style={{ textDecoration: "none" }} to="/calender">
            <span role="img" aria-label="calender">
              📅 캘린더
            </span>
          </Link>
        </div>
      </div>
    );
  }
}
export default Sidebar;
