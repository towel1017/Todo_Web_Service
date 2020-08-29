import {
  Todo_ADD,
  Todo_CHECK,
  Todo_IMPORT,
  Todo_REMOVE,
  Todo_INFO,
  Todo_DATE,
} from "../Actions/index";
import { Step_ADD, Step_REMOVE, Step_TOGGLE } from "../Actions/indexStep";

let id = 2;

const initState = {
  current: 0,
  todoList: [
    {
      id: 1,
      text: "todolist 반 완료하기",
      checked: false,
      important: false,
      date: "오늘",
      step: [{ _id: 1, _text: "안녕!", _checked: true }],
    },
  ],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case Todo_ADD:
      return Object.assign({}, state, {
        todoList: state.todoList.concat({
          id: id++,
          text: action.text,
          checked: false,
          important: false,
          date: "오늘",
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
        current: 0,
      });
    case Todo_INFO:
      return Object.assign({}, state, {
        current: state.todoList.findIndex((item) => item.id === action.id),
      });
    case Step_ADD:
      console.log(state);
      return Object.assign({}, state, {
        todoList: state.todoList.map((item) => {
          if (item.id === state.todoList[state.current].id) {
            item.step = state.todoList[state.current].step.concat({
              _id: state.todoList[state.current].step.length + 1,
              _text: action.text,
              _checked: false,
            });
          }
          return item;
        }),
      });
    case Step_REMOVE:
      console.log(state.current);
      return Object.assign({}, state, {
        todoList: state.todoList.map((item) => {
          if (item.id === state.todoList[state.current].id) {
            item.step = state.todoList[state.current].step.filter(
              (val) => val._id !== action.id
            );
          }
          return item;
        }),
      });
    case Step_TOGGLE:
      return Object.assign({}, state, {
        todoList: state.todoList.map((item) => {
          if (item.id === state.todoList[state.current].id) {
            item.step = state.todoList[state.current].step.map((val) => {
              if (val._id === action.id) {
                val._checked = !val._checked;
              }
              return val;
            });
          }
          return item;
        }),
      });
    case Todo_DATE:
      return Object.assign({}, state, {
        todoList: state.todoList.map((item) => {
          if (item.id === state.todoList[state.current].id) {
            item.date = action.text;
          }
          return item;
        }),
      });
    default:
      return state;
  }
};

export { initState, reducer };
