import React from 'react';
import { Outlet } from 'react-router-dom';
import { Nav, NavItem } from './Navigation.styled';

export default function Navigation() {
  return (
    <Nav>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/movies">Movies</NavItem>
      <hr />
      <Outlet />
    </Nav>
  );
}
