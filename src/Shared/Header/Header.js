import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../Images/Logo/logo.png";

const Header = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        sticky="top"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img className="brand-img" src={logo} alt="img" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="services">Services</Nav.Link>
              <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>
              <Nav.Link as={Link} to="about">About</Nav.Link>
            </Nav>

            <Nav>
              <Nav.Link as={Link} to="login">Log In </Nav.Link>
              <Nav.Link as={Link} to="signup"> Sign Up </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
