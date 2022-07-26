import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    background: #05142e;
    height: 85px;
    display: flex;
    padding: 0 1rem;
    margin: 30px;
    border-radius: 30px;

`;

export const NavMenu = styled.div  `
    display: flex;
    white-space: nowrap;
    padding-left: 100px;
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
`

export const NavBtnLink = styled(Link)`
  border-radius: 5px;
  background: #f56c6c;
  padding: 10px 22px;
  color: #6e2020;
  cursor: pointer;
  text-decoration: none;
  margin-left: 24px;
  &:hover {
    transition: all 0.3s ease-in-out;
    background: #f7a3a3;
    color: #6e2020;
  }
`;