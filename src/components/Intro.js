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
          <div id="typewriter" textAlign='center'>
            <Typewriter
              options={{
                strings: [
                  "<h1>Hey there, my name is <span style='color: blue;'>Sherreka!</span></h1>",
                  "<h1>Welcome to my page!</h1>",
                  "<h1>I appreciate you for stopping by!</h1>",
                  "<h1>Feel free to look around...</h1>",
                  "<h1>Hit me up if you want to get in touch!</h1>",
                ],
                cursor: '❤️',
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </Col>
        <Col style={{ display: 'flex', justifyContent: 'center'}}>
            <img src={Sherreka} alt="sherreka smiling"  />
        </Col>
      </Row>
    </Container>
  );
}

export default Intro;