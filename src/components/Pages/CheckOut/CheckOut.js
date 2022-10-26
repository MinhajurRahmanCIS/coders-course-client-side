import React from 'react';
import Spinner from 'react-bootstrap/Spinner'
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const checkOut = useLoaderData();

    return (
        <div className="container text-center mt-5 pt-5">
            <div className='border-dark border mx-auto w-50'>
            <h3> CCId : {checkOut.id}</h3>
            <p>Price : $ {checkOut.price}</p>
            <p>Course Name : {checkOut.title}</p>
            <p>Total Class : {checkOut.totalClass}</p>
            </div>
            <h5 className="text-success">Thanks For Purchasing  <Spinner animation="grow" /> </h5>
        </div>
    );
};

export default CheckOut;