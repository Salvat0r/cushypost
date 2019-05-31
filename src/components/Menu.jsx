import React from "react";
import { Col, Clearfix, Navbar, Nav, NavItem } from "react-bootstrap";
import { IndexLinkContainer, LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../images/logo_cse.png";

const Menu = () => {
  return (
    <Col md={9} className="menu-cse">
      <Clearfix className="header-right">
        <div className="main-navigation animated">
          <Navbar default collapseOnSelect role="navigation" fluid>
            <Navbar.Header>
              <Navbar.Brand className="logo-smartphone">
                <div className="logo-div">
                  <NavItem href="/">
                    <div className="logo">
                      <img src={logo} alt="" />
                    </div>
                  </NavItem>
                </div>
                <div className="logo-div logo-font">
                  <p>
                    {" "}
                    Corriere <br /> Spedizioni <br /> Express{" "}
                  </p>
                </div>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                <IndexLinkContainer to="/">
                  <NavItem>HOME</NavItem>
                </IndexLinkContainer>
                <LinkContainer to="/spedisci">
                  <NavItem>SPEDISCI</NavItem>
                </LinkContainer>
                <LinkContainer to="/corrieri">
                  <NavItem>CORRIERI</NavItem>
                </LinkContainer>
                <LinkContainer to="/help">
                  <NavItem>ASSISTENZA</NavItem>
                </LinkContainer>
                <LinkContainer to="/login">
                  <NavItem>
                    <FontAwesomeIcon icon="user" /> LOGIN
                  </NavItem>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </Clearfix>
    </Col>
  );
};

export default Menu;
