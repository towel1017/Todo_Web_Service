import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SideBarWrapper = styled.div`
  flex: 1.3;
  background-color: rgb(52, 60, 68);
`;
const LinkItem = styled.div`
  margin: 8px;
  span {
    color: rgb(231, 230, 230);
  }
`;
const Sidebar = () => {
  return (
    <SideBarWrapper>
      <LinkItem>
        <Link style={{ textDecoration: "none" }} to="/todos">
          <span role="img" aria-label="today">
            ⏰ 오늘 할 일
          </span>
        </Link>
      </LinkItem>
      <LinkItem>
        <Link style={{ textDecoration: "none" }} to="/important">
          <span role="img" aria-label="important">
            🔆중요
          </span>
        </Link>
      </LinkItem>
      <LinkItem>
        <Link style={{ textDecoration: "none" }} to="/calender">
          <span role="img" aria-label="calender">
            📅 캘린더
          </span>
        </Link>
      </LinkItem>
    </SideBarWrapper>
  );
};
export default Sidebar;
