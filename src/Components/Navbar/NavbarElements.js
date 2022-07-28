import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background: #05142E;
  height: 80px;
  display: flex;
  justify-content: space-between;
  margin: 30px;
  border-radius: 30px;
  padding-right: 10px;
  vertical-align:middle;

`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  white-space: nowrap; 
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  padding-right: 20px;
`;

export const NavBtnLink = styled(Link)`
  border-radius: 5px;
  background: #05142E;
  padding: 10px 22px;
  color: #6399f7;
  cursor: pointer;
  text-decoration: none;
  margin-left: 24px;
  &:hover {
    transition: all 0.5s ease-in-out;
    background: #506ea3;
    color: #05142E;
  }
`;