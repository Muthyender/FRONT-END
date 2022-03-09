import React, {useEffect, useState} from "react";
import {Form, Button} from 'react-bootstrap'

function Login()
{
    const [loginDetails, setLoginDetails] = useState(
        {
            email : '',
            password: '',
            isChecked: false,
        }
    )

    useEffect(() =>
    {
        console.log(loginDetails)
    }, [loginDetails])

    const handleSubmit = () =>
    {
        alert(JSON.stringify(loginDetails))
    }

    return (
        <>
            <Form  style={{width: '50%', margin: '50px auto'}}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"  value={loginDetails.email} onChange={(e) => setLoginDetails({...loginDetails, email:e.target.value})}/>
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={loginDetails.password} onChange={(e) => setLoginDetails({...loginDetails, password:e.target.value})}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="I agree with the terms and conditions" defaultChecked={loginDetails.isChecked} onChange={(e) => setLoginDetails({...loginDetails, isChecked: e.target.checked})}/>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default Login