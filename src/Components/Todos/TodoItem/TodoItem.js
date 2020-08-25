import React from "react";
import "./TodoItem.css";

const TodoItem = ({
  id,
  text,
  checked,
  step,
  important,
  date,
  onInfo,
  onToggle,
  onImportant,
}) => (
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
      <span className="date">기한 : {date}</span>
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

export default TodoItem;
