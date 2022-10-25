import React from 'react';
import Spinner from 'react-bootstrap/Spinner'

const CheckOut = () => {
    return (
        <div className="container">
           <h1 className="text-success text-center mt-5 pt-5">Thanks For Purchasing  <Spinner animation="grow" /> </h1>
        </div>
    );
};

export default CheckOut;