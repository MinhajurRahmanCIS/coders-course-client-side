import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Blog = () => {
    return (
        <div className="container">
            <h1 className="text-primary">Blog</h1>
            <div>
                <Row xs={1} md={2} className="g-3">
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title>What is cors?</Card.Title>
                                <Card.Text>
                                    CORS is a node. js package for providing a Connect/Express middleware that can be used to enable CORS with various options. Its allows a server to indicate any origins other than its own from which a browser should permit loading resources
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                            <Card.Title>How does the private route work?</Card.Title>
                                <Card.Text>
                                    The react private route component renders child components if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                            <Card.Title> Why are you using firebase? What other options do you have to implement authentication.</Card.Title>
                                <Card.Text>
                                    Firebase Authentication provides backend services easy-to-use SDKs and ready made UI libraries to authenticate users. It supports authentication using passwords, popular federated identity providers like Google, gitHub and more.
                                    Other Options
                                    <strong>
                                        • Back4App
                                        • AWS Amplify
                                        • Supabase
                                    </strong>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                <Card.Title> What is Node? How does Node work?</Card.Title>
                                <Card.Text>
                                    It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive. Node can be used to write server-side applications with access to the operating system  and system file.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Blog;