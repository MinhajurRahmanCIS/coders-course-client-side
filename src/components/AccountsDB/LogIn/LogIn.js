import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from "react-icons/fa";
const LogIn = () => {

    return (
        <div className='container mt-5'>
           <div className='border border-dark p-5'>
           <Form className='container '>
                <h2 className="text-primary">Please Login!</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required/>

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required/>
                    <Form.Text className="text-muted">
                        Haven't an Account Please <Link to='/register' variant="link">Register</Link>
                    </Form.Text>
                </Form.Group>
                <div>
                <FaGoogle className='fs-1 text-success'></FaGoogle> <FaGithub className='fs-1 ms-2'></FaGithub>
                </div>
                <Button variant="info text-white mt-3" type="submit">
                    Log In
                </Button>
            </Form>
           </div>
        </div>
    );
};

export default LogIn;