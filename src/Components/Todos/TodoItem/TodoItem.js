import React, { Component } from "react";
import "./TodoItem.css";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { id, text, checked, step, important } = this.props;
    const { onInfo, onToggle, onImportant } = this.props;
    return (
      <div className="item-wrapper">
        <div className="delete">
          <span
            role="img"
            aria-label="delete"
            onClick={(e) => {
              e.stopPropagation();
              onToggle(id);
            }}
          >
            {checked ? "✅" : "⬛"}
          </span>
        </div>
        <div
          onClick={(e) => {
            e.preventDefault();
            onInfo(id);
          }}
          className="textbox"
        >
          <span className={`todo-text ${checked && "checked"}`}>{text}</span>
          <br />
          <span className="date">기한 : 오늘</span>
          <span className="date">
            단계 : {step.filter((val) => val._checked === true).length}/
            {step.length}
          </span>
        </div>
        <span
          role="img"
          aria-label="important"
          className="check-mark"
          onClick={(e) => {
            e.preventDefault();
            onImportant(id);
          }}
        >
          {important ? "🔆" : "⚫"}
        </span>
      </div>
    );
  }
}

export default TodoItem;
