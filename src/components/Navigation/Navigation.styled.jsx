import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Nav = styled.nav`
  padding: 20px;
`;
export const NavItem = styled(NavLink)`
  padding-right: 10px;
  text-decoration: none;
  font-size: 20px;
  color: red;

  &.active {
    composes: NavItem;
    color: black;
  }
`;
