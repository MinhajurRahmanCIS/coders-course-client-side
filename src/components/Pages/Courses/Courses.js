import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const Courses = () => {
    const courseInfo = useLoaderData([]);
    return (
        <div className="container">
            <div className="row">
                <div className="col-2 d-none d-lg-block">

                    <h4 className="my-3 ">Courses List</h4>
                    <ListGroup>
                        <ListGroup.Item action variant="dark border-white rounded-0">
                            Dark
                        </ListGroup.Item>
                        <ListGroup.Item action variant="dark border-white rounded-0">
                            Dark
                        </ListGroup.Item>
                        <ListGroup.Item action variant="dark border-white rounded-0">
                            Dark
                        </ListGroup.Item>
                        <ListGroup.Item action variant="dark border-white rounded-0">
                            Dark
                        </ListGroup.Item>
                    </ListGroup>
                </div>
                <div className="col">
                    <h1 className="text-secondary">Course!</h1>
                    <Row xs={1} md={3} className="g-4">
                        {
                            courseInfo.map(info => <Col key={info.id}>
                                <Card>
                                    <Card.Img variant="top" src={info.picture} style={{ height: "250px" }} />
                                    <Card.Body>
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
    );
};

export default Courses;