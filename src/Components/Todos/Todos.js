import React, { Component } from "react";
import "./Todos.css";
import TodoItem from "./TodoItem/TodoItem";
import ItemInfo from "./ItemInfo/ItemInfo";
import {
  todoAdd,
  todoCheck,
  todoImport,
  todoRemove,
} from "../../Redux/Actions/index";
import { createStore } from "redux";
import reducers from "../../Redux/Reducers/index";
import { addStep, removeStep, toggleStep } from "../../Redux/Actions/indexStep";
//store 연결
const store = createStore(reducers);

class Todos extends Component {
  _id = 4;

  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      input_text: "",
    };
  }

  //추가(상세 단계) Redux 적용 완료 8/19
  _onCreate = (step_input) => {
    this.stepAdd(this.state.current, step_input);
    this.setState({});
  };

  //텍스트 변경 (Redux 완료) 8/19
  onChange = (e) => {
    this.setState({
      input_text: e.target.value,
    });
  };

  //엔터키 Create 적용 (Redux 완료) 8/19
  onKeyPress = (e) => {
    if (e.key === "Enter") {
      // 엔터키가 눌렸을 때 실행할 내용
      this.addTodo();
      this.setState({
        input_text: "",
      });
    }
  };

  //삭제 (todoList-item) Redux 적용 완료 8/19
  onDelete = (id) => {
    this.removeTodo(id);
    this.setState({});
  };
  //삭제(아이템 상세정보 내에서 단계 삭제) Redux 적용 완료 8/19
  _onDelete = (stepid) => {
    this.stepRemove(this.state.current, stepid);
    this.setState({});
  };

  //완료 (onToggle Redux 완료) 8/19
  onToggle = (id) => {
    this.checkTodo(id);
    this.setState({});
  };

  //상세 단계 완료 (onToggle)
  _onToggle = (id) => {
    this.stepToggle(this.state.current, id);
    this.setState({});
  };

  //중요 Redux 적용 완료 8/19
  onImportant = (id) => {
    this.importTodo(id);
    this.setState({});
  };

  //상세 정보 보기 Redux 적용 완료 8/19
  onInfo = (id) => {
    this.setState({
      current: store.getState().data.todoList.findIndex((val) => val.id === id),
    });
  };

  render() {
    console.log("render");
    const initialState = store.getState().data;
    const list = initialState.todoList.map(
      ({ id, text, checked, important, step }) => (
        <TodoItem
          key={id}
          id={id}
          text={text}
          checked={checked}
          step={step}
          important={important}
          onImportant={this.onImportant}
          onInfo={this.onInfo}
          onToggle={this.onToggle}
        />
      )
    );

    const clicks = () => {
      if (initialState.todoList.length === 0) {
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
        const { id, text, checked, important, step } = initialState.todoList[
          this.state.current
        ];
        return (
          <ItemInfo
            id={id}
            text={text}
            checked={checked}
            important={important}
            onToggle={this.onToggle}
            onImportant={this.onImportant}
            step={step}
            onDelete={this.onDelete}
            _onDelete={this._onDelete}
            _onCreate={this._onCreate}
            _onToggle={this._onToggle}
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
            value={this.state.input_text}
            onChange={this.onChange}
            onKeyPress={this.onKeyPress}
            store={store}
          />
        </div>
        {clicks()}
      </div>
    );
  }
  //Redux 적용 부분
  addTodo = () => store.dispatch(todoAdd(this.state.input_text));
  checkTodo = (id) => store.dispatch(todoCheck(id));
  importTodo = (id) => store.dispatch(todoImport(id));
  removeTodo = (id) => store.dispatch(todoRemove(id));
  stepAdd = (id, text) => store.dispatch(addStep(id, text));
  stepRemove = (current, id) => store.dispatch(removeStep(current, id));
  stepToggle = (current, id) => store.dispatch(toggleStep(current, id));
}

export default Todos;
