import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Project () {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div className='d-flex justify-content-around'>
            <a className='btn btn-primary space-evenly' href='#'>GitHub</a>
            <a className='btn btn-primary' href='#'>Project</a>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Project;