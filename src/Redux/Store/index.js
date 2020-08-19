import { todoAdd } from "../Actions/index";
import reducers from "../Reducers/index";
import { createStore } from "redux";

let store = createStore(reducers, window.STATE_FROM_SERVER);

console.log(store.getState());

store.dispatch(todoAdd("테스트 케이스 1"));

export default store;
