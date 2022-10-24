import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaCode } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Header = () => {
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
                        </Nav>
                        <Nav>
                            <Link className='nav-link' to='/register'>Register</Link>
                            <Link className='nav-link' to='/login'>LogIn</Link>
                            <Link className='nav-link text-warning' to='/blog'>Premium</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;