import React from "react";
import {
  InfoWrapper,
  SelectedItem,
  InfoItems,
  StepList,
  StepInput,
  DatePicker,
  PickerItems,
  DeletedButton,
} from "./ItemInfoStyle";
import TodoItem from "../TodoItem/TodoItem";
import StepInfo from "./StepList/StepItem";
import { useState } from "react";

const ItemInfo = ({
  todoList,
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
  const { id, step } = todoList;
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
  const dateArr = ["오늘", "내일", "이번 주"];
  const dateList = dateArr.map((date) => (
    <>
      <div
        onClick={(e) => {
          e.stopPropagation();
          onChangeDate(date);
        }}
      >
        {date}
      </div>
      <hr />
    </>
  ));
  return (
    <InfoWrapper>
      <InfoItems>
        <SelectedItem>
          <TodoItem
            todoList={todoList}
            onToggle={onToggle}
            onImportant={onImportant}
          />
        </SelectedItem>
        <StepList>{stepList}</StepList>
        <StepInput
          name="todo_val"
          placeholder=" + 단계 추가하기!"
          value={input}
          onChange={onChange}
          onKeyPress={onKeyPress}
        />
        <DatePicker onClick={onMenuOpen}>
          <span role="img" aria-label="calender">
            📅 기한
          </span>
        </DatePicker>
        <PickerItems open={open}>
          {dateList}
          <div>기한 선택</div>
        </PickerItems>
        <DeletedButton
          onClick={(e) => {
            e.preventDefault();
            onDelete(id);
          }}
        >
          <span role="img" aria-label="delete">
            🗑 삭제
          </span>
        </DeletedButton>
      </InfoItems>
    </InfoWrapper>
  );
};

export default React.memo(ItemInfo);
