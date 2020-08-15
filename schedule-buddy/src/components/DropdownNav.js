
 import 'bootstrap/dist/css/bootstrap.css';


import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const DropdownNav = (props) => {
  return (
    <div>
      <p>List Based</p>
      <Nav vertical className="ml-auto">
        <NavItem>
        <NavLink href="/"><h3 style={{fontFamily: 'Poligon', fontSize: '18px'}}>Home</h3></NavLink>
        </NavItem>
        <NavItem>
        <NavLink href="/options"><h3 style={{fontFamily: 'Poligon', fontSize: '18px'}}>Options</h3></NavLink>
        </NavItem>
        <NavItem>
        <NavLink href="/searchbyclass"><h3 style={{fontFamily: 'Poligon', fontSize: '18px'}}>Search by Class</h3></NavLink>
        </NavItem>
        <NavItem>
        <NavLink href="/searchbyyear"><h3 style={{fontFamily: 'Poligon', fontSize: '18px'}}>Search by Year</h3></NavLink>
        </NavItem>
      </Nav>
      
    </div>
  );
}

export default DropdownNav;
