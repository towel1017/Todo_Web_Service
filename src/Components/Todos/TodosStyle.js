import styled from "styled-components";

export const TodosWrapper = styled.div`
  flex: 8;
  background-color: #252525;
  color: white;
  overflow: auto;
  display: flex;
  flex-direction: row;
`;
export const TodosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  height: 100%;
  flex: 0.8;
`;
export const TodosHeader = styled.div`
  flex: 0.4;
  border-bottom: 0.5px solid lightgray;
  margin: 8px;
  font-size: 21px;
`;
