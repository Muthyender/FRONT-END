import React, { useState } from 'react'
import { Modal, Button, Nav, Form } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Signup() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="outline-dark" size="sm" className='m-1' onClick={handleShow}>
                <Nav.Link style={{color: 'inherit'}}>
                    <FontAwesomeIcon icon="fa-solid fa-user-plus " />&nbsp; Register
                </Nav.Link>
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Register</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Button variant="outline-primary w-100 my-2" >
                        Sign up with Google
                    </Button>
                    <Button variant="outline-primary w-100 my-2">
                        Sign up with Facebook
                    </Button>
                    <Form>
                        <Form.Group className="mb-3" controlId="formRegisterEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter username" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Agree to the terms and conditions" />
                        </Form.Group>
                        <Button variant="outline-dark w-100 my-3" type="submit">
                            Register
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Signup