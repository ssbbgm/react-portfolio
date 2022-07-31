import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Sherreka from "../images/sherreka.png";
import Typewriter from "typewriter-effect";

function Intro() {
  return (
    <Container fluid="md" className="mt-100">
      <Row>
        <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <div id="typewriter">
            <Typewriter
              options={{
                strings: [
                  "Hey there, my name is Sherreka!",
                  "Welcome to my page!",
                  "I appreciate you for stopping by!",
                  "Feel free to look around...",
                  "Hit me up if you want to get in touch!",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </Col>
        <Col style={{ display: 'flex', justifyContent: 'center'}}>
            <img src={Sherreka} alt="stats of sherreka"  />
        </Col>
      </Row>
    </Container>
  );
}

export default Intro;