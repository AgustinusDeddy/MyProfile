import React, { Component } from "react";
// import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem, MenuItem } from "react-bootstrap";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom'
import {IndexLinkContainer, LinkContainer} from 'react-router-bootstrap'

export default function MyNavbar() {
  return (

    <Navbar inverse collapseOnSelect className="Header">
      <Navbar.Header>
      <Link to='/' className='navbar-brand'>Agustinus Deddy</Link>
      {/* <IndexLinkContainer to="/" activeClassName="active">
        <Navbar.Brand>
          Agustinus Deddy
        </Navbar.Brand>
      </IndexLinkContainer> */}
        {/* <Navbar.Brand>
          <a href="/">Agustinus Deddy</a>
        </Navbar.Brand> */}
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
          <LinkContainer to="/about" activeClassName="active">
            <NavItem>About</NavItem>
          </LinkContainer>
          <LinkContainer to="/experiences" activeClassName="active">
            <NavItem>Experience</NavItem>
          </LinkContainer>
          <LinkContainer to="/educations" activeClassName="active">
            <NavItem>Education</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
