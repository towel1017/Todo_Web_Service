import React from "react";
import {
  ItemWrapper,
  DeleteButton,
  InfoBox,
  TodoText,
} from "../../TodoItem/TodoItemStyle";

const StepInfo = ({ id, text, checked, _onToggle, _onDelete }) => {
  return (
    <ItemWrapper>
      <DeleteButton
        role="img"
        aria-label="delete"
        onClick={(e) => {
          e.preventDefault();
          _onToggle(id);
        }}
      >
        {checked ? "✅" : "⬛"}
      </DeleteButton>
      <InfoBox>
        <TodoText checked={checked}>{text}</TodoText>
      </InfoBox>
      <DeleteButton>
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
      </DeleteButton>
    </ItemWrapper>
  );
};

export default StepInfo;
