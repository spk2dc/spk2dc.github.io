import React from "react";
import { Nav, Navbar } from "react-bootstrap";

export default function NavBar() {
  return (
    <Navbar bg='dark' variant='dark'>
      <Navbar.Brand href='/portfolio'>Senthil</Navbar.Brand>
      <Nav className='mr-auto'>
        <Nav.Link href='/portfolio/projects'>Projects</Nav.Link>
        <Nav.Link href='/portfolio/resume'>Resume</Nav.Link>
      </Nav>
    </Navbar>
  );
}
