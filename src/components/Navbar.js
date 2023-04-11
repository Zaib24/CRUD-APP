import React from 'react';
import { AppBar, Toolbar, styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
  background: #111111;
`;

const Tabs = styled(NavLink)`
  font-size: 20px;
  margin-left: 20px;
  color: #ffd700;
  text-decoration: none;
`;
function Navbar() {
  return (
    <div>
      <Header position="static">
        <Toolbar>
          <Tabs to="/">CRUD</Tabs>
          <Tabs to="/all">All Users</Tabs>
          <Tabs to="/add">Add Users</Tabs>
        </Toolbar>
      </Header>
    </div>
  );
}

export default Navbar;
