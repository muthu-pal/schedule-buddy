
 import 'bootstrap/dist/css/bootstrap.css';


import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const DropdownNav = (props) => {
  return (
    <div>
      <p>List Based</p>
      <Nav vertical className="ml-auto">
        <NavItem>
        <NavLink href="/">Home</NavLink>
        </NavItem>
        <NavItem>
        <NavLink href="/options">Options</NavLink>
        </NavItem>
        <NavItem>
        <NavLink href="/searchbyclass">Search By Class</NavLink>
        </NavItem>
        <NavItem>
        <NavLink href="/searchbyyear">Search By Year</NavLink>
        </NavItem>
      </Nav>
      
    </div>
  );
}

export default DropdownNav;
