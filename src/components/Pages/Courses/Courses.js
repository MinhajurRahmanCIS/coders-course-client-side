import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Footer from '../Footer/Footer';
import { BsFacebook, BsTwitch, BsTwitter, BsMicrosoft } from "react-icons/bs";
const Courses = () => {
    const courseInfo = useLoaderData([]);
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-2 d-none d-lg-block">
                        <ListGroup>
                        <h4 className="my-3 border-bottom me-4">Latest Course!</h4>
                            {
                                courseInfo.map(info =>
                                    <Link key={info.id} className="text-decoration-none" to={`/coursedetails/${info.id}`}>
                                        <ListGroup.Item action variant="dark border-white rounded-0 ">{info.title}</ListGroup.Item>
                                    </Link>
                                )
                            }

                        </ListGroup>
                        <h4 className="my-3 border-bottom me-4">Follow Us!</h4>
                        <ListGroup>

                                    <Link className="text-decoration-none">
                                        <ListGroup.Item action variant="dark border-white rounded-0 "><BsFacebook></BsFacebook> Facebook</ListGroup.Item>
                                        <ListGroup.Item action variant="dark border-white rounded-0 "><BsTwitter></BsTwitter> Twitter</ListGroup.Item>
                                        <ListGroup.Item action variant="dark border-white rounded-0 "><BsTwitch></BsTwitch> Twitch</ListGroup.Item>
                                        <ListGroup.Item action variant="dark border-white rounded-0 "><BsMicrosoft></BsMicrosoft> Microsoft Outlook</ListGroup.Item>
                                    </Link>



                        </ListGroup>
                    </div>
                    <div className="col">
                        <h1 className="text-secondary my-3 bg-dark text-white p-3">Programming Language Course</h1>
                        <Row xs={1} md={3} className="g-4">
                            {
                                courseInfo.map(info => <Col key={info.id}>
                                    <Card className="bg-light">
                                        <Card.Img variant="top" src={info.picture} style={{ height: "250px" }} />
                                        <Card.Body className="border-top-dark border">
                                            <Card.Title>{info.title}</Card.Title>
                                            <Card.Text>
                                                <strong>For:</strong> {info.level}
                                                <br />
                                                <strong>Duration:</strong> {info.duration}
                                            </Card.Text>
                                            <Link to={`/coursedetails/${info.id}`}><Button variant="outline-primary" >See More</Button></Link>
                                        </Card.Body>
                                    </Card>
                                </Col>)
                            }

                        </Row>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <Footer></Footer>
        </div>
    );
};

export default Courses;