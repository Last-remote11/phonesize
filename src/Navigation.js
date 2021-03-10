import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'

const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>Phonesize</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;