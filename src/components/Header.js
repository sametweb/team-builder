import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavbarText } from "reactstrap";
import { NavLink } from "react-router-dom";

const Header = props => {
  return (
    <Navbar color="light" light expand="md">
      <NavLink to="/" className="navbar-brand">
        Team Builder
      </NavLink>
      <Nav className="mr-auto" navbar>
        <NavItem>
          <NavLink to="/add-new-team" className="nav-link">
            <NavbarText>Add New Team</NavbarText>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/add-new-member" className="nav-link">
            <NavbarText>Add New Member</NavbarText>
          </NavLink>
        </NavItem>
      </Nav>
      <NavbarText>Simple Text</NavbarText>
    </Navbar>
  );
};

export default Header;
