import React, { useRef } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { AiFillLock } from "react-icons/ai";
import { useReactToPrint } from "react-to-print";
import { GrDocumentPdf } from "react-icons/gr";
const CourseDetails = () => {
    const courseDetails = useLoaderData();
    const { title, picture, teacher, totalQuiz, price, totalClass, info, duration, liveHelpSession } = courseDetails;
    const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
    return (
        
        <div className="container" ref={componentRef} >
            <h2 className="text-secondary text-center my-3 bg-dark text-white p-2">{title}</h2>
           <div>
           <Card>
                <Card.Img variant="top rounded-0" src={picture} style={{ height: "250px", width: "250px" }} />
                <Card.Body>
               
                    <Card.Title variant='Light'> Teacher: <strong> {teacher}</strong> </Card.Title>
                    <Card.Text>
                    <strong>About {title}:</strong> {info}
                    <br />
                    • <strong>Price: $</strong>{price}
                    <br />
                    • <strong>Total Quiz: </strong> {totalQuiz}
                    <br />
                    • <strong>Total Class: </strong> {totalClass}
                    <br />
                    • <strong>Duration: </strong> {duration}
                    <br />
                    • <strong>Live Help Session: </strong> {liveHelpSession}
                    </Card.Text>

                    <Link className='text-warning' to={`/checkOut/${courseDetails.id}`}><Button variant="warning text-dark rounded-0"><strong>Get Premium Access <AiFillLock></AiFillLock></strong></Button></Link>
                    <Link className='text-warning'><Button variant="light text-dark rounded-0 ms-3" onClick={handlePrint}><GrDocumentPdf></GrDocumentPdf> Print</Button></Link>
                </Card.Body>
            </Card>
           </div>
        </div>
    );
};

export default CourseDetails;