import React from "react";
import {
  ItemWrapper,
  DeleteButton,
  InfoBox,
  TodoText,
  TodoInfo,
  Important,
} from "./TodoItemStyle";

const TodoItem = ({ todoList, onInfo, onToggle, onImportant }) => {
  const { id, text, checked, step, important, date } = todoList;
  return (
    <ItemWrapper>
      <DeleteButton
        role="img"
        aria-label="delete"
        onClick={(e) => {
          e.stopPropagation();
          onToggle(id);
        }}
      >
        {checked ? "✅" : "⬛"}
      </DeleteButton>
      <InfoBox
        onClick={(e) => {
          e.preventDefault();
          onInfo(id);
        }}
        checked={checked}
      >
        <TodoText>{text}</TodoText>
        <br />
        <TodoInfo>기한 : {date}</TodoInfo>
        <TodoInfo>
          단계 : {step.filter((val) => val._checked === true).length}/
          {step.length}
        </TodoInfo>
      </InfoBox>
      <Important
        role="img"
        onClick={(e) => {
          e.preventDefault();
          onImportant(id);
        }}
      >
        {important ? "🔆" : "⚫"}
      </Important>
    </ItemWrapper>
  );
};

export default TodoItem;
