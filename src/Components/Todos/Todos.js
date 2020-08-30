import React from "react";
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
import TodoInput from "./TodoInput/TodoInput";
import TodoList from "./TodoList/TodoList";
import { useTodoDispatch, useTodoState } from "../../Context/TodoContext";
import { TodosWrapper, TodosContainer, TodosHeader } from "./TodosStyle";

const Todos = () => {
  const dispatch = useTodoDispatch();
  const state = useTodoState();

  const onCreate = (text) => {
    dispatch(todoAdd(text, 0));
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
    dispatch(todoInfo(id, 0));
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
        <TodosHeader>
          <span role="img" aria-label="">
            ⏰ 오늘 할 일
          </span>
        </TodosHeader>
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
