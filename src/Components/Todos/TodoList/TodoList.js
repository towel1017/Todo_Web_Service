import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import styled from "styled-components";

const TodoListStyle = styled.div`
  flex: 8;
  margin: 8px;
  font-size: 20px;
  overflow: auto;
`;

const TodoList = ({ todoList, onImportant, onInfo, onToggle }) => {
  return (
    <TodoListStyle>
      {todoList.map((item) => (
        <TodoItem
          key={item.id}
          todoList={item}
          onImportant={onImportant}
          onInfo={onInfo}
          onToggle={onToggle}
        />
      ))}
    </TodoListStyle>
  );
};

export default TodoList;
