import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { AiFillLock } from "react-icons/ai";
const CourseDetails = () => {
    const courseDetails = useLoaderData();
    const { title, picture, teacher, totalQuiz, totalClass, info, duration, liveHelpSession } = courseDetails;
    return (
        <div className="container">
            <h2 className="text-secondary text-center my-3 bg-dark text-white p-2">{title}</h2>
           <div>
           <Card>
                <Card.Img variant="top rounded-0" src={picture} style={{ height: "250px", width: "250px" }} />
                <Card.Body>
               
                    <Card.Title variant='Light'> Teacher: <strong> {teacher}</strong> </Card.Title>
                    <Card.Text>
                    <strong>About {title}:</strong> {info}
                    <br />
                    <br />
                    • <strong>Total Class: </strong> {totalClass}
                    <br />
                    • <strong>Total Quiz: </strong> {totalQuiz}
                    <br />
                    • <strong>Duration: </strong> {duration}
                    <br />
                    • <strong>Live Help Session: </strong> {liveHelpSession}
                    </Card.Text>
                    <Link className='text-warning' to='/checkOut'><Button variant="warning text-dark rounded-0"><strong>Get Premium Access <AiFillLock></AiFillLock></strong></Button></Link>
                </Card.Body>
            </Card>
           </div>
        </div>
    );
};

export default CourseDetails;