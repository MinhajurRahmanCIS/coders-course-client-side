import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { Link } from 'react-router-dom';
const Register = () => {
    return (
        <div className='container mt-5'>
        <div className='border border-dark p-5'>
        <Form className='container '>
             <h2 className="text-primary">Register!</h2>
             <Form.Group className="mb-3" controlId="formBasicName">
                 <Form.Label>Name</Form.Label>
                 <Form.Control type="name" name="name" placeholder="Enter name" required/>
             </Form.Group>
             <Form.Group className="mb-3" controlId="formBasicEmail">
                 <Form.Label>Email</Form.Label>
                 <Form.Control type="email" name="email" placeholder="Enter email" required/>
             </Form.Group>

             <Form.Group className="mb-3" controlId="formBasicPassword">
                 <Form.Label>Password</Form.Label>
                 <Form.Control type="password" name="password" placeholder="Password" required/>
                 <Form.Text className="text-muted">
                     Already have an Account! <Link to='/login' variant="link">LogIn</Link>
                 </Form.Text>
             </Form.Group>
             <Button variant="info text-white mt-3" type="submit">
                 Register
             </Button>
         </Form>
        </div>
     </div>
    );
};

export default Register;