import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useLoaderData } from 'react-router-dom';
const Courses = () => {
    const courseInfo = useLoaderData();
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
                      
                            <Col>
                                <Card>
                                    <Card.Img variant="top" src="holder.js/100px160" />
                                    <Card.Body>
                                        <Card.Title>Card title</Card.Title>
                                        <Card.Text>
                                            This is a longer card with supporting text below as a natural
                                            lead-in to additional content. This content is a little bit
                                            longer.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                          
                    </Row>
                </div>

            </div>
        </div>
    );
};

export default Courses;