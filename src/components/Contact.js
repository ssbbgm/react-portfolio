import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {useRef} from 'react';
import emailjs from '@emailjs/browser';



// service_7lrqkcn

function BasicExample() {
  return (
    <Container>
        <h2 className='text-center mt-3' id='contact'>Contact</h2>
        <Container className="d-flex justify-content-center">
            <Form className='mb-0 w-50'>
            <Row>
                <Form.Group as={Col} controlId="formGridFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter first name" required/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Last Name" required/>
                </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicInfo">
                <Form.Label>Message</Form.Label>
                <Form.Control as='textarea' rows={3} placeholder="Insert Your Message"  required/>
            </Form.Group>
            <Container className='d-flex justify-content-center'>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Container>
            </Form>
        </Container>
    </Container>
  );
}

export default BasicExample;