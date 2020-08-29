import React, { useReducer } from "react";
import "./Todos.css";
import ItemInfo from "./ItemInfo/ItemInfo";
import {
  todoAdd,
  todoCheck,
  todoImport,
  todoRemove,
  todoInfo,
  todoDate,
} from "../../Redux/Actions/index";
import { addStep, removeStep, toggleStep } from "../../Redux/Actions/indexStep";
import { initState, reducer } from "../../Redux/Reducers/index";
import TodoInput from "./TodoInput/TodoInput";
import TodoList from "./TodoList/TodoList";
import styled from "styled-components";

const TodosWrapper = styled.div`
  flex: 8;
  background-color: #252525;
  color: white;
  overflow: auto;
  display: flex;
  flex-direction: row;
`;
const TodosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  height: 100%;
  flex: 0.8;
`;
const TodosHeader = styled.div`
  flex: 0.4;
  border-bottom: 0.5px solid lightgray;
  margin: 8px;
  font-size: 21px;
  span {
    text-decoration: none;
    color: black;
    font-size: 21px;
  }
`;
const Todos = () => {
  const [state, dispatch] = useReducer(reducer, initState);

  const onCreate = (text) => {
    dispatch(todoAdd(text));
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
    dispatch(todoInfo(id));
  };
  //onImportant
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
    if (state.todoList.length === 0) {
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
        <TodosHeader role="img">⏰ 오늘 할 일</TodosHeader>
        <TodoList
          todoList={state.todoList}
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

export default Todos;
