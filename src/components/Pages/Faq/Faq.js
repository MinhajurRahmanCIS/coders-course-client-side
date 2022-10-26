import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../Footer/Footer';

const Faq = () => {

    const handelForm = event => {
        event.preventDefault();
        const form = event.target;
        const text = form.text.value;
        if (text.length > 3) {
            toast.info("Thanks for your feedback!!", {
                position: toast.POSITION.BOTTOM_CENTER
            });
            form.reset();
        }
    }

    return (
        <div>
            <div className="container">
                <Form onSubmit={handelForm} className='border border-dark p-5 mt-5'>
                    <h2 className="text-primary">Frequency Ask Question!</h2>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Please Enter Your Email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Your Questions</Form.Label>
                        <Form.Control type="text" name="text" as="textarea" rows={3} />
                    </Form.Group>
                    <Button type="submit" variant="info">Submit</Button>
                    <ToastContainer />
                </Form>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Footer></Footer>
        </div>
    );
};

export default Faq;