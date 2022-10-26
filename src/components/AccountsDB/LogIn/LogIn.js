import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from '../../../context/UserContext';

const LogIn = () => {
    const {logIn, signInWithGoogle, signInWithGitHub} = useContext(AuthContext)
    const handelLogInSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        logIn(email, password)
        .then(result => {
          const user = result.user;
          form.reset();
          console.log(user)
        })
        .catch(error => 
          console.error(error))
    }

    const handelGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.log(error))
    }
    const handelGitHubLogin = () => {
        signInWithGitHub()
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(error => console.log(error))
    }
    return (
        <div className='container mt-5'>
            <div className='border border-dark p-5'>
                <Form onSubmit={handelLogInSubmit} className='container '>
                    <h2 className="text-primary">Please Login!</h2>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" required />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" required />
                        <Form.Text className="text-muted">
                            Haven't an Account Please <Link to='/register' variant="link">Register</Link>
                        </Form.Text>
                    </Form.Group>
                    <div>
                        <FaGoogle onClick={handelGoogleLogin} style={{ cursor: 'pointer' }} className='fs-1 text-success '></FaGoogle> <FaGithub onClick={handelGitHubLogin} style={{ cursor: 'pointer' }} className='fs-1 ms-2'></FaGithub>
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