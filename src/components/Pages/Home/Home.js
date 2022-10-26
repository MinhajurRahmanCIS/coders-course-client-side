import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Footer from '../Footer/Footer';
const Home = () => {
    return (
        <div>
            <div className="container">
                <Carousel >
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100 " style={{ height: "600px" }}
                            src="https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-html/sta-je-html.jpg"
                            alt="First slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            className="d-block w-100" style={{ height: "600px" }}
                            src="https://reactrouter.com/ogimage.png"
                            alt="Second slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100" style={{ height: "600px" }}
                            src="https://i0.wp.com/css-tricks.com/wp-content/uploads/2021/02/firebase-logo-icon.png?fit=1200%2C600&ssl=1"
                            alt="Third slide"
                        />

                    </Carousel.Item>
                </Carousel>
            </div>
            <br />
            <br />
            <br />
            <br />
            <Footer></Footer>
        </div>

    );
};

export default Home;