import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/options">Options</NavLink>
          <NavLink to="/searchbyclass">Search By Class</NavLink>
          <NavLink to="/searchbyyear">Search By Year</NavLink>
       </div>
    );
}
 
export default Navigation;