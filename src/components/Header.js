import React from "react";
import { Row, Col, Navbar, Nav, NavItem, NavbarText } from "reactstrap";
import { NavLink } from "react-router-dom";

const Header = props => {
  return (
    <Row className="mb-5">
      <Col xs="12">
        <Navbar color="light" light expand="md">
          <NavLink to="/" className="navbar-brand">
            Team Builder
          </NavLink>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink
                to="/add-new-team"
                className="nav-link"
                onMouseDown={e => e.preventDefault()}
              >
                <NavbarText className="btn btn-dark btn-sm text-white">
                  Add New Team
                </NavbarText>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="/add-new-member"
                className="nav-link"
                onMouseDown={e => e.preventDefault()}
              >
                <NavbarText className="btn btn-dark btn-sm text-white">
                  Add New Member
                </NavbarText>
              </NavLink>
            </NavItem>
          </Nav>
          {/* <NavbarText>Simple Text</NavbarText> */}
        </Navbar>
      </Col>
    </Row>
  );
};

export default Header;
