import React from 'react'
import {Button, Form} from 'react-bootstrap'
import contact from '../assets/images/contact.png'

function Contact() {
  return (
    <div>
        <div className="container my-4">
            <div className="row">
                <div className="col-12">
                    <h1 className='display-4 fw-bold'>Have some questions?</h1>
                    <hr />
                </div>
            </div>
            <div className="row my-4">
                <div className="col-md-5">
                    <img src={contact} alt="Contact" width='100%'/>
                </div>
                <div className="col-md-7">
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleName.ControlInput1">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="text" placeholder="John Smith" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" rows={5} />
                        </Form.Group>
                        <Button variant="outline-dark" type="submit">
                            Send Message
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact