import {
  Todo_ADD,
  Todo_CHECK,
  Todo_IMPORT,
  Todo_REMOVE,
} from "../Actions/index";
import { combineReducers } from "redux";
import { Step_ADD, Step_REMOVE, Step_TOGGLE } from "../Actions/indexStep";

let id = 2;

const initState = {
  current: 0,
  input_text: "",
  todoList: [
    {
      id: 1,
      text: "todolist 반 완료하기",
      checked: false,
      important: false,
      step: [{ _id: 1, _text: "안녕!", _checked: true }],
    },
  ],
};

const data = (state = initState, action) => {
  switch (action.type) {
    case Todo_ADD:
      return Object.assign({}, state, {
        todoList: state.todoList.concat({
          id: id++,
          text: action.text,
          checked: false,
          important: false,
          step: [],
        }),
      });
    case Todo_CHECK:
      return Object.assign({}, state, {
        todoList: state.todoList.map((item) => {
          if (item.id === action.id) {
            item.checked = !item.checked;
          }
          return item;
        }),
      });
    case Todo_IMPORT:
      return Object.assign({}, state, {
        todoList: state.todoList.map((item) => {
          if (item.id === action.id) {
            item.important = !item.important;
          }
          return item;
        }),
      });
    case Todo_REMOVE:
      return Object.assign({}, state, {
        todoList: state.todoList.filter((item) => item.id !== action.id),
      });
    default:
      return state;
  }
};

const stepData = (state = initState, action) => {
  switch (action.type) {
    case Step_ADD:
      return Object.assign({}, state, {
        todoList: state.todoList.map((item) => {
          if (item.id === action.id + 1) {
            item.step = state.todoList[action.id].step.concat({
              _id: state.todoList[action.id].step.length + 1,
              _text: action.text,
              _checked: false,
            });
          }
          return item;
        }),
      });
    case Step_REMOVE:
      return Object.assign({}, state, {
        todoList: state.todoList.map((item) => {
          if (item.id === action.current + 1) {
            item.step = state.todoList[action.current].step.filter(
              (val) => val._id !== action.id
            );
          }
          return item;
        }),
      });
    case Step_TOGGLE:
      return Object.assign({}, state, {
        todoList: state.todoList.map((item) => {
          if (item.id === action.current + 1) {
            item.step = state.todoList[action.current].step.map((val) => {
              if (val._id === action.id) {
                val._checked = !val._checked;
              }
              return val;
            });
          }
          return item;
        }),
      });
    default:
      return state;
  }
};

const App = combineReducers({
  data,
  stepData,
});

export default App;
