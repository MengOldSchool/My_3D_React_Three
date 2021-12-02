import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

function MyNavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          MOJO <i class="fa-solid fa-dog"></i>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">
              <i class="fa-solid fa-house"></i>
            </Nav.Link>
            <Nav.Link href="#link">
              Play <i class="fa-solid fa-paw"></i>
            </Nav.Link>
            <Nav.Link href="#link">
              Family <i class="fas fa-bone"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavBar;
