import React, { Component } from "react";
import "../../TodoItem/TodoItem.css";

class StepInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { id, text, checked, _onToggle, _onDelete } = this.props;
    return (
      <div className="item-wrapper">
        <div className="delete">
          <span
            role="img"
            aria-label="delete"
            onClick={(e) => {
              e.preventDefault();
              _onToggle(id);
            }}
          >
            {checked ? "✅" : "⬛"}
          </span>
        </div>
        <div className="textbox" style={{ marginTop: "5px" }}>
          <span className={`todo-text ${checked && "checked"}`}>{text}</span>
        </div>
        <div>
          <span
            role="img"
            aria-label="delete"
            className="check-mark"
            onClick={(e) => {
              e.stopPropagation();
              _onDelete(id);
            }}
          >
            ❌
          </span>
        </div>
      </div>
    );
  }
}

export default StepInfo;
