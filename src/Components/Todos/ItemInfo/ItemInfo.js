import React, { Component } from "react";
import "./ItemInfo.css";
import TodoItem from "../TodoItem/TodoItem";
import StepInfo from "./StepList/StepItem";

class ItemInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step_input: "",
    };
  }
  //단계 추가 Input 변경시 호출함수
  onChange = (e) => {
    this.setState({
      step_input: e.target.value,
    });
  };

  //엔터키 Create 적용(상세 단계)
  onKeyPress = (e) => {
    const { _onCreate } = this.props;
    if (e.key === "Enter") {
      // 엔터키가 눌렸을 때 실행할 내용
      if (e.target.value === "") {
      } else {
        _onCreate(this.state.step_input);
        this.setState({
          step_input: "",
        });
      }
    }
  };
  render() {
    const {
      id,
      text,
      checked,
      step,
      important,
      onToggle,
      onImportant,
      onDelete,
    } = this.props;
    const { _onDelete, _onToggle } = this.props;
    const stepList = this.props.step.map(({ _id, _text, _checked }) =>
      this.props.step.length !== 0 ? (
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
            value={this.state.step_input}
            onChange={this.onChange}
            onKeyPress={this.onKeyPress}
          />
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
  }
}

export default ItemInfo;
