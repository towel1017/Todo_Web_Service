import React, { createContext, useContext } from "react";
import { reducer, initState } from "../Redux/Reducers/index";
import { useReducer } from "react";
import { useRef } from "react";

const TodoStateContext = createContext(null);
const TodoDispatchContext = createContext(null);
const NextIdContext = createContext(null);

export const TodoProvider = ({ children }) => {
  const [state, redux] = useReducer(reducer, initState);
  const nextId = useRef(2);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={redux}>
        <NextIdContext.Provider value={nextId}>
          {children}
        </NextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
};

export function useTodoState() {
  return useContext(TodoStateContext);
}

export function useTodoDispatch() {
  return useContext(TodoDispatchContext);
}

export function useTodoNextId() {
  return useContext(NextIdContext);
}
