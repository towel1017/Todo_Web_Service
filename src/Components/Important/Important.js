import React, { useState } from "react";
import "../Todos/Todos.css";
import TodoItem from "../Todos/TodoItem/TodoItem";
import ItemInfo from "../Todos/ItemInfo/ItemInfo";
import {
  todoAdd,
  todoCheck,
  todoImport,
  todoRemove,
  todoInfo,
} from "../../Redux/Actions/index";
import { createStore } from "redux";
import reducers from "../../Redux/Reducers/index";
import { addStep, removeStep, toggleStep } from "../../Redux/Actions/indexStep";
import { useCallback } from "react";
//store 연결
const store = createStore(reducers);
const data = store.getState().data;
//DEFAULT 컴포넌트
const Important = () => {
  const [text, setText] = useState(""); //state 선언
  //Redux 적용 부분
  const addTodo = (text) => store.dispatch(todoAdd(text));
  //onChange
  const onChange = useCallback((e) => {
    const { value } = e.target;
    setText(value);
  }, []);
  const list = data.todoList.map(({ id, text, checked, important, step }) => (
    <TodoItem
      key={id}
      id={id}
      text={text}
      checked={checked}
      step={step}
      important={important}
    />
  ));
  //onKeyPress
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      // 엔터키가 눌렸을 때 실행할 내용
      addTodo(text);
      setText("");
    }
  };
  return (
    <div className="todos-wrapper">
      <div className="todo-container">
        <div className="header">
          <span role="img" aria-label="today">
            ⏰
          </span>
          오늘 할 일
        </div>
        <div className="list">{list}</div>
        <input
          className="plus-input"
          placeholder=" + 오늘 까지인 작업 추가하기!"
          value={text}
          onChange={onChange}
          onKeyPress={onKeyPress}
        />
      </div>
      <div
        style={{
          flex: 0.25,
          alignSelf: "center",
          textAlign: "center",
        }}
      >
        오늘 할 일을 추가해보세요!
      </div>
    </div>
  );
};

export default Important;
