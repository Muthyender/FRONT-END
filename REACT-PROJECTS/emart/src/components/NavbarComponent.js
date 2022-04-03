import React from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {NavLink} from 'react-router-dom'
import {useSelector} from 'react-redux'
import Login from './Login'
import Signup from './Signup'

function NavbarComponent() 
{
    const state = useSelector(state => state.handleCart)
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand as={NavLink} to="/" className='fw-bold fs-4'>E-MART</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link as={NavLink} to="/products">Products</Nav.Link>
                            <Nav.Link as={NavLink} to="/about">About Us</Nav.Link>
                            <Nav.Link as={NavLink} to="/contact">Contact Us</Nav.Link>
                        </Nav>
                        <Login />
                        <Signup />
                        <Button variant="outline-dark" size="sm" className='m-1'>
                            <Nav.Link as={NavLink} to="/cart" style={{color: 'inherit'}}>
                                <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />&nbsp; Cart ({state.length})
                            </Nav.Link>
                        </Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavbarComponent