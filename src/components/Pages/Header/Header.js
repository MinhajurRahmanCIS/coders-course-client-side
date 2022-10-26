import React from 'react';
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaCode } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/UserContext';
import Button from 'react-bootstrap/Button';
import { MdOutlineDarkMode, MdDarkMode } from "react-icons/md";
import { useState } from 'react';
import { Image, Tooltip } from 'react-bootstrap';
import { AiOutlineUser } from "react-icons/ai";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
const Header = () => {

    const [open, setOpen] = useState(false);

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

                        </Nav>
                        <Nav>

                            {
                                open ?
                                    <Link onClick={() => setOpen(!open)} className='nav-link' ><MdOutlineDarkMode></MdOutlineDarkMode></Link>
                                    :
                                    <Link onClick={() => setOpen(!open)} className='nav-link' ><MdDarkMode></MdDarkMode></Link>
                            }

                            {
                                user ?
                                    <Button onClick={handelLogout} variant="outline-info">Log Out</Button>
                                    :
                                    <>
                                        <Link className='nav-link' to='/register'>Register</Link>
                                        <Link className='nav-link' to='/login'>LogIn</Link>
                                    </>
                            }

                            <OverlayTrigger
                                placement="bottom"
                                overlay={<Tooltip id="button-tooltip-2">{
                                    user?.displayName ? <span>{user?.displayName}</span> : <span>No user</span>
                                }</Tooltip>}
                            >
                                <Nav.Link >
                                    {user?.photoURL ?
                                        <Image
                                            style={{ height: '30px' }}
                                            roundedCircle
                                            src={user?.photoURL}>
                                        </Image>
                                        : <AiOutlineUser></AiOutlineUser>
                                    }
                                </Nav.Link>
                            </OverlayTrigger>

                        </Nav>



                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;