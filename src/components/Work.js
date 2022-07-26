import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Project from './Project';

function Work() {
  return (
    <Container>
        <h2 className='text-center' id='portfolio'>Portfolio</h2>
        <Row>
            <Col><Project /></Col>
            <Col>2 of 3</Col>
            <Col>3 of 3</Col>
        </Row>
        <Row>
            <Col>1 of 3</Col>
            <Col>2 of 3</Col>
            <Col>3 of 3</Col>
        </Row>
    </Container>
  );
}

export default Work;