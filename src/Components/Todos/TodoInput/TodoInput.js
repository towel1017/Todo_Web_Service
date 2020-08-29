import React from "react";
import { useState } from "react";
import { useCallback } from "react";
import styled from "styled-components";

const TodoInputStyle = styled.input`
  border-radius: 5px;
  flex: 0.4;
  margin: 8px;
  font-size: 18px;
`;

const TodoInput = ({ onCreate }) => {
  const [input, setInput] = useState("");

  const onChange = useCallback((e) => {
    const { value } = e.target;
    setInput(value);
  }, []);
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      // 엔터키가 눌렸을 때 실행할 내용
      onCreate(input);
      setInput("");
    }
  };
  return (
    <TodoInputStyle
      className="plus-input"
      name="todo_val"
      placeholder=" + 오늘 까지인 작업 추가하기!"
      value={input}
      onChange={onChange}
      onKeyPress={onKeyPress}
    />
  );
};
export default TodoInput;
