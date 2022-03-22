import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import './Navbar.css'

function NavbarComponent() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={NavLink} to='/'>
          Social Media Site
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="me-auto">
            <Nav.Link as={NavLink} to='/'>
                Home
            </Nav.Link>
            
            <Nav.Link as={NavLink} to='/Posts'>
                Posts
            </Nav.Link>

            <Nav.Link as={NavLink} to='/about'>
                About Us
            </Nav.Link>

            <Nav.Link as={NavLink} to='/contact'>
                Contact Us
            </Nav.Link>

            <Nav.Link as={NavLink} to='/count'>
                Count
            </Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link as={NavLink} to='/signup'>
                Sign Up
            </Nav.Link>

            <Nav.Link as={NavLink} to='/login'>
                Login
            </Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent