import styled from "styled-components";
export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid lightslategray;
  border-radius: 5px;
  padding: 5px;
  margin: 8px;
  span.check-mark {
    flex: 0.1;
    color: lightgreen;
  }
`;

export const DeleteButton = styled.div`
  flex: 0.1;
  font-size: 18px;
`;

export const InfoBox = styled.div`
  flex: 10;
  word-break: break-all;
  span.todo-text {
    color: white;
    font-size: 18px;
    padding-left: 12px;
    ${(props) => props.checked && "text-decoration: line-through; color: gray;"}
  }
  span.date {
    margin-left: 12px;
    color: gray;
    font-size: 14px;
  }
`;
