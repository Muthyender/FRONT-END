import React from "react";
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import '../Navbar/Navbar.css'

class NavbarComp extends React.Component
{
    render()
    {
        return(
            <Navbar className='my-navbar'>
                <Container>
                    <Navbar.Brand href="#home" className='my-navbar'>E-Commerce Site</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto my-navbar">
                        <Nav.Link href="#home" className='my-navbar'>Home</Nav.Link>
                        <Nav.Link href="#link" className='my-navbar'>Link</Nav.Link>
                        <NavDropdown title="Browse" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#signup" className='my-navbar'>Signup</Nav.Link>
                        <Nav.Link href="#login" className='my-navbar'>Login</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default NavbarComp