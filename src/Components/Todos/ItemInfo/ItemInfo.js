import React from "react";
import "./ItemInfo.css";
import TodoItem from "../TodoItem/TodoItem";
import StepInfo from "./StepList/StepItem";
import { useState } from "react";

const ItemInfo = ({
  id,
  text,
  checked,
  step,
  important,
  date,
  onToggle,
  onImportant,
  onDelete,
  onDateChange,
  _onDelete,
  _onToggle,
  _onCreate,
}) => {
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);

  //Animation
  const onMenuOpen = () => {
    setOpen(!open);
  };

  //단계 추가 Input 변경시 호출함수
  const onChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  //엔터키 Create 적용(상세 단계)
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      // 엔터키가 눌렸을 때 실행할 내용
      if (e.target.value === "") {
      } else {
        _onCreate(input);
        setInput("");
      }
    }
  };
  const onChangeDate = (text) => {
    onDateChange(text);
  };
  const stepList = step.map(({ _id, _text, _checked }) =>
    step.length !== 0 ? (
      <StepInfo
        id={_id}
        key={_id}
        text={_text}
        checked={_checked}
        _onToggle={_onToggle}
        _onDelete={_onDelete}
      />
    ) : null
  );
  return (
    <div className="info-wrapper">
      <div className="info-items">
        <div className="item info">
          <TodoItem
            id={id}
            text={text}
            checked={checked}
            step={step}
            important={important}
            date={date}
            onToggle={onToggle}
            onInfo={() => {}}
            onImportant={onImportant}
          />
        </div>
        <div className="step">{stepList}</div>
        <input
          className="step-input"
          name="todo_val"
          placeholder=" + 단계 추가하기!"
          value={input}
          onChange={onChange}
          onKeyPress={onKeyPress}
        />
        <div className="calender" onClick={onMenuOpen}>
          <span role="img" aria-label="calender">
            📅 기한
          </span>
        </div>
        <div className={`checkBox ${open ? "" : "close"}`}>
          <div
            onClick={(e) => {
              e.stopPropagation();
              onChangeDate("오늘");
            }}
          >
            오늘
          </div>
          <hr />
          <div
            onClick={(e) => {
              e.stopPropagation();
              onChangeDate("내일");
            }}
          >
            내일
          </div>
          <hr />
          <div
            onClick={(e) => {
              e.stopPropagation();
              onChangeDate("이번 주");
            }}
          >
            이번 주
          </div>
          <hr />
          <div>기한 선택</div>
        </div>
        <div
          className="item deleted"
          onClick={(e) => {
            e.preventDefault();
            onDelete(id);
          }}
        >
          <span role="img" aria-label="delete">
            🗑 삭제
          </span>
        </div>
      </div>
    </div>
  );
};

export default ItemInfo;
