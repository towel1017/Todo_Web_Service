import React from "react";
import { ItemWrapper, DeleteButton, InfoBox } from "./TodoItemStyle";

const TodoItem = ({ todoList, onInfo, onToggle, onImportant }) => {
  const { id, text, checked, step, important, date } = todoList;
  return (
    <ItemWrapper>
      <DeleteButton>
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
      </DeleteButton>
      <InfoBox
        onClick={(e) => {
          e.preventDefault();
          onInfo(id);
        }}
        checked={checked}
      >
        <span className="todo-text">{text}</span>
        <br />
        <span className="date">기한 : {date}</span>
        <span className="date">
          단계 : {step.filter((val) => val._checked === true).length}/
          {step.length}
        </span>
      </InfoBox>
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
    </ItemWrapper>
  );
};

export default TodoItem;
