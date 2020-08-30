import React from "react";
import { TodosWrapper, TodosContainer, TodosHeader } from "../Todos/TodosStyle";
import styled from "styled-components";
import {
  todoAdd,
  todoCheck,
  todoImport,
  todoRemove,
  todoInfo,
  todoDate,
} from "../../Redux/Actions/index";
import { addStep, removeStep, toggleStep } from "../../Redux/Actions/indexStep";
import TodoItem from "../Todos/TodoItem/TodoItem";
import { useTodoState, useTodoDispatch } from "../../Context/TodoContext";
import TodoInput from "../Todos/TodoInput/TodoInput";
import ItemInfo from "../Todos/ItemInfo/ItemInfo";

const TodoListStyle = styled.div`
  flex: 8;
  margin: 8px;
  font-size: 20px;
  overflow: auto;
`;

const Important = () => {
  const state = useTodoState();
  const dispatch = useTodoDispatch();
  const importantList = state.todoList.filter(
    (value) => value.important === true
  );
  const onCreate = (text) => {
    dispatch(todoAdd(text, 1));
  };
  const onToggle = (id) => {
    dispatch(todoCheck(id));
  };
  const onDelete = (id) => {
    dispatch(todoRemove(id));
  };
  const onChangeDate = (text) => {
    dispatch(todoDate(text));
  };
  const onInfo = (id) => {
    dispatch(todoInfo(id, 1));
  };
  const onImportant = (id) => {
    dispatch(todoImport(id));
  };
  const _onDelete = (id) => {
    dispatch(removeStep(id));
  };
  const _onCreate = (text) => {
    dispatch(addStep(text));
  };
  const _onToggle = (id) => {
    dispatch(toggleStep(id));
  };
  const clicks = () => {
    if (importantList.length === 0) {
      return (
        <div
          style={{
            flex: 0.25,
            alignSelf: "center",
            textAlign: "center",
          }}
        >
          오늘 할 일을 추가해보세요!
        </div>
      );
    } else {
      const item = state.todoList[state.current];
      return (
        <ItemInfo
          todoList={item}
          onToggle={onToggle}
          onImportant={onImportant}
          onDelete={onDelete}
          onDateChange={onChangeDate}
          _onDelete={_onDelete}
          _onCreate={_onCreate}
          _onToggle={_onToggle}
        />
      );
    }
  };
  return (
    <TodosWrapper>
      <TodosContainer>
        <TodosHeader>
          <span role="img" aria-label="">
            🔆중요
          </span>
        </TodosHeader>
        <ImportantTodoList
          todoList={importantList}
          onImportant={onImportant}
          onInfo={onInfo}
          onToggle={onToggle}
        />
        <TodoInput onCreate={onCreate} />
      </TodosContainer>
      {clicks()}
    </TodosWrapper>
  );
};

export default Important;

const ImportantTodoList = ({ todoList, onImportant, onInfo, onToggle }) => {
  return (
    <TodoListStyle>
      {todoList.map((item) =>
        item.important ? (
          <TodoItem
            key={item.id}
            todoList={item}
            onImportant={onImportant}
            onInfo={onInfo}
            onToggle={onToggle}
          />
        ) : null
      )}
    </TodoListStyle>
  );
};
