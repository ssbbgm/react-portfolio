import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import resume from '../images/resume.jpg';


function Resume() {
  return (
    <Container>
    <h2 className='text-center mt-3' id='about'>Resume</h2>
      <Row className='me-auto'>
        <Col>
            <h3>Click image for a copy of my resume! </h3>
            <a href='https://drive.google.com/file/d/1IHTezjZatwZdYPpu41erNZ6eqANcyvor/view?usp=sharing' target='_blank' rel='noreferrer'><Image src={resume}  rounded/></a>
        </Col>
        <Col>
            <Container>
                <Row>
                    <Col></Col>
                    <Col></Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col></Col>
                    <Col></Col>
                </Row>
            </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default Resume;