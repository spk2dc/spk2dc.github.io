// Import
import React from "react";
import { Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// Component
export default function Footer() {
  return (
    <Navbar className='fixed-bottom' bg='dark' variant='dark'>
      <p className='footer'>
        <a
          className='footerInfo'
          href='https://github.com/spk2dc'
          target='_blank'
          rel='noopener noreferrer'
        >
          GitHub
        </a>
        <a
          className='footerInfo'
          href='https://www.linkedin.com/in/spk2dc/'
          target='_blank'
          rel='noopener noreferrer'
        >
          LinkedIn
        </a>
      </p>
    </Navbar>
  );
}
