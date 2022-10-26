import React from 'react';
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaCode } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/UserContext';
import Button from 'react-bootstrap/Button';
const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handelLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error));
    }
    return (
        <div className='container'>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Link className='nav-link navbar-brand' to='/'><FaCode className='text-danger'></FaCode> Coders</Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto ">
                            <Link className='nav-link' to='/'>Home</Link>
                            <Link className='nav-link' to='/courses'>Courses</Link>
                            <Link className='nav-link' to='/faq'>FAQ</Link>
                            <Link className='nav-link' to='/blog'>Blog</Link>
                            {
                                user?.displayName && <span className="text-white nav-link">Welcome, {user.displayName}</span>
                            }
                        </Nav>
                        <Nav>
                            {
                                user ?
                                    <Button onClick={handelLogout} variant="outline-info">Log Out</Button>
                                    :
                                    <>
                                        <Link className='nav-link' to='/register'>Register</Link>
                                        <Link className='nav-link' to='/login'>LogIn</Link>
                                    </>
                            }

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;