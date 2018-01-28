import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem, MenuItem } from 'react-bootstrap';

export default function MyNavbar() {
  return (
    // <ul className='navbar'>
    //     <li>
    //         <NavLink exact activeClassName='active' to='/'>
    //             Home
    //         </NavLink>
    //     </li>
    //     <li>
    //         <NavLink activeClassName='active' to='/experience'>
    //             Experience
    //         </NavLink>
    //     </li>
    //     <li>
    //         <NavLink activeClassName='active' to='/education'>
    //             Education
    //         </NavLink>
    //     </li>
    // </ul>
    <Navbar inverse collapseOnSelect className="Header">
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">Agustinus Deddy</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        {/* <Nav>
          <NavItem eventKey={1} href="#">
            Link
          </NavItem>
          <NavItem eventKey={2} href="#">
            Link
          </NavItem>
          <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>Separated link</MenuItem>
          </NavDropdown>
        </Nav> */}
        <Nav pullRight>
          <NavItem eventKey={1} href="/about">
            About
          </NavItem>
          <NavItem eventKey={2} href="/experiences">
            Experience
          </NavItem>
          <NavItem eventKey={3} href="/educations">
            Education
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
