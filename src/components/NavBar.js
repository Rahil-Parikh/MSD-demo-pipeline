import React, { useState } from 'react';
import { Navbar,Nav,NavDropdown} from 'react-bootstrap';
// import "./css/naviBar.css"
const NaviBar = function () {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">MSD Project</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/aboutus">About Us</Nav.Link>
            <NavDropdown title="Links" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/tab">Tabular</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="//google.com">Google</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <Nav>
            <Nav.Link eventKey={2} href="//www.dankmemes.co">
                Dank memes
            </Nav.Link>
            </Nav>
        </Navbar.Collapse>
     </Navbar>
    </div>
  );
}
export default NaviBar;