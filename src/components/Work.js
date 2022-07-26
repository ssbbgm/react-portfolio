import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Project from './Project';
import project1 from '../images/project1.jpg';
import project2 from '../images/project2.jpg';
import project3 from '../images/project3.jpg';
import project4 from '../images/project4.jpg';
import project5 from '../images/project5.jpg';
import project6 from '../images/project6.jpg';

function Work({ image, title, text, github, deployed }) {
  return (
    <Container>
        <h2 className='text-center' id='portfolio'>Portfolio</h2>
        <Row>
            <Col>
                <Project 
                    image={project1} 
                    title='FindMyCrypto'
                    text='This application displays cryptocurrency data and allows a user to put in a budget for a crypto purchase to see what they can acquire within their budget.'
                    github='https://github.com/ssbbgm/FindMyCrypto'
                    deployed='https://ssbbgm.github.io/FindMyCrypto/'
                />
            </Col>
            <Col>
                <Project 
                    image={project2} 
                    title='Star Wars Quotes App'
                    text='This is an application to show proficiency with CRUD operations with the help of Star Wars!'
                    github='https://github.com/ssbbgm/star-wars-quotes-app'
                    deployed='https://salty-inlet-60606.herokuapp.com/'
                />
            </Col>
            <Col>
                <Project 
                    image={project3} 
                    title='War Card Game'
                    text='This is a game of War using a third-party API.'
                    github='https://github.com/ssbbgm/war-card-game'
                    deployed='https://ssbbgm.github.io/war-card-game/'
                />
            </Col>
        </Row>
        <Row className='mt-4'>
            <Col>
                <Project 
                    image={project4} 
                    title='URL Shortener'
                    text='This project allows a user to create their own short URLs.'
                    github='https://github.com/ssbbgm/url-shortener'
                    deployed='https://url-shortener-ssb.herokuapp.com/'
                />
            </Col>
            <Col>
                <Project 
                    image={project5} 
                    title='Password Generator'
                    text='This project is a password generator that allows the user to choose the length of the password and which characters will be used to create the password. '
                    github='https://github.com/ssbbgm/password-generator'
                    deployed='https://ssbbgm.github.io/password-generator/'
                />
            </Col>
            <Col>
                <Project 
                    image={project6} 
                    title='GetThreeWebApp'
                    text='This is a simple web application to demonstrate my proficiency with creating a full-stack project.'
                    github='https://github.com/ssbbgm/GetThreeWebApp'
                    deployed='https://boiling-waters-84330.herokuapp.com/'
                />
            </Col>
        </Row>
    </Container>
  );
}

export default Work;