import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
const Home = () => {
    return (
        <div className="container">
            <Carousel >
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100 " style={{height:"600px"}}
                        src="https://miro.medium.com/max/1050/1*i3hzpSEiEEMTuWIYviYweQ.png"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100" style={{height:"600px"}}
                        src="https://reactrouter.com/ogimage.png"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100" style={{height:"600px"}}
                        src="https://i0.wp.com/css-tricks.com/wp-content/uploads/2021/02/firebase-logo-icon.png?fit=1200%2C600&ssl=1"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Home;