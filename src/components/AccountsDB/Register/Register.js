import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Link } from 'react-router-dom';
const Register = () => {

    const handelLogInSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const url = form.url.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, url, email, password)

        if(password.length < 6) {
            toast.warning("Password length Must be 6");
        }
    }
    return (
        <div className='container mt-5'>
        <div className='border border-dark p-5'>
        <Form onSubmit={handelLogInSubmit}  className='container '>
             <h2 className="text-primary">Register!</h2>
             <Form.Group className="mb-3" controlId="formBasicName">
                 <Form.Label>Full Name</Form.Label>
                 <Form.Control type="name" name="name" placeholder="Enter name" required/>
             </Form.Group>
             <Form.Group className="mb-3" controlId="formBasicURL">
                 <Form.Label>Picture URL</Form.Label>
                 <Form.Control type="url" name="url" placeholder="Provide Picture url" required/>
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
             <ToastContainer />  
         </Form>
        </div>
     </div>
    );
};

export default Register;