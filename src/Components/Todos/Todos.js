import React, { useState, useReducer } from "react";
import "./Todos.css";
import TodoItem from "./TodoItem/TodoItem";
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

const Todos = () => {
  const [input, setInput] = useState("");
  const [state, dispatch] = useReducer(reducer, initState);
  /**
  추가(상세 단계) Redux 적용 완료 8/19
  _onCreate = (step_input) => {
    stepAdd(step_input);
    this.setState({});
    console.log(store.getState().data);
  };

  텍스트 변경 (Redux 완료) 8/19
  onChange = (e) => {
    this.setState({
      input_text: e.target.value,
    });
  };

  엔터키 Create 적용 (Redux 완료) 8/19
  onKeyPress = (e) => {
    if (e.key === "Enter") {
      // 엔터키가 눌렸을 때 실행할 내용
      this.addTodo();
      this.setState({
        input_text: "",
      });
    }
  };

  삭제 (todoList-item) Redux 적용 완료 8/19
  onDelete = (id) => {
    this.removeTodo(id);
    this.setState({
      current: 0,
    });
  };
  삭제(아이템 상세정보 내에서 단계 삭제) Redux 적용 완료 8/19
  _onDelete = (stepid) => {
    this.stepRemove(stepid);
    this.setState({});
  };

  완료 (onToggle Redux 완료) 8/19
  onToggle = (id) => {
    this.checkTodo(id);
    this.setState({});
  };

  상세 단계 완료 (onToggle)
  _onToggle = (id) => {
    this.stepToggle(id);
    this.setState({});
  };

  중요 Redux 적용 완료 8/19
  onImportant = (id) => {
    this.importTodo(id);
    this.setState({});
  };

  상세 정보 보기 Redux 적용 완료 8/19
  onInfo = (id) => {
    this.infoTodo(id);
    this.setState({
      current: store.getState().data.todoList.findIndex((val) => val.id === id),
    });
  };
  기한 변경
  onChangeDate = (num) => {
    this.dateTodo(num);
    this.setState({});
  };
*/

  //onChange
  const onChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      // 엔터키가 눌렸을 때 실행할 내용
      dispatch(todoAdd(input));
      setInput("");
    }
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
  const list = state.todoList.map(
    ({ id, text, checked, important, date, step }) => (
      <TodoItem
        key={id}
        id={id}
        text={text}
        checked={checked}
        date={date}
        step={step}
        important={important}
        onImportant={onImportant}
        onInfo={onInfo}
        onToggle={onToggle}
      />
    )
  );

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
      const { id, text, checked, important, date, step } = state.todoList[
        state.current
      ];
      return (
        <ItemInfo
          id={id}
          text={text}
          checked={checked}
          important={important}
          date={date}
          onToggle={onToggle}
          onImportant={onImportant}
          step={step}
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
          name="todo_val"
          placeholder=" + 오늘 까지인 작업 추가하기!"
          value={input}
          onChange={onChange}
          onKeyPress={onKeyPress}
        />
      </div>
      {clicks()}
    </div>
  );
};

export default Todos;
