import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Sherreka from "../images/sherreka.png";
import Typewriter from "typewriter-effect";

function Intro() {
  return (
    <Container>
      <Row className="me-auto">
        <Col>
          <div className="text-center">
            {/* <TypeWriterEffect
            textStyle={{
              fontFamily: 'Red Hat Display',
              color: '#3F3D56',
              fontWeight: 500,
              fontSize: '1.5em',
            }}
            startDelay={2000}
            cursorColor="#3F3D56"
            multiText={[
              'Hey there, my name is Sherreka!',
              'Welcome to my page!',
              'I appreciate you for stopping by!',
              'Feel free to look around...',
              'Hit me up if you want to get in touch!',
            ]}
            loop={true}
            nextTextDelay={1000}
            typeSpeed={100}
          /> */}
            <Typewriter
              options={{
                strings:[
                'Hey there, my name is Sherreka!',
                'Welcome to my page!',
                'I appreciate you for stopping by!',
                'Feel free to look around...',
                'Hit me up if you want to get in touch!',
                ],
                autoStart: true,
                loop: true,
              }}
          

            />
          </div>
        </Col>
        <Col>
          <img src={Sherreka} alt="stats of sherreka" />
        </Col>
      </Row>
    </Container>
  );
}

export default Intro;
