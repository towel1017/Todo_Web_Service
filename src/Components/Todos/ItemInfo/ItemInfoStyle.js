import styled, { css } from "styled-components";

export const InfoWrapper = styled.div`
  flex: 0.25;
  border-left: 2px solid rgb(26, 29, 32);
  overflow: auto;
`;

export const InfoItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  overflow: auto;
`;

export const SelectedItem = styled.div`
  flex: 1;
  margin: 2px;
`;

export const StepList = styled.div`
  overflow: auto;
`;

export const StepInput = styled.input`
  border-radius: 5px;
  flex: 0.4;
  margin: 8px;
  font-size: 18px;
`;
export const DatePicker = styled.div`
  padding: 8px;
  span {
    color: rgb(146, 146, 146);
  }
  &:hover {
    background-color: rgba(106, 112, 119, 0.411);
  }
`;

export const PickerItems = styled.div`
  border: 1px solid rgb(117, 117, 117);
  margin: 5px;
  ${(props) =>
    !props.open &&
    css`
      height: 0;
      opacity: 0;
      overflow: hidden;
    `}
  div {
    color: rgba(141, 141, 141, 0.932);
    padding: 3px;
  }
  div:hover {
    background-color: rgba(106, 112, 119, 0.411);
  }
`;

export const DeletedButton = styled.div`
  border-top: 2px solid rgb(106, 112, 119);
  padding: 8px;
  span {
    color: rgb(230, 99, 99);
    font-size: 23px;
  }
  &:hover {
    background-color: rgba(106, 112, 119, 0.411);
  }
`;
