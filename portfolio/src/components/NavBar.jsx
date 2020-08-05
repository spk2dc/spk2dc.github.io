import React from "react";
import { Nav, Navbar } from "react-bootstrap";

export default function NavBar() {
  return (
    <Navbar bg='dark' variant='dark'>
      <Navbar.Brand href={`${process.env.PUBLIC_URL}/`}>Senthil</Navbar.Brand>
      <Nav className='mr-auto'>
        <Nav.Link href={`${process.env.PUBLIC_URL}/projects`}>
          Projects
        </Nav.Link>
        <Nav.Link href={`${process.env.PUBLIC_URL}/resume`}>Resume</Nav.Link>
      </Nav>
    </Navbar>
  );
}
